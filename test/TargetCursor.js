/**
 * TargetCursor — vanilla JS port of the React-Bits TargetCursor component
 * Requires GSAP (loaded via CDN).
 *
 * Usage:
 *   initTargetCursor({
 *     targetSelector: '.cursor-target',   // elements that trigger the snap
 *     spinDuration:   2,                  // seconds per full rotation
 *     hideDefaultCursor: true,
 *     hoverDuration:  0.2,               // snap-in speed (seconds)
 *     parallaxOn:     true
 *   });
 */
function initTargetCursor(options = {}) {
    const {
        targetSelector = '.cursor-target',
        spinDuration = 2,
        hideDefaultCursor = true,
        hoverDuration = 0.2,
        parallaxOn = true
    } = options;

    // ── Mobile detection ─────────────────────────────────────────────────────
    const hasTouchScreen = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const isSmallScreen = window.innerWidth <= 768;
    const mobileRegex = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i;
    const isMobileUA = mobileRegex.test((navigator.userAgent || navigator.vendor || window.opera).toLowerCase());
    const isMobile = (hasTouchScreen && isSmallScreen) || isMobileUA;
    if (isMobile) return;          // no cursor on mobile

    // ── Constants ─────────────────────────────────────────────────────────────
    const BORDER_WIDTH = 3;
    const CORNER_SIZE = 12;

    // ── Build DOM ─────────────────────────────────────────────────────────────
    const wrapper = document.createElement('div');
    wrapper.className = 'target-cursor-wrapper';
    wrapper.innerHTML = `
    <div class="target-cursor-dot"></div>
    <div class="target-cursor-corner corner-tl"></div>
    <div class="target-cursor-corner corner-tr"></div>
    <div class="target-cursor-corner corner-br"></div>
    <div class="target-cursor-corner corner-bl"></div>
  `;
    document.body.appendChild(wrapper);

    const dot = wrapper.querySelector('.target-cursor-dot');
    const corners = Array.from(wrapper.querySelectorAll('.target-cursor-corner'));

    // ── State ─────────────────────────────────────────────────────────────────
    let spinTl = null;
    let activeTarget = null;
    let currentLeaveHandler = null;
    let resumeTimeout = null;
    let tickerFn = null;
    let targetCornerPositions = null;
    const activeStrength = { current: 0 };

    // ── Cursor style ──────────────────────────────────────────────────────────
    const originalCursor = document.body.style.cursor;
    if (hideDefaultCursor) document.body.style.cursor = 'none';

    // ── Initial GSAP placement ────────────────────────────────────────────────
    gsap.set(wrapper, {
        xPercent: -50,
        yPercent: -50,
        x: window.innerWidth / 2,
        y: window.innerHeight / 2
    });

    // ── Spin timeline ─────────────────────────────────────────────────────────
    function createSpinTimeline() {
        if (spinTl) spinTl.kill();
        spinTl = gsap.timeline({ repeat: -1 })
            .to(wrapper, { rotation: '+=360', duration: spinDuration, ease: 'none' });
    }
    createSpinTimeline();

    // ── Move cursor ───────────────────────────────────────────────────────────
    function moveCursor(x, y) {
        gsap.to(wrapper, { x, y, duration: 0.1, ease: 'power3.out' });
    }

    // ── Ticker (parallax snap) ────────────────────────────────────────────────
    tickerFn = () => {
        if (!targetCornerPositions) return;
        const strength = activeStrength.current;
        if (strength === 0) return;

        const cursorX = gsap.getProperty(wrapper, 'x');
        const cursorY = gsap.getProperty(wrapper, 'y');

        corners.forEach((corner, i) => {
            const currentX = gsap.getProperty(corner, 'x');
            const currentY = gsap.getProperty(corner, 'y');

            const targetX = targetCornerPositions[i].x - cursorX;
            const targetY = targetCornerPositions[i].y - cursorY;

            const finalX = currentX + (targetX - currentX) * strength;
            const finalY = currentY + (targetY - currentY) * strength;

            const duration = strength >= 0.99 ? (parallaxOn ? 0.2 : 0) : 0.05;

            gsap.to(corner, {
                x: finalX,
                y: finalY,
                duration,
                ease: duration === 0 ? 'none' : 'power1.out',
                overwrite: 'auto'
            });
        });
    };

    // ── Helpers ───────────────────────────────────────────────────────────────
    function cleanupTarget(target) {
        if (currentLeaveHandler) {
            target.removeEventListener('mouseleave', currentLeaveHandler);
        }
        currentLeaveHandler = null;
    }

    function resetCorners() {
        gsap.killTweensOf(corners);
        const positions = [
            { x: -CORNER_SIZE * 1.5, y: -CORNER_SIZE * 1.5 },
            { x: CORNER_SIZE * 0.5, y: -CORNER_SIZE * 1.5 },
            { x: CORNER_SIZE * 0.5, y: CORNER_SIZE * 0.5 },
            { x: -CORNER_SIZE * 1.5, y: CORNER_SIZE * 0.5 }
        ];
        const tl = gsap.timeline();
        corners.forEach((corner, idx) =>
            tl.to(corner, { x: positions[idx].x, y: positions[idx].y, duration: 0.3, ease: 'power3.out' }, 0)
        );
    }

    // ── Mouse-move ────────────────────────────────────────────────────────────
    const moveHandler = e => moveCursor(e.clientX, e.clientY);
    window.addEventListener('mousemove', moveHandler);

    // ── Scroll: check if still over target ───────────────────────────────────
    const scrollHandler = () => {
        if (!activeTarget) return;
        const mx = gsap.getProperty(wrapper, 'x');
        const my = gsap.getProperty(wrapper, 'y');
        const el = document.elementFromPoint(mx, my);
        const still = el && (el === activeTarget || el.closest(targetSelector) === activeTarget);
        if (!still && currentLeaveHandler) currentLeaveHandler();
    };
    window.addEventListener('scroll', scrollHandler, { passive: true });

    // ── Click press / release ─────────────────────────────────────────────────
    const mouseDownHandler = () => {
        gsap.to(dot, { scale: 0.7, duration: 0.3 });
        gsap.to(wrapper, { scale: 0.9, duration: 0.2 });
    };
    const mouseUpHandler = () => {
        gsap.to(dot, { scale: 1, duration: 0.3 });
        gsap.to(wrapper, { scale: 1, duration: 0.2 });
    };
    window.addEventListener('mousedown', mouseDownHandler);
    window.addEventListener('mouseup', mouseUpHandler);

    // ── Enter handler ─────────────────────────────────────────────────────────
    const enterHandler = e => {
        // Walk up from e.target to find the closest matching element
        let target = null;
        let current = e.target;
        while (current && current !== document.body) {
            if (current.matches && current.matches(targetSelector)) {
                target = current;
                break;
            }
            current = current.parentElement;
        }
        if (!target) return;
        if (activeTarget === target) return;

        if (activeTarget) cleanupTarget(activeTarget);
        if (resumeTimeout) { clearTimeout(resumeTimeout); resumeTimeout = null; }

        activeTarget = target;
        corners.forEach(c => gsap.killTweensOf(c));

        // Stop spin
        gsap.killTweensOf(wrapper, 'rotation');
        if (spinTl) spinTl.pause();
        gsap.set(wrapper, { rotation: 0 });

        const rect = target.getBoundingClientRect();
        const cursorX = gsap.getProperty(wrapper, 'x');
        const cursorY = gsap.getProperty(wrapper, 'y');

        targetCornerPositions = [
            { x: rect.left - BORDER_WIDTH, y: rect.top - BORDER_WIDTH },
            { x: rect.right + BORDER_WIDTH - CORNER_SIZE, y: rect.top - BORDER_WIDTH },
            { x: rect.right + BORDER_WIDTH - CORNER_SIZE, y: rect.bottom + BORDER_WIDTH - CORNER_SIZE },
            { x: rect.left - BORDER_WIDTH, y: rect.bottom + BORDER_WIDTH - CORNER_SIZE }
        ];

        gsap.ticker.add(tickerFn);
        gsap.to(activeStrength, { current: 1, duration: hoverDuration, ease: 'power2.out' });

        corners.forEach((corner, i) =>
            gsap.to(corner, {
                x: targetCornerPositions[i].x - cursorX,
                y: targetCornerPositions[i].y - cursorY,
                duration: 0.2,
                ease: 'power2.out'
            })
        );

        // ── Leave handler ─────────────────────────────────────────────────────
        const leaveHandler = () => {
            gsap.ticker.remove(tickerFn);
            targetCornerPositions = null;
            gsap.set(activeStrength, { current: 0, overwrite: true });
            activeTarget = null;

            resetCorners();

            // Resume spin after a short delay
            resumeTimeout = setTimeout(() => {
                if (!activeTarget && spinTl) {
                    const currentRotation = gsap.getProperty(wrapper, 'rotation');
                    const normalizedRotation = currentRotation % 360;
                    spinTl.kill();
                    spinTl = gsap.timeline({ repeat: -1 })
                        .to(wrapper, { rotation: '+=360', duration: spinDuration, ease: 'none' });
                    gsap.to(wrapper, {
                        rotation: normalizedRotation + 360,
                        duration: spinDuration * (1 - normalizedRotation / 360),
                        ease: 'none',
                        onComplete: () => spinTl && spinTl.restart()
                    });
                }
                resumeTimeout = null;
            }, 50);

            cleanupTarget(target);
        };

        currentLeaveHandler = leaveHandler;
        target.addEventListener('mouseleave', leaveHandler);
    };

    window.addEventListener('mouseover', enterHandler, { passive: true });

    // ── Cleanup (call to destroy) ────────────────────────────────────────────
    return function destroy() {
        gsap.ticker.remove(tickerFn);
        window.removeEventListener('mousemove', moveHandler);
        window.removeEventListener('mouseover', enterHandler);
        window.removeEventListener('scroll', scrollHandler);
        window.removeEventListener('mousedown', mouseDownHandler);
        window.removeEventListener('mouseup', mouseUpHandler);
        if (activeTarget) cleanupTarget(activeTarget);
        if (spinTl) spinTl.kill();
        document.body.style.cursor = originalCursor;
        wrapper.remove();
    };
}
