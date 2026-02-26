/**
 * AyurGuard — data/food-db.js
 * Viruddha Ahara (incompatible food combinations) database
 */

window.FOODS_LIST = [
    'Milk', 'Banana', 'Fish', 'Honey', 'Ghee', 'Yogurt (Curd)',
    'Eggs', 'Lemon', 'Salt', 'Radish', 'Chicken', 'Mango',
    'Dates', 'Rice', 'Onion', 'Garlic', 'Melon (Watermelon/Cantaloupe)',
    'Cucumber', 'Nightshade (Tomato)', 'Black Gram (Urad Dal)',
    'Sesame Seeds', 'Sprouts', 'Potato', 'Wheat', 'Coffee/Tea',
    'Alcohol', 'Ice Cream', 'Cheese', 'Buttermilk', 'Papaya',
];

// incompatible: true = Viruddha Ahara (bad), false = compatible (good)
window.FOOD_COMBINATIONS = [
    {
        food1: 'Milk',
        food2: 'Banana',
        incompatible: true,
        severity: 'moderate',
        reason: 'Viruddha Ahara — heavy combination',
        explanation: 'Milk and banana together are considered incompatible in Ayurveda. This combination is heavy, slow to digest, produces ama (toxins), and may cause congestion, heaviness, and cough. Banana is sour post-digestive, while milk is sweet — conflicting post-digestive tastes.',
        effect: 'Digestive sluggishness, mucus production, heaviness, possible allergic reactions in sensitive individuals.',
        alternative: 'If you love this combination, prefer very ripe bananas with lukewarm milk, or add cardamom and cinnamon to improve digestibility.'
    },
    {
        food1: 'Milk',
        food2: 'Fish',
        incompatible: true,
        severity: 'high',
        reason: 'Viruddha Ahara — protein conflict + skin disorders',
        explanation: 'One of the most prohibited combinations in Ayurveda. Fish is hot in potency while milk is cold. Together they create a toxic environment in the gut, potentially causing skin diseases, eczema, vitiligo, and digestive toxins.',
        effect: 'Skin disorders, eczema, rashes, white patches, gut toxicity.',
        alternative: 'Keep fish and dairy products separated by at least 2–3 hours.'
    },
    {
        food1: 'Honey',
        food2: 'Ghee',
        incompatible: true,
        severity: 'high',
        reason: 'Viruddha Ahara — equal quantities toxic',
        explanation: 'Honey and ghee in equal proportions by weight are considered highly toxic in Ayurveda. They have opposing qualities — honey is dry, light, and heating; ghee is oily, heavy, and cooling. When mixed equally, they create a toxic combination that is difficult to metabolize.',
        effect: 'Slow poisoning, gut toxicity, metabolic disruption.',
        alternative: 'Use in unequal proportions (e.g., 1 tsp honey with 2 tbsp ghee). Never equal amounts by weight.'
    },
    {
        food1: 'Yogurt (Curd)',
        food2: 'Milk',
        incompatible: true,
        severity: 'moderate',
        reason: 'Viruddha Ahara — fermented + fresh dairy',
        explanation: 'Curd is already sour and fermented. Mixing it with fresh milk can cause digestive confusion — the acidic curd can curdle the milk in the stomach, leading to bloating, gas, and acidity.',
        effect: 'Bloating, gas, acid reflux, skin issues.',
        alternative: 'Use curd and milk separately. Buttermilk is a good substitute for curd with food.'
    },
    {
        food1: 'Eggs',
        food2: 'Milk',
        incompatible: true,
        severity: 'moderate',
        reason: 'Viruddha Ahara — animal protein conflict',
        explanation: 'Both eggs and milk are heavy protein sources with different digestion requirements. They can overload the digestive system and form toxins when consumed together.',
        effect: 'Digestive overload, bloating, heaviness, acne in susceptible individuals.',
        alternative: 'Space them apart by 2–3 hours. Many traditional recipes avoid this combination.'
    },
    {
        food1: 'Milk',
        food2: 'Lemon',
        incompatible: true,
        severity: 'high',
        reason: 'Viruddha Ahara — acid curdles milk',
        explanation: 'Lemon (acidic) curdles milk immediately when combined. This is a clearly incompatible combination that renders the milk indigestible and leads to digestive issues.',
        effect: 'Immediate curdling, digestive distress, nausea, acid imbalance.',
        alternative: 'Never combine. Use lemon in water-based drinks, not with milk or dairy.'
    },
    {
        food1: 'Milk',
        food2: 'Salt',
        incompatible: true,
        severity: 'moderate',
        reason: 'Viruddha Ahara — opposing properties',
        explanation: 'Salt and milk are considered incompatible in Ayurveda. Salt increases Pitta while milk is cooling and Pitta-pacifying. This opposition disrupts digestive harmony.',
        effect: 'Skin disorders, digestive disturbance, possible eczema with long-term use.',
        alternative: 'Add sweet spices (cardamom, cinnamon, saffron) to milk instead of salt.'
    },
    {
        food1: 'Radish',
        food2: 'Milk',
        incompatible: true,
        severity: 'moderate',
        reason: 'Viruddha Ahara — pungent with sweet',
        explanation: 'Radish is pungent and heating; milk is sweet and cooling. This combination creates conflicting digestive demands and may cause inflammatory conditions.',
        effect: 'Bloating, gas, inflammation, skin problems.',
        alternative: 'Eat radish with warm water or buttermilk instead of milk.'
    },
    {
        food1: 'Chicken',
        food2: 'Milk',
        incompatible: true,
        severity: 'high',
        reason: 'Viruddha Ahara — meat + dairy',
        explanation: 'Meat and dairy are a classic incompatible combination. They have different digestion rates and opposing properties — meat is hot, heavy, and pungent; milk is cold and sweet.',
        effect: 'Digestive toxins (ama), inflammatory conditions, skin disorders.',
        alternative: 'Keep chicken and dairy separated by 3–4 hours. Use coconut milk in chicken dishes as a substitute.'
    },
    {
        food1: 'Mango',
        food2: 'Yogurt (Curd)',
        incompatible: true,
        severity: 'moderate',
        reason: 'Viruddha Ahara — fruit with fermented dairy',
        explanation: 'Ripe mango is sweet and heavy; curd is sour and fermented. This combination increases Kapha and Pitta simultaneously and creates digestive imbalance.',
        effect: 'Congestion, skin conditions, digestive heaviness.',
        alternative: 'Have mango as a standalone fruit or with milk (though this too should be limited).'
    },
    {
        food1: 'Honey',
        food2: 'Nightshade (Tomato)',
        incompatible: false,
        severity: 'none',
        reason: 'Compatible combination',
        explanation: 'Honey and tomato are generally considered compatible and do not have a specific Viruddha Ahara classification. However, moderation is advised for Pitta types as both can be heating.',
        effect: 'Generally well-tolerated.',
        alternative: null
    },
    {
        food1: 'Melon (Watermelon/Cantaloupe)',
        food2: 'Milk',
        incompatible: true,
        severity: 'high',
        reason: 'Viruddha Ahara — fruit with dairy',
        explanation: 'Melons are light, cooling, and digest quickly. Milk is heavy and slow to digest. Combined, the fast-digesting melon gets trapped with slow-digesting milk, fermenting in the gut and producing toxins.',
        effect: 'Severe bloating, gas, nausea, acid reflux.',
        alternative: 'Eat melon alone, at least 1 hour before or after any dairy.'
    },
    {
        food1: 'Melon (Watermelon/Cantaloupe)',
        food2: 'Yogurt (Curd)',
        incompatible: true,
        severity: 'high',
        reason: 'Viruddha Ahara — fast fruit with slow dairy',
        explanation: 'Same as melon with milk — melons digest much faster than curd, leading to fermentation and gas when combined.',
        effect: 'Bloating, fermentation, digestive discomfort.',
        alternative: 'Eat melon on an empty stomach or as a standalone snack.'
    },
    {
        food1: 'Banana',
        food2: 'Buttermilk',
        incompatible: true,
        severity: 'moderate',
        reason: 'Viruddha Ahara — sour + sweet',
        explanation: 'Banana is sweet and heavy while buttermilk is sour. This combination can diminish digestive fire (Agni) and increase Kapha and Ama.',
        effect: 'Reduces Agni, increases mucus, promotes Ama formation.',
        alternative: 'Enjoy banana with warm spiced milk or alone as a snack.'
    },
    {
        food1: 'Fish',
        food2: 'Yogurt (Curd)',
        incompatible: true,
        severity: 'high',
        reason: 'Viruddha Ahara — marine protein + fermented dairy',
        explanation: 'Ayurveda strongly contraindicates fish with curd/yogurt. Both are claimed to change the skin color, cause skin diseases, and create severe digestive toxins. This is one of the most widely recognized incompatible combinations.',
        effect: 'Skin disorders, vitiligo, eczema, gut toxicity, rashes.',
        alternative: 'Maintain a minimum 2–3 hour gap between fish and any fermented dairy.'
    },
    {
        food1: 'Dates',
        food2: 'Milk',
        incompatible: false,
        severity: 'none',
        reason: 'Compatible and beneficial',
        explanation: 'Dates and milk are considered a nutritious, compatible Ayurvedic combination. Dates in warm milk (Kharjura Payasam) is actually a traditional Ayurvedic tonic for strength and vitality.',
        effect: 'Nourishing, rejuvenating tonic. Excellent for Vata types.',
        alternative: null
    },
    {
        food1: 'Honey',
        food2: 'Milk',
        incompatible: false,
        severity: 'none',
        reason: 'Compatible in unequal proportions',
        explanation: 'Honey in warm (not hot) milk is a traditional Ayurvedic combination for sleep and immunity. However — never heat honey or add it to boiling hot milk as cooking honey creates toxic compounds (HMF).',
        effect: 'Beneficial for immunity, sleep, and Vata balance when used correctly.',
        alternative: 'Add honey only to lukewarm milk (below 40°C). Never to boiling hot milk.'
    },
    {
        food1: 'Ghee',
        food2: 'Rice',
        incompatible: false,
        severity: 'none',
        reason: 'Highly compatible — classic Ayurvedic combination',
        explanation: 'Ghee and rice are one of Ayurveda\'s most sacred and beneficial food combinations. Ghee aids in the absorption of fat-soluble nutrients from rice, improves digestion, and is grounding for Vata types.',
        effect: 'Nourishing, grounding, aids digestion, enhances nutrient absorption.',
        alternative: null
    },
    {
        food1: 'Lemon',
        food2: 'Cucumber',
        incompatible: false,
        severity: 'none',
        reason: 'Compatible and refreshing',
        explanation: 'Lemon and cucumber together are generally compatible and widely used in salads and detox drinks. No Viruddha Ahara classification applies.',
        effect: 'Hydrating, cooling, good for Pitta types.',
        alternative: null
    },
    {
        food1: 'Coffee/Tea',
        food2: 'Milk',
        incompatible: true,
        severity: 'moderate',
        reason: 'Modern + Ayurvedic concern',
        explanation: 'From an Ayurvedic perspective, milk (sweet, cooling) and coffee/tea (bitter, astringent, heating) have opposing properties. The tannins in tea bind to milk proteins reducing their nutritional value. Ayurveda recommends avoiding this excess.',
        effect: 'Reduces nutrient absorption from milk, increases acidity, disturbs Pitta.',
        alternative: 'Use plant-based milk alternatives, or drink tea/coffee without milk (with ginger instead).'
    },
    {
        food1: 'Onion',
        food2: 'Milk',
        incompatible: true,
        severity: 'moderate',
        reason: 'Viruddha Ahara — pungent with sweet',
        explanation: 'Onions are pungent and heating while milk is sweet and cooling. This conflicting combination may disturb Pitta and cause digestive discomfort.',
        effect: 'Digestive disturbance, increased Pitta, possible skin issues with long-term use.',
        alternative: 'Keep onion-heavy meals separated from milk consumption.'
    },
    {
        food1: 'Alcohol',
        food2: 'Milk',
        incompatible: true,
        severity: 'high',
        reason: 'Opposing properties + gut damage',
        explanation: 'From both Ayurvedic and modern nutrition perspectives, alcohol and milk are incompatible. Alcohol disrupts gut flora and stomach acid that milk needs for proper digestion. Creates toxins and heavy feeling.',
        effect: 'Nausea, digestive distress, toxic ama production.',
        alternative: 'Never combine. Drink coconut water or herbal decoctions instead.'
    },
    {
        food1: 'Ice Cream',
        food2: 'Alcohol',
        incompatible: true,
        severity: 'moderate',
        reason: 'Cold dairy + alcohol = digestive confusion',
        explanation: 'Cold, heavy ice cream combined with alcohol puts severe stress on digestion. The cold extinguishes Agni (digestive fire) while alcohol disrupts gut chemistry.',
        effect: 'Digestive overload, nausea, impaired fat digestion.',
        alternative: 'Choose warm desserts after meals. Avoid mixing cold dairy with alcohol.'
    },
    {
        food1: 'Papaya',
        food2: 'Lemon',
        incompatible: true,
        severity: 'moderate',
        reason: 'Fruit acid combination — Pitta aggravating',
        explanation: 'Both papaya and lemon are acidic post-digestively. Combined, they create excess acidity and can disturb Pitta dosha significantly.',
        effect: 'Heartburn, acid reflux, anemia aggravation in sensitive individuals.',
        alternative: 'Enjoy papaya with mint and a pinch of black salt instead of lemon.'
    },
    {
        food1: 'Black Gram (Urad Dal)',
        food2: 'Radish',
        incompatible: true,
        severity: 'moderate',
        reason: 'Viruddha Ahara — gas-promoting combination',
        explanation: 'Black gram is heavy and Kapha-increasing; radish is sharp and pungent. Together they create excessive gas, bloating, and digestive irritation.',
        effect: 'Bloating, flatulence, abdominal discomfort.',
        alternative: 'Cook black gram with digestive spices (cumin, asafoetida, ginger) separately from radish.'
    },
];

/**
 * Find food combination result
 */
window.findFoodCombination = function (food1, food2) {
    if (!food1 || !food2) return null;
    const f1 = food1.toLowerCase().trim();
    const f2 = food2.toLowerCase().trim();
    return FOOD_COMBINATIONS.find(c =>
        (c.food1.toLowerCase().includes(f1) || f1.includes(c.food1.toLowerCase())) &&
        (c.food2.toLowerCase().includes(f2) || f2.includes(c.food2.toLowerCase()))
    ) || FOOD_COMBINATIONS.find(c =>
        (c.food1.toLowerCase().includes(f2) || f2.includes(c.food1.toLowerCase())) &&
        (c.food2.toLowerCase().includes(f1) || f1.includes(c.food2.toLowerCase()))
    ) || null;
};
