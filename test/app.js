/**
 * AyurGuard — app.js
 * Core: auth (localStorage), shared nav, page guard, utils
 */

(function () {
    'use strict';

    /* =============================================
       AUTH — localStorage-based
       ============================================= */

    /**
     * Hash a string (simple, for demo only)
     */
    function hashStr(str) {
        return btoa(encodeURIComponent(str));
    }

    /**
     * Get all registered users
     */
    function getUsers() {
        return JSON.parse(localStorage.getItem('ag_users') || '[]');
    }

    /**
     * Save all users
     */
    function saveUsers(users) {
        localStorage.setItem('ag_users', JSON.stringify(users));
    }

    /**
     * Register a new user
     * Returns { ok: true } or { ok: false, error: string }
     */
    window.AG_register = function (name, email, age, gender, password) {
        const users = getUsers();
        if (users.find(u => u.email === email)) {
            return { ok: false, error: 'An account with this email already exists.' };
        }
        const user = {
            id: Date.now().toString(),
            name: name.trim(),
            email: email.trim().toLowerCase(),
            age: parseInt(age),
            gender,
            passwordHash: hashStr(password),
            prakriti: null,       // set after first complete dosha test
            createdAt: new Date().toISOString(),
        };
        users.push(user);
        saveUsers(users);
        return { ok: true, user };
    };

    /**
     * Login — returns { ok: true, user } or { ok: false, error }
     */
    window.AG_login = function (email, password) {
        const users = getUsers();
        const user = users.find(u => u.email === email.trim().toLowerCase());
        if (!user) return { ok: false, error: 'No account found with this email.' };
        if (user.passwordHash !== hashStr(password)) return { ok: false, error: 'Incorrect password.' };
        // Store session
        localStorage.setItem('ag_session', JSON.stringify({ userId: user.id, name: user.name, email: user.email }));
        return { ok: true, user };
    };

    /**
     * Logout
     */
    window.AG_logout = function () {
        localStorage.removeItem('ag_session');
        window.location.href = 'login.html';
    };

    /**
     * Get current logged-in user (full object)
     */
    window.AG_getUser = function () {
        const session = JSON.parse(localStorage.getItem('ag_session') || 'null');
        if (!session) return null;
        const users = getUsers();
        return users.find(u => u.id === session.userId) || null;
    };

    /**
     * Is logged in?
     */
    window.AG_isLoggedIn = function () {
        return !!localStorage.getItem('ag_session');
    };

    /**
     * Require auth — redirect to login if not logged in
     */
    window.AG_requireAuth = function () {
        if (!AG_isLoggedIn()) {
            window.location.href = 'login.html';
            return false;
        }
        return true;
    };

    /**
     * Update user prakriti after first full dosha test
     */
    window.AG_setPrakriti = function (prakriti) {
        const users = getUsers();
        const session = JSON.parse(localStorage.getItem('ag_session') || 'null');
        if (!session) return;
        const idx = users.findIndex(u => u.id === session.userId);
        if (idx !== -1) {
            users[idx].prakriti = prakriti;
            saveUsers(users);
        }
    };

    /* =============================================
       HEALTH LOG — save daily dosha results
       ============================================= */

    /**
     * Save today's dosha result to history
     */
    window.AG_saveResult = function (result) {
        const user = AG_getUser();
        if (!user) return;
        const key = `ag_history_${user.id}`;
        const history = JSON.parse(localStorage.getItem(key) || '[]');

        const today = new Date().toISOString().split('T')[0];
        // Remove any existing entry for today (overwrite)
        const filtered = history.filter(h => h.date !== today);
        filtered.push({ date: today, ...result });
        // Keep last 30 days
        const trimmed = filtered.slice(-30);
        localStorage.setItem(key, JSON.stringify(trimmed));
    };

    /**
     * Get history for current user
     */
    window.AG_getHistory = function () {
        const user = AG_getUser();
        if (!user) return [];
        const key = `ag_history_${user.id}`;
        return JSON.parse(localStorage.getItem(key) || '[]');
    };

    /**
     * Get last 7 days
     */
    window.AG_getWeekHistory = function () {
        const history = AG_getHistory();
        return history.slice(-7);
    };

    /**
     * Get today's result (if exists)
     */
    window.AG_getTodayResult = function () {
        const history = AG_getHistory();
        const today = new Date().toISOString().split('T')[0];
        return history.find(h => h.date === today) || null;
    };

    /* =============================================
       NAVBAR — render shared nav on each page
       ============================================= */

    /**
     * Inject the shared navbar + particles into any page
     * @param {string} activePage — 'home'|'dosha'|'herb'|'seasonal'|'food'|'dashboard'
     */
    window.AG_renderNav = function (activePage) {
        const user = AG_getUser();

        // Particles
        const particleHTML = `<div class="particles" aria-hidden="true">${Array.from({ length: 14 }, () => '<div class="particle"></div>').join('')}</div>`;

        const navHTML = `
    <header class="navbar" id="navbar" role="banner">
      <div class="nav-container">
        <a href="index.html" class="nav-logo" aria-label="AyurGuard Home">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M12 2C6.5 2 4 5.5 4 9c0 4 2 6.5 5 8l1 2h4l1-2c3-1.5 5-4 5-8 0-3.5-2.5-7-8-7z" stroke="url(#nf)" stroke-width="1.5" fill="none"/>
            <path d="M12 10 Q10 8 8 10 Q10 14 12 16 Q14 14 16 10 Q14 8 12 10z" stroke="url(#nf)" stroke-width="1.2" fill="none"/>
            <defs><linearGradient id="nf" x1="4" y1="2" x2="20" y2="21" gradientUnits="userSpaceOnUse"><stop stop-color="#00C896"/><stop offset="1" stop-color="#7B61FF"/></linearGradient></defs>
          </svg>
          AyurGuard
        </a>

        <nav class="nav-menu" id="navMenu" role="navigation" aria-label="Main navigation">
          <a href="index.html"          class="nav-link ${activePage === 'home' ? 'active' : ''}"     >Home</a>
          <a href="dosha-test.html"     class="nav-link ${activePage === 'dosha' ? 'active' : ''}"    >Dosha Test</a>
          <a href="symptom-checker.html" class="nav-link ${activePage === 'symptoms' ? 'active' : ''}" >Symptoms</a>
          <a href="herb-safety.html"    class="nav-link ${activePage === 'herb' ? 'active' : ''}"     >Herb Safety</a>
          <a href="seasonal-guide.html" class="nav-link ${activePage === 'seasonal' ? 'active' : ''}" >Seasonal</a>
          <a href="food-checker.html"   class="nav-link ${activePage === 'food' ? 'active' : ''}"     >Food Check</a>
          ${user ? `<a href="dashboard.html" class="nav-link ${activePage === 'dashboard' ? 'active' : ''}">Dashboard</a>` : ''}
        </nav>

        <div class="nav-actions">
          ${user
                ? `<span class="nav-user"><span class="nav-user__dot"></span>${user.name.split(' ')[0]}</span>
               <button class="btn btn-outline btn-sm" onclick="AG_logout()">Logout</button>`
                : `<a href="login.html" class="btn btn-primary btn-sm" id="nav-login-btn">Login</a>`
            }
          <button class="hamburger" id="hamburger" aria-label="Toggle menu" aria-expanded="false">
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </header>`;

        // Prepend to body
        document.body.insertAdjacentHTML('afterbegin', particleHTML + navHTML);

        // Hamburger toggle
        const hamburger = document.getElementById('hamburger');
        const navMenu = document.getElementById('navMenu');
        hamburger.addEventListener('click', () => {
            const isOpen = navMenu.classList.toggle('open');
            hamburger.classList.toggle('open', isOpen);
            hamburger.setAttribute('aria-expanded', isOpen);
        });
        navMenu.querySelectorAll('.nav-link').forEach(l => {
            l.addEventListener('click', () => {
                navMenu.classList.remove('open');
                hamburger.classList.remove('open');
            });
        });

        // Scroll effect
        window.addEventListener('scroll', () => {
            document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 30);
        }, { passive: true });
    };

    /* =============================================
       SCROLL ANIMATIONS
       ============================================= */
    window.AG_initScrollAnimations = function () {
        const els = document.querySelectorAll('[data-animate]');
        if (!('IntersectionObserver' in window)) {
            els.forEach(e => e.classList.add('is-visible'));
            return;
        }
        const obs = new IntersectionObserver(entries => {
            entries.forEach(e => {
                if (e.isIntersecting) { e.target.classList.add('is-visible'); obs.unobserve(e.target); }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
        els.forEach(e => obs.observe(e));
    };

    /* =============================================
       UTILS
       ============================================= */

    /**
     * Get dominant dosha from scores object {vata, pitta, kapha}
     */
    window.AG_getDominantDosha = function (scores) {
        const { vata, pitta, kapha } = scores;
        if (vata >= pitta && vata >= kapha) return 'Vata';
        if (pitta >= vata && pitta >= kapha) return 'Pitta';
        return 'Kapha';
    };

    /**
     * Format date string nicely
     */
    window.AG_formatDate = function (isoStr) {
        const d = new Date(isoStr);
        return d.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
    };

    /**
     * Create a toast notification
     */
    window.AG_toast = function (msg, type = 'success') {
        const toast = document.createElement('div');
        toast.className = `ag-toast ag-toast--${type}`;
        toast.textContent = msg;
        document.body.appendChild(toast);
        setTimeout(() => toast.classList.add('show'), 50);
        setTimeout(() => { toast.classList.remove('show'); setTimeout(() => toast.remove(), 400); }, 3500);
    };

    /**
     * Simple autocomplete
     */
    window.AG_autocomplete = function (inputEl, list, onSelect) {
        let dropEl = document.getElementById(inputEl.id + '_drop');
        if (!dropEl) {
            dropEl = document.createElement('ul');
            dropEl.className = 'autocomplete-drop';
            dropEl.id = inputEl.id + '_drop';
            inputEl.parentNode.style.position = 'relative';
            inputEl.parentNode.appendChild(dropEl);
        }

        inputEl.addEventListener('input', () => {
            const val = inputEl.value.toLowerCase();
            dropEl.innerHTML = '';
            if (!val) { dropEl.classList.remove('open'); return; }
            const matches = list.filter(i => i.toLowerCase().includes(val)).slice(0, 8);
            if (!matches.length) { dropEl.classList.remove('open'); return; }
            matches.forEach(m => {
                const li = document.createElement('li');
                li.textContent = m;
                li.addEventListener('mousedown', (e) => {
                    e.preventDefault();
                    inputEl.value = m;
                    dropEl.classList.remove('open');
                    if (onSelect) onSelect(m);
                });
                dropEl.appendChild(li);
            });
            dropEl.classList.add('open');
        });

        inputEl.addEventListener('blur', () => setTimeout(() => dropEl.classList.remove('open'), 200));
    };

    /* Run on load */
    document.addEventListener('DOMContentLoaded', () => {
        AG_initScrollAnimations();
    });

})();
