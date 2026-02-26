/**
 * AyurGuard — data/dosha-rules.js
 * Symptom scoring table: each symptom maps to Vata, Pitta, Kapha scores
 */

window.DOSHA_QUESTIONS = [
    // === SLEEP ===
    {
        id: 'sleep',
        category: 'Sleep',
        question: 'How is your sleep quality?',
        icon: '🌙',
        options: [
            { text: 'Light, broken, difficulty falling asleep', vata: 3, pitta: 0, kapha: 0 },
            { text: 'Moderate — wake up occasionally due to heat or thoughts', vata: 0, pitta: 3, kapha: 0 },
            { text: 'Heavy, long, hard to wake up', vata: 0, pitta: 0, kapha: 3 },
        ]
    },
    // === APPETITE ===
    {
        id: 'appetite',
        category: 'Appetite',
        question: 'How is your appetite today?',
        icon: '🍽️',
        options: [
            { text: 'Irregular — sometimes hungry, sometimes not', vata: 3, pitta: 0, kapha: 0 },
            { text: 'Strong — intense hunger, irritable if late', vata: 0, pitta: 3, kapha: 0 },
            { text: 'Low — not very hungry, can skip meals easily', vata: 0, pitta: 0, kapha: 3 },
        ]
    },
    // === MOOD ===
    {
        id: 'mood',
        category: 'Mood',
        question: 'What best describes your mood today?',
        icon: '😌',
        options: [
            { text: 'Anxious, worried, restless, or scattered', vata: 3, pitta: 0, kapha: 0 },
            { text: 'Irritable, angry, or overly critical', vata: 0, pitta: 3, kapha: 0 },
            { text: 'Dull, lethargic, unmotivated, or sad', vata: 0, pitta: 0, kapha: 3 },
        ]
    },
    // === DIGESTION ===
    {
        id: 'digestion',
        category: 'Digestion',
        question: 'How is your digestion?',
        icon: '🌿',
        options: [
            { text: 'Bloating, gas, constipation, or irregular', vata: 3, pitta: 0, kapha: 0 },
            { text: 'Acidity, heartburn, or loose stools', vata: 0, pitta: 3, kapha: 0 },
            { text: 'Slow digestion, feeling heavy after eating', vata: 0, pitta: 0, kapha: 3 },
        ]
    },
    // === ENERGY ===
    {
        id: 'energy',
        category: 'Energy',
        question: 'How are your energy levels?',
        icon: '⚡',
        options: [
            { text: 'Variable — bursts of energy followed by exhaustion', vata: 3, pitta: 0, kapha: 0 },
            { text: 'High but intense — driven and pushing hard', vata: 0, pitta: 3, kapha: 0 },
            { text: 'Consistently low — tired, heavy, or slow', vata: 0, pitta: 0, kapha: 3 },
        ]
    },
    // === SKIN ===
    {
        id: 'skin',
        category: 'Skin & Body',
        question: 'What does your skin feel like recently?',
        icon: '✨',
        options: [
            { text: 'Dry, rough, cracked, or flaky', vata: 3, pitta: 0, kapha: 0 },
            { text: 'Oily, sensitive, prone to rashes or acne', vata: 0, pitta: 3, kapha: 0 },
            { text: 'Smooth but oily or puffy with water retention', vata: 0, pitta: 0, kapha: 3 },
        ]
    },
    // === STRESS ===
    {
        id: 'stress',
        category: 'Stress Response',
        question: 'How do you typically respond to stress?',
        icon: '🧘',
        options: [
            { text: 'Fearful, panicky, overwhelmed, or freeze up', vata: 3, pitta: 0, kapha: 0 },
            { text: 'Angry, competitive, or need to solve it immediately', vata: 0, pitta: 3, kapha: 0 },
            { text: 'Withdraw, become quiet, or eat more', vata: 0, pitta: 0, kapha: 3 },
        ]
    },
    // === MIND ===
    {
        id: 'mind',
        category: 'Mind & Focus',
        question: 'How is your mental clarity today?',
        icon: '🧠',
        options: [
            { text: 'Racing thoughts, hard to focus, forgetful', vata: 3, pitta: 0, kapha: 0 },
            { text: 'Sharp, focused but overly critical or judgemental', vata: 0, pitta: 3, kapha: 0 },
            { text: 'Foggy, slow, hard to start tasks', vata: 0, pitta: 0, kapha: 3 },
        ]
    },
    // === TONGUE ===
    {
        id: 'tongue',
        category: 'Physical Signs',
        question: 'What does your tongue look like this morning?',
        icon: '👅',
        options: [
            { text: 'Thin coat, dry, or brownish tinge', vata: 3, pitta: 0, kapha: 0 },
            { text: 'Yellow or red coat, bad breath', vata: 0, pitta: 3, kapha: 0 },
            { text: 'Thick white coat, heavy or swollen', vata: 0, pitta: 0, kapha: 3 },
        ]
    },
    // === TEMPERATURE ===
    {
        id: 'temp',
        category: 'Body Temperature',
        question: 'How do you feel temperature-wise?',
        icon: '🌡️',
        options: [
            { text: 'Always cold, especially hands and feet', vata: 3, pitta: 0, kapha: 0 },
            { text: 'Frequently hot, intolerant of heat', vata: 0, pitta: 3, kapha: 0 },
            { text: 'Generally cool and steady, avoid cold weather', vata: 0, pitta: 0, kapha: 3 },
        ]
    },
];

// Dosha result profiles
window.DOSHA_PROFILES = {
    Vata: {
        color: '#A78BFA',
        colorDark: 'rgba(167,139,250,0.15)',
        emoji: '🌬️',
        element: 'Air + Space',
        description: 'Your Vata is currently elevated. Vata governs movement, breath, and the nervous system. When imbalanced, it causes anxiety, dryness, and irregularity.',
        eat: ['Warm, oily, and heavy foods', 'Sweet, sour, and salty tastes', 'Ghee, sesame oil, warm milk', 'Root vegetables, rice, wheat', 'Cooked oats, bananas, avocados'],
        avoid: ['Cold, raw, and dry foods', 'Bitter and astringent tastes', 'Crackers, popcorn, raw salads', 'Carbonated drinks', 'Excessive fasting'],
        routine: ['Wake up at same time daily', 'Warm sesame oil self-massage (Abhyanga)', 'Gentle yoga and walking', 'Warm baths', 'Sleep before 10 PM', 'Avoid excessive screen time'],
        herbs: ['Ashwagandha', 'Shatavari', 'Dashamula', 'Bala'],
        yoga: 'Grounding — slow, deliberate poses: Child\'s Pose, Mountain, Warrior I',
        meditation: 'Body scan meditation, grounding breathwork (Nadi Shodhana)'
    },
    Pitta: {
        color: '#FB923C',
        colorDark: 'rgba(251,146,60,0.15)',
        emoji: '🔥',
        element: 'Fire + Water',
        description: 'Your Pitta is currently elevated. Pitta governs digestion, metabolism, and transformation. When imbalanced, it causes inflammation, irritability, and overheating.',
        eat: ['Cool, refreshing foods', 'Sweet, bitter, and astringent tastes', 'Coconut water, mint, coriander', 'Leafy greens, cucumbers, sweet fruits', 'Basmati rice, milk, ghee'],
        avoid: ['Spicy, sour, and salty foods', 'Fried and oily foods', 'Alcohol and caffeine', 'Red meat', 'Eating when angry or stressed'],
        routine: ['Wake up early (before 6 AM)', 'Cooling pranayama (Sheetali breath)', 'Swimming or gentle exercise', 'Moon gazing in evening', 'Avoid working through lunch', 'Take cool showers'],
        herbs: ['Amalaki', 'Brahmi', 'Neem', 'Shatavari'],
        yoga: 'Cooling — Moon Salutation, Forward Folds, Twists, Savasana',
        meditation: 'Cooling visualization (moonlight, ocean), compassion meditation'
    },
    Kapha: {
        color: '#34D399',
        colorDark: 'rgba(52,211,153,0.15)',
        emoji: '🌊',
        element: 'Earth + Water',
        description: 'Your Kapha is currently elevated. Kapha governs structure, lubrication, and stability. When imbalanced, it causes lethargy, congestion, and attachment.',
        eat: ['Light, dry, and warming foods', 'Bitter, pungent, and astringent tastes', 'Ginger tea, honey (not cooked), black pepper', 'Legumes, barley, millet', 'Leafy greens, apples, pomegranate'],
        avoid: ['Heavy, sweet, and oily foods', 'Cold drinks and ice cream', 'Excessive dairy and wheat', 'Sleeping after meals', 'Oversleeping'],
        routine: ['Wake up before sunrise (5–6 AM)', 'Vigorous exercise (running, cycling)', 'Dry brushing before shower', 'Stimulating spices in diet', 'Avoid daytime naps', 'Social and mentally stimulating activities'],
        herbs: ['Trikatu', 'Guggulu', 'Punarnava', 'Triphala'],
        yoga: 'Energizing — Sun Salutation, Backbends, Inversions, Fast-paced flow',
        meditation: 'Active visualization, mantra chanting, energizing breathwork (Kapalabhati)'
    }
};

// Quick symptom checker symptoms
window.SYMPTOMS = [
    { text: 'Dry skin or lips', vata: 2, pitta: 0, kapha: 0 },
    { text: 'Constipation or bloating', vata: 2, pitta: 0, kapha: 0 },
    { text: 'Anxiety or racing thoughts', vata: 3, pitta: 0, kapha: 0 },
    { text: 'Cold hands and feet', vata: 2, pitta: 0, kapha: 0 },
    { text: 'Insomnia or light sleep', vata: 2, pitta: 0, kapha: 0 },
    { text: 'Joint cracking or pain', vata: 2, pitta: 0, kapha: 0 },
    { text: 'Acidity or heartburn', vata: 0, pitta: 3, kapha: 0 },
    { text: 'Skin rashes or inflammation', vata: 0, pitta: 2, kapha: 0 },
    { text: 'Excessive anger or irritability', vata: 0, pitta: 3, kapha: 0 },
    { text: 'Fever or feeling overheated', vata: 0, pitta: 2, kapha: 0 },
    { text: 'Yellow eyes or yellowing skin', vata: 0, pitta: 2, kapha: 0 },
    { text: 'Excessive thirst', vata: 0, pitta: 2, kapha: 0 },
    { text: 'Fatigue or lethargy', vata: 0, pitta: 0, kapha: 3 },
    { text: 'Congestion or runny nose', vata: 0, pitta: 0, kapha: 2 },
    { text: 'Weight gain or water retention', vata: 0, pitta: 0, kapha: 2 },
    { text: 'Depression or lack of motivation', vata: 0, pitta: 0, kapha: 3 },
    { text: 'Excessive sleep or drowsiness', vata: 0, pitta: 0, kapha: 2 },
    { text: 'Slow digestion after eating', vata: 0, pitta: 0, kapha: 2 },
    { text: 'Cough with mucus', vata: 0, pitta: 0, kapha: 2 },
    { text: 'Nausea or loss of appetite', vata: 1, pitta: 1, kapha: 1 },
];
