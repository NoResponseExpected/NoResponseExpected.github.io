HUB.addQuestions('physics/quantum', [
  {
    marks: 4,
    partMarks: [2, 2],
    body: 'The work function of caesium is 2.1 eV. (a) Calculate the threshold frequency for photoemission. (b) Light of wavelength 400 nm is incident on a caesium surface. Calculate the maximum kinetic energy of the emitted photoelectrons in eV.',
    mark: [
      { points: 1, text: 'φ = hf₀ ⇒ f₀ = φ / h. φ = 2.1 × 1.6×10⁻¹⁹ = 3.36×10⁻¹⁹ J.' },
      { points: 1, text: 'f₀ ≈ 5.1×10¹⁴ Hz.' },
      { points: 1, text: 'E_photon = hc/λ = (6.63×10⁻³⁴ × 3×10⁸) / 400×10⁻⁹ ≈ 4.97×10⁻¹⁹ J ≈ 3.1 eV.' },
      { points: 1, text: 'KE_max = E_photon − φ ≈ 3.1 − 2.1 = 1.0 eV.' },
    ],
  },
]);
