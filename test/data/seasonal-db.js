/**
 * AyurGuard — data/seasonal-db.js
 * Indian seasons (Ritucharya) → dosha mapping + lifestyle advice
 */

// Month (0-indexed) → season
window.MONTH_TO_SEASON = {
    0: 'Shishira',   // January   — Late Winter
    1: 'Shishira',   // February  — Late Winter
    2: 'Vasanta',    // March     — Spring
    3: 'Vasanta',    // April     — Spring
    4: 'Grishma',    // May       — Summer
    5: 'Grishma',    // June      — Summer
    6: 'Varsha',     // July      — Monsoon
    7: 'Varsha',     // August    — Monsoon
    8: 'Sharada',    // September — Autumn
    9: 'Sharada',    // October   — Autumn
    10: 'Hemanta',    // November  — Early Winter
    11: 'Hemanta',    // December  — Early Winter
};

window.SEASONS = {
    Shishira: {
        name: 'Shishira',
        english: 'Late Winter',
        months: 'January – February',
        emoji: '❄️',
        color: '#818CF8',
        colorDark: 'rgba(129,140,248,0.15)',
        dominantDosha: 'Kapha',
        description: 'Late winter accumulates Kapha dosha. The body is heavier, cold, and prone to congestion. Agni (digestive fire) begins to awaken after deep winter.',
        diet: {
            eat: [
                'Warm, freshly cooked foods',
                'Wheat, rice, black gram',
                'Sugarcane products, milk, ghee',
                'Old grains and legumes',
                'Warming spices: ginger, pepper, cinnamon',
                'Sesame seeds and sesame oil',
                'Honey (not cooked)',
            ],
            avoid: [
                'Cold and refrigerated foods',
                'Raw salads and cold smoothies',
                'Excessive dairy (especially ice cream)',
                'Heavy fried foods',
                'Excessive sweet foods',
            ]
        },
        routine: {
            wake: 'Before sunrise (5:30–6:00 AM)',
            exercise: 'Vigorous exercise — brisk walking, jogging, cycling',
            massage: 'Warm sesame oil full body massage (Abhyanga)',
            bath: 'Warm water bath with herbal powders',
            clothing: 'Warm, layered clothing; avoid cold wind',
            sleep: 'Reduce daytime sleep; sleep before 10 PM'
        },
        herbs: ['Trikatu (ginger, pepper, pippali)', 'Triphala', 'Ashwagandha', 'Guggulu'],
        yoga: 'Sun Salutations, backbends, twists to build heat and stimulate Agni',
        pranayama: 'Kapalbhati (bellows breath), Bhastrika to warm the body',
        warning: 'High risk of respiratory infections, colds, congestion, and joint stiffness.'
    },

    Vasanta: {
        name: 'Vasanta',
        english: 'Spring',
        months: 'March – April',
        emoji: '🌸',
        color: '#34D399',
        colorDark: 'rgba(52,211,153,0.15)',
        dominantDosha: 'Kapha',
        description: 'Spring liquefies accumulated winter Kapha. This is the ideal time for detoxification (Panchakarma). Allergies, coughs, and colds are common as Kapha melts.',
        diet: {
            eat: [
                'Light, dry, and easily digestible foods',
                'Old barley, wheat, and honey',
                'Bitter vegetables (neem, fenugreek leaves)',
                'Ginger and black pepper tea',
                'Mango, amla, pomegranate',
                'Pungent, bitter, astringent tastes',
                'Warm soups with minimal oil',
            ],
            avoid: [
                'Heavy, oily, cold foods',
                'Excessive meat and fish',
                'New grains (freshly harvested)',
                'Excessive dairy products',
                'Sweet and sour tastes in excess',
            ]
        },
        routine: {
            wake: 'Before sunrise (5:00–5:30 AM)',
            exercise: 'Vigorous daily exercise; yoga, running',
            massage: 'Dry powder massage (Udwartana) instead of oil massage',
            bath: 'Warm to cool water',
            clothing: 'Light, breathable cotton',
            sleep: 'Strictly avoid daytime sleep during spring'
        },
        herbs: ['Neem', 'Triphala', 'Trikatu', 'Guduchi', 'Amalaki'],
        yoga: 'Energizing flow — Kapha-busting sequences, inversions, twists',
        pranayama: 'Kapalbhati, Bhastrika, Surya Bhedana (right nostril breathing)',
        warning: 'Peak season for allergies, hay fever, sinusitis, and Kapha-type depression.'
    },

    Grishma: {
        name: 'Grishma',
        english: 'Summer',
        months: 'May – June',
        emoji: '☀️',
        color: '#FB923C',
        colorDark: 'rgba(251,146,60,0.15)',
        dominantDosha: 'Pitta',
        description: 'Summer elevates Pitta dosha due to intense heat. Agni paradoxically weakens as the body redirects energy for cooling. Light diet is essential.',
        diet: {
            eat: [
                'Cool, light, and liquid-rich foods',
                'Sweet, bitter, and astringent tastes',
                'Coconut water, rose sherbet, lassi',
                'Cucumber, watermelon, mint raita',
                'Rice, milk, ghee in moderation',
                'Ripe sweet fruits',
                'Fennel and coriander water',
            ],
            avoid: [
                'Spicy, pungent, hot and sour foods',
                'Alcohol and coffee',
                'Excessive salt',
                'Sour fruits (lemon, tamarind excess)',
                'Meat and heavy proteins',
                'Skipping meals (weakens Agni further)',
            ]
        },
        routine: {
            wake: 'Before sunrise (5:00 AM)',
            exercise: 'Light exercise; early morning walks, swimming; avoid midday exertion',
            massage: 'Coconut oil massage; cooling Shirodhara if available',
            bath: 'Cool water baths; rose water on skin',
            clothing: 'Light, loose cotton and linen; light colors',
            sleep: 'Short afternoon rest (not long sleep) is permitted in summer'
        },
        herbs: ['Amalaki (Amla)', 'Brahmi', 'Shatavari', 'Chandana (sandalwood)', 'Vetiver'],
        yoga: 'Moon Salutation, gentle forward folds, cooling restorative yoga',
        pranayama: 'Sheetali (cooling breath), Sheetkari, Chandra Bhedana',
        warning: 'Risk of sunstroke, dehydration, heat rash, excessive Pitta inflammation, and acidity.'
    },

    Varsha: {
        name: 'Varsha',
        english: 'Monsoon',
        months: 'July – August',
        emoji: '🌧️',
        color: '#60A5FA',
        colorDark: 'rgba(96,165,250,0.15)',
        dominantDosha: 'Vata',
        description: 'Monsoon aggravates Vata dosha due to irregular, cold, and damp weather. The already weakened Agni from summer is further stressed. Ayurveda prescribes this as Panchakarma season.',
        diet: {
            eat: [
                'Warm, freshly cooked foods only',
                'Sour and salty tastes (Vata-pacifying)',
                'Old rice, wheat, barley',
                'Light soups and khichdi',
                'Rock salt, ginger, garlic',
                'Warm herbal teas (ginger, tulsi)',
                'Small amounts of honey',
            ],
            avoid: [
                'Raw and uncooked foods',
                'River fish and water during floods',
                'Heavy legumes (difficult to digest)',
                'Leafy vegetables (high contamination risk)',
                'Cold beverages and refrigerated foods',
                'Eating out frequently',
            ]
        },
        routine: {
            wake: 'Sunrise (6:00 AM)',
            exercise: 'Moderate indoor exercise; avoid getting wet in rain',
            massage: 'Warm sesame oil daily Abhyanga',
            bath: 'Warm water bath; avoid staying wet',
            clothing: 'Warm, dry clothing; avoid dampness',
            sleep: 'No daytime sleep; sleep before 10 PM'
        },
        herbs: ['Guduchi (Giloy)', 'Triphala', 'Trikatu', 'Ashwagandha', 'Dashmoola'],
        yoga: 'Grounding practice — slow Vinyasa, standing poses, forward bends',
        pranayama: 'Nadi Shodhana (alternate nostril), Anulom Vilom',
        warning: 'High risk of waterborne diseases, viral infections, joint pain, skin infections, fungal issues.'
    },

    Sharada: {
        name: 'Sharada',
        english: 'Autumn',
        months: 'September – October',
        emoji: '🍂',
        color: '#F59E0B',
        colorDark: 'rgba(245,158,11,0.15)',
        dominantDosha: 'Pitta',
        description: 'Autumn releases accumulated monsoon Pitta. After the cooling rains, Pitta that built up is released by the returning sun. Pitta disorders peak in early autumn.',
        diet: {
            eat: [
                'Sweet, bitter, and astringent tastes',
                'Light, easily digestible foods',
                'Old rice, barley, green gram',
                'Seasonal vegetables: ridge gourd, bottle gourd',
                'Pomegranate, amla, dried grapes',
                'Coriander, fennel, coconut water',
                'Cow\'s milk with turmeric',
            ],
            avoid: [
                'Spicy and sour foods',
                'Alcohol and fermented foods',
                'Heavy oily meals',
                'Buffalo milk and heavy meats',
                'Sleeping during daytime',
                'River water and dew exposure',
            ]
        },
        routine: {
            wake: 'Before sunrise',
            exercise: 'Moderate exercise; avoid intense heat',
            massage: 'Coconut or sunflower oil massage',
            bath: 'Cool to lukewarm water',
            clothing: 'Light cotton; avoid synthetic materials in heat',
            sleep: 'Regular sleep; short afternoon rest if needed'
        },
        herbs: ['Amalaki', 'Guduchi', 'Neem', 'Manjistha', 'Chandana'],
        yoga: 'Balancing — twists, forward folds, Moon Salutation',
        pranayama: 'Sheetali, Nadi Shodhana for Pitta balance',
        warning: 'Risk of skin rashes, acne, diarrhea, eye disorders, and urinary tract infections as Pitta is released.'
    },

    Hemanta: {
        name: 'Hemanta',
        english: 'Early Winter',
        months: 'November – December',
        emoji: '🍃',
        color: '#A78BFA',
        colorDark: 'rgba(167,139,250,0.15)',
        dominantDosha: 'Kapha',
        description: 'Early winter is when Agni (digestive fire) is naturally strongest. The body can handle and digest heavier, more nourishing foods. This is the best season to build ojas (vital essence).',
        diet: {
            eat: [
                'Nourishing, heavy, and oily foods',
                'Sweet, sour, and salty tastes',
                'Wheat, new rice, sesame',
                'Milk with Ashwagandha or dates',
                'Meat soups (for non-vegetarians)',
                'Sugarcane, jaggery products',
                'Warm spiced beverages',
            ],
            avoid: [
                'Light, dry, cold foods',
                'Raw foods and cold drinks',
                'Excessive fasting',
                'Bitter and astringent excess',
            ]
        },
        routine: {
            wake: 'Before sunrise',
            exercise: 'Vigorous daily exercise to utilize strong Agni',
            massage: 'Full body warm oil massage daily (Abhyanga)',
            bath: 'Warm water with herbal powders',
            clothing: 'Heavy, warm clothing',
            sleep: 'Adequate sleep; regulated schedule'
        },
        herbs: ['Ashwagandha', 'Shatavari', 'Bala', 'Amalaki', 'Chyawanprash'],
        yoga: 'Strengthening and building — Warrior poses, Sun Salutations, hold poses longer',
        pranayama: 'Ujjayi breath, Bhramari for calm and focus',
        warning: 'If Agni is not used properly through exercise, excess nourishment leads to Kapha accumulation and weight gain.'
    },
};

/**
 * Get current season based on month
 */
window.getCurrentSeason = function () {
    const month = new Date().getMonth();
    const seasonName = MONTH_TO_SEASON[month];
    return SEASONS[seasonName];
};
