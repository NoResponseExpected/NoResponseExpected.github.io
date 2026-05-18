HUB.addQuestions('physics/capacitors', [
  {
    marks: 3,
    body: 'A 100 μF capacitor is charged to a potential difference of 12 V. Calculate the energy stored. Give your answer in mJ to 2 s.f.',
    mark: [
      { points: 1, text: 'E = ½CV²' },
      { points: 1, text: 'E = ½ × 100×10⁻⁶ × 12²  = ½ × 100×10⁻⁶ × 144' },
      { points: 1, text: 'E ≈ 7.2 mJ' },
    ],
  },
  {
    marks: 4,
    partMarks: [2, 1, 1],
    body: 'A 220 μF capacitor discharges through a 10 kΩ resistor. (a) Calculate the time constant τ. (b) After how long will the voltage have fallen to 37% of its initial value? (c) After how long will it have fallen to 10%?',
    mark: [
      { points: 1, text: 'τ = RC = 10×10³ × 220×10⁻⁶' },
      { points: 1, text: 'τ = 2.2 s' },
      { points: 1, text: '37% ≈ 1/e — so t = τ = 2.2 s.' },
      { points: 1, text: '10%: V = V₀e^(−t/τ) ⇒ t = −τ ln(0.1) ≈ 2.2 × 2.30 ≈ 5.1 s.' },
    ],
  },
]);
