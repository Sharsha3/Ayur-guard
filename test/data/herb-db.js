/**
 * AyurGuard — data/herb-db.js
 * Herb × modern medicine interaction database
 */

window.HERB_LIST = [
    'Ashwagandha', 'Turmeric', 'Triphala', 'Brahmi', 'Neem', 'Tulsi',
    'Shatavari', 'Amalaki (Amla)', 'Guduchi', 'Trikatu', 'Arjuna',
    'Gokshura', 'Vidari', 'Punarnava', 'Shankhpushpi', 'Licorice Root',
    'Ginger', 'Moringa', 'Bitter Melon', 'Fenugreek', 'Boswellia',
    'Shilajit', 'Mucuna Pruriens', 'Manjistha', 'Haritaki',
];

window.MEDICINE_LIST = [
    'Aspirin', 'Ibuprofen', 'Warfarin', 'Sertraline', 'Fluoxetine',
    'Metformin', 'Glipizide', 'Atorvastatin', 'Lisinopril', 'Amlodipine',
    'Levothyroxine', 'Omeprazole', 'Prednisone', 'Cyclosporine',
    'Digoxin', 'Amoxicillin', 'Ciprofloxacin', 'Paracetamol (Acetaminophen)',
    'Atenolol', 'Clopidogrel', 'Phenytoin', 'Carbamazepine', 'Alprazolam',
    'Diazepam', 'Hydrochlorothiazide', 'Furosemide', 'Insulin',
    'Rifampicin', 'Tamoxifen', 'Chemotherapy agents',
];

// Risk levels: 'low', 'moderate', 'high'
window.HERB_INTERACTIONS = [
    {
        herb: 'Ashwagandha',
        medicine: 'Sertraline',
        risk: 'high',
        mechanism: 'Pharmacodynamic synergy',
        explanation: 'Ashwagandha may potentiate serotonergic effects and increase sedation. Combined with Sertraline (SSRI), risk of excessive sedation and possible serotonin syndrome.',
        recommendation: 'Avoid combination. If required, use under strict medical supervision with dose adjustment.'
    },
    {
        herb: 'Ashwagandha',
        medicine: 'Fluoxetine',
        risk: 'high',
        mechanism: 'CNS depression potentiation',
        explanation: 'Ashwagandha has sedative and anxiolytic properties that may amplify SSRI effects, increasing risk of serotonin syndrome and excessive CNS depression.',
        recommendation: 'Consult psychiatrist before combining. Frequent monitoring required.'
    },
    {
        herb: 'Ashwagandha',
        medicine: 'Levothyroxine',
        risk: 'moderate',
        mechanism: 'Thyroid hormone modulation',
        explanation: 'Ashwagandha may stimulate thyroid hormone production, potentially requiring dosage adjustment of levothyroxine.',
        recommendation: 'Monitor thyroid levels (TSH, T3, T4) every 4–6 weeks when using together.'
    },
    {
        herb: 'Ashwagandha',
        medicine: 'Alprazolam',
        risk: 'high',
        mechanism: 'CNS depression additive effect',
        explanation: 'Both have anxiolytic and sedative properties. Combination can lead to excessive drowsiness, impaired motor function, and respiratory depression.',
        recommendation: 'Avoid concurrent use. If needed, significantly reduce doses under medical supervision.'
    },
    {
        herb: 'Ashwagandha',
        medicine: 'Diazepam',
        risk: 'high',
        mechanism: 'CNS depression potentiation',
        explanation: 'Ashwagandha amplifies CNS depressant effects of benzodiazepines. May cause excessive sedation or breathing difficulties.',
        recommendation: 'Do not combine without physician oversight.'
    },
    {
        herb: 'Turmeric',
        medicine: 'Warfarin',
        risk: 'high',
        mechanism: 'Anticoagulant potentiation',
        explanation: 'Curcumin in turmeric inhibits platelet aggregation and prolongs blood clotting time. Combined with Warfarin, it significantly increases bleeding risk.',
        recommendation: 'Avoid high-dose turmeric supplements with Warfarin. Culinary amounts may be acceptable — monitor INR closely.'
    },
    {
        herb: 'Turmeric',
        medicine: 'Aspirin',
        risk: 'moderate',
        mechanism: 'Additive antiplatelet effect',
        explanation: 'Both turmeric and aspirin inhibit platelet aggregation. Combination increases bleeding tendency, especially GI bleeding risk.',
        recommendation: 'Use with caution. Avoid on empty stomach. Monitor for signs of unusual bruising or bleeding.'
    },
    {
        herb: 'Turmeric',
        medicine: 'Clopidogrel',
        risk: 'high',
        mechanism: 'Antiplatelet additive effect',
        explanation: 'Curcumin combined with clopidogrel creates significant antiplatelet synergy, increasing risk of serious bleeding events.',
        recommendation: 'Avoid combination. Report any unusual bleeding to doctor immediately.'
    },
    {
        herb: 'Turmeric',
        medicine: 'Metformin',
        risk: 'low',
        mechanism: 'Possible glucose-lowering enhancement',
        explanation: 'Turmeric may slightly enhance the glucose-lowering effect of metformin. Generally considered safe but monitor blood glucose levels.',
        recommendation: 'Generally safe. Monitor blood glucose. beneficial combination often used in integrative medicine.'
    },
    {
        herb: 'Triphala',
        medicine: 'Metformin',
        risk: 'moderate',
        mechanism: 'Additive hypoglycemic effect',
        explanation: 'Triphala has mild blood glucose lowering properties. Combined with Metformin, may cause hypoglycemia (excessively low blood sugar).',
        recommendation: 'Monitor blood glucose regularly. Adjust Metformin dose if needed.'
    },
    {
        herb: 'Triphala',
        medicine: 'Glipizide',
        risk: 'high',
        mechanism: 'Hypoglycemic synergy',
        explanation: 'Triphala combined with sulfonylureas like Glipizide can cause dangerous hypoglycemia. Both lower blood sugar through different mechanisms.',
        recommendation: 'Close blood glucose monitoring required. Reduce supplement dose or adjust medication.'
    },
    {
        herb: 'Triphala',
        medicine: 'Warfarin',
        risk: 'moderate',
        mechanism: 'Possible anticoagulant enhancement',
        explanation: 'Triphala may interfere with Vitamin K metabolism, potentially enhancing Warfarin\'s anticoagulant effect.',
        recommendation: 'Monitor INR levels more frequently. Report unusual bruising.'
    },
    {
        herb: 'Brahmi',
        medicine: 'Phenytoin',
        risk: 'high',
        mechanism: 'CNS pharmacodynamic interaction',
        explanation: 'Brahmi may interact with phenytoin metabolism and potentiate CNS effects. Risk of toxicity or altered seizure threshold.',
        recommendation: 'Do not combine without neurologist supervision. Risk of seizure control disruption.'
    },
    {
        herb: 'Brahmi',
        medicine: 'Carbamazepine',
        risk: 'moderate',
        mechanism: 'CYP450 enzyme modulation',
        explanation: 'Brahmi may affect CYP3A4 enzyme activity, altering carbamazepine blood levels and affecting seizure control.',
        recommendation: 'Monitor carbamazepine levels and symptoms. Consult neurologist.'
    },
    {
        herb: 'Brahmi',
        medicine: 'Alprazolam',
        risk: 'moderate',
        mechanism: 'Additive CNS depression',
        explanation: 'Brahmi has mild sedative effects. Combined with benzodiazepines, may increase drowsiness and psychomotor impairment.',
        recommendation: 'Avoid driving or operating machinery. Start with low doses.'
    },
    {
        herb: 'Neem',
        medicine: 'Cyclosporine',
        risk: 'high',
        mechanism: 'CYP3A4 inhibition',
        explanation: 'Neem compounds may inhibit CYP3A4 enzymes, increasing cyclosporine blood levels and risk of nephrotoxicity and other toxic effects.',
        recommendation: 'Strictly avoid. Cyclosporine has a narrow therapeutic index — toxic accumulation is dangerous.'
    },
    {
        herb: 'Neem',
        medicine: 'Glipizide',
        risk: 'moderate',
        mechanism: 'Additive hypoglycemic effect',
        explanation: 'Neem has significant blood glucose lowering properties. Combined with sulfonylureas, hypoglycemia risk is significant.',
        recommendation: 'Monitor blood glucose closely. Reduce neem dose or medication dose accordingly.'
    },
    {
        herb: 'Shatavari',
        medicine: 'Tamoxifen',
        risk: 'high',
        mechanism: 'Estrogenic competition',
        explanation: 'Shatavari has phytoestrogenic properties. May interfere with the anti-estrogenic action of Tamoxifen in hormone-sensitive breast cancer treatment.',
        recommendation: 'Strictly avoid in hormone-sensitive cancer patients on Tamoxifen or aromatase inhibitors.'
    },
    {
        herb: 'Amalaki (Amla)',
        medicine: 'Warfarin',
        risk: 'moderate',
        mechanism: 'Vitamin C and anticoagulant interaction',
        explanation: 'High dose Amla (rich in Vitamin C) may affect Warfarin absorption and metabolism. Monitor INR carefully.',
        recommendation: 'Stick to dietary amounts of Amla. High-dose supplements should be avoided with Warfarin.'
    },
    {
        herb: 'Amalaki (Amla)',
        medicine: 'Chemotherapy agents',
        risk: 'moderate',
        mechanism: 'Antioxidant interference',
        explanation: 'High antioxidant levels in Amla may theoretically reduce the oxidative mechanism of some chemotherapy drugs.',
        recommendation: 'Consult oncologist before using during active chemotherapy. Post-treatment use is generally supported.'
    },
    {
        herb: 'Guduchi',
        medicine: 'Cyclosporine',
        risk: 'high',
        mechanism: 'Immunomodulatory antagonism',
        explanation: 'Guduchi is an immunostimulant. Combined with immunosuppressants like Cyclosporine, may counteract drug effect and risk organ rejection in transplant patients.',
        recommendation: 'Absolutely contraindicated for organ transplant patients on immunosuppressants.'
    },
    {
        herb: 'Arjuna',
        medicine: 'Digoxin',
        risk: 'high',
        mechanism: 'Additive cardiac glycoside effect',
        explanation: 'Arjuna has direct cardiac activity. Combined with Digoxin, may cause additive effects on heart rate and rhythm, leading to arrhythmias.',
        recommendation: 'Avoid combination. Both affect cardiac conduction — risk of dangerous heart rhythm changes.'
    },
    {
        herb: 'Arjuna',
        medicine: 'Atenolol',
        risk: 'moderate',
        mechanism: 'Additive hypotensive effect',
        explanation: 'Arjuna may lower blood pressure. Combined with beta-blockers, may cause excessive reduction in blood pressure or heart rate.',
        recommendation: 'Monitor blood pressure and heart rate. Adjust Atenolol dose if needed.'
    },
    {
        herb: 'Licorice Root',
        medicine: 'Hydrochlorothiazide',
        risk: 'high',
        mechanism: 'Potassium depletion synergy',
        explanation: 'Licorice causes sodium retention and potassium loss (pseudoaldosteronism). Combined with thiazide diuretics, severe hypokalemia can develop, causing muscle weakness and cardiac arrhythmias.',
        recommendation: 'Avoid combination. Monitor electrolytes if used together.'
    },
    {
        herb: 'Licorice Root',
        medicine: 'Amlodipine',
        risk: 'moderate',
        mechanism: 'Blood pressure elevation',
        explanation: 'Licorice can raise blood pressure through sodium retention, counteracting antihypertensive effects of Amlodipine.',
        recommendation: 'Avoid high-dose licorice with antihypertensives. Monitor blood pressure regularly.'
    },
    {
        herb: 'Ginger',
        medicine: 'Warfarin',
        risk: 'moderate',
        mechanism: 'Antiplatelet enhancement',
        explanation: 'Ginger inhibits thromboxane synthetase and has antiplatelet properties. May enhance Warfarin\'s anticoagulant effect.',
        recommendation: 'Monitor INR more frequently. Culinary use is generally fine; avoid high-dose supplements.'
    },
    {
        herb: 'Ginger',
        medicine: 'Aspirin',
        risk: 'low',
        mechanism: 'Mild antiplatelet additive',
        explanation: 'Both have mild antiplatelet properties. Generally safe at normal culinary doses but may increase bleeding at high supplemental doses.',
        recommendation: 'Dietary ginger is generally safe. Avoid ginger supplements with high-dose aspirin therapy.'
    },
    {
        herb: 'Bitter Melon',
        medicine: 'Insulin',
        risk: 'high',
        mechanism: 'Additive hypoglycemic effect',
        explanation: 'Bitter melon has significant insulin-like effects and may dramatically lower blood glucose when combined with exogenous insulin, risking severe hypoglycemia.',
        recommendation: 'Close blood glucose monitoring essential. May require significant insulin dose reduction.'
    },
    {
        herb: 'Fenugreek',
        medicine: 'Metformin',
        risk: 'low',
        mechanism: 'Complementary glucose lowering',
        explanation: 'Fenugreek has hypoglycemic properties but usually complementary to Metformin. Low interaction risk at normal doses.',
        recommendation: 'Monitor blood glucose. Often used together in integrative diabetes management.'
    },
    {
        herb: 'Fenugreek',
        medicine: 'Warfarin',
        risk: 'moderate',
        mechanism: 'Anticoagulant enhancement',
        explanation: 'High-dose fenugreek may contain coumarin compounds that enhance anticoagulant effects of Warfarin.',
        recommendation: 'Monitor INR levels. Avoid high-dose fenugreek with anticoagulants.'
    },
    {
        herb: 'Shilajit',
        medicine: 'Digoxin',
        risk: 'moderate',
        mechanism: 'Mineral interaction and cardiac effects',
        explanation: 'Shilajit contains numerous minerals that may interact with Digoxin\'s electrolyte-dependent mechanism. May alter Digoxin absorption or effect.',
        recommendation: 'Monitor serum Digoxin levels and electrolytes. Use under physician guidance.'
    },
    {
        herb: 'Mucuna Pruriens',
        medicine: 'Levodopa / Carbidopa',
        risk: 'high',
        mechanism: 'Levodopa excess (Mucuna contains L-DOPA)',
        explanation: 'Mucuna pruriens contains natural L-DOPA. Combined with pharmaceutical Levodopa, may cause L-DOPA toxicity: nausea, dyskinesia, hallucinations, and cardiovascular effects.',
        recommendation: 'Never combine without specialist neurologist supervision. Significant dose adjustment required.'
    },
    {
        herb: 'Tulsi',
        medicine: 'Paracetamol (Acetaminophen)',
        risk: 'low',
        mechanism: 'Mild hepatoprotective interaction',
        explanation: 'Tulsi may offer mild liver protection. Generally safe with Paracetamol at normal doses. No significant harmful interaction documented.',
        recommendation: 'Generally safe. Maintain recommended Paracetamol dosages regardless.'
    },
    {
        herb: 'Boswellia',
        medicine: 'Ibuprofen',
        risk: 'low',
        mechanism: 'Complementary anti-inflammatory',
        explanation: 'Boswellia and Ibuprofen both reduce inflammation via different pathways. Generally complementary with low interaction risk.',
        recommendation: 'Generally safe. Monitor for GI discomfort as both can affect stomach lining. Take with food.'
    },
];

/**
 * Find interactions for a given herb + medicine
 * @param {string} herb
 * @param {string} medicine
 * @returns {object|null}
 */
window.findInteraction = function (herb, medicine) {
    if (!herb || !medicine) return null;
    const h = herb.toLowerCase().trim();
    const m = medicine.toLowerCase().trim();
    return HERB_INTERACTIONS.find(i =>
        i.herb.toLowerCase().includes(h) || h.includes(i.herb.toLowerCase())
    ) && HERB_INTERACTIONS.find(i =>
        (i.herb.toLowerCase().includes(h) || h.includes(i.herb.toLowerCase())) &&
        (i.medicine.toLowerCase().includes(m) || m.includes(i.medicine.toLowerCase()))
    ) || null;
};
