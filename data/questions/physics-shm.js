HUB.addQuestions('physics/shm', [
  {
    marks: 2,
    body: 'A simple pendulum has a length of 0.80 m. Calculate its period of oscillation on Earth, where g = 9.81 m s⁻². State one assumption you have made.',
    mark: [
      { points: 1, text: 'T = 2π √(L/g) = 2π √(0.80 / 9.81) ≈ 1.8 s.' },
      { points: 1, text: 'Assumption: small-angle approximation (sin θ ≈ θ), or massless string, or no air resistance.' },
    ],
  },
  {
    marks: 3,
    partMarks: [1, 2],
    body: 'A mass on a spring undergoes SHM with amplitude 5.0 cm and frequency 2.5 Hz. Calculate (a) the angular frequency and (b) the maximum speed of the mass.',
    mark: [
      { points: 1, text: 'ω = 2πf = 2π × 2.5 ≈ 15.7 rad s⁻¹.' },
      { points: 1, text: 'v_max = ωA' },
      { points: 1, text: 'v_max = 15.7 × 0.050 ≈ 0.79 m s⁻¹.' },
    ],
  },
]);
