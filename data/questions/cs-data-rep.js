HUB.addQuestions('cs/data-rep', [
  {
    marks: 2,
    body: 'Convert the unsigned binary number 10110101 to decimal. Show your working.',
    mark: [
      { points: 1, text: '128 + 32 + 16 + 4 + 1' },
      { points: 1, text: '= 181' },
    ],
  },
  {
    marks: 3,
    body: 'Represent −42 as an 8-bit two\'s complement binary number. Then state the largest positive integer that can be represented in 8-bit two\'s complement.',
    mark: [
      { points: 1, text: '42 in binary = 00101010.' },
      { points: 1, text: 'Invert and add 1: 11010110.' },
      { points: 1, text: 'Largest positive = 01111111 = 127.' },
    ],
  },
]);
