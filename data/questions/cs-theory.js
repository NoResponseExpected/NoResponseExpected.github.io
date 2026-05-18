HUB.addQuestions('cs/theory', [
  {
    marks: 4,
    body: 'Explain what is meant by the halting problem and why it is undecidable. Your answer should reference a Turing machine.',
    mark: [
      { points: 1, text: 'The halting problem asks whether there exists an algorithm that, given any program P and input I, can decide whether P halts on I.' },
      { points: 1, text: 'No such algorithm exists — the problem is undecidable.' },
      { points: 2, text: 'Proof by contradiction: assume such a decider H exists. Construct a program D that, on input P, runs H(P, P) and loops forever if H says "halts", halts otherwise. Asking H about D on input D gives a contradiction in both branches.' },
    ],
  },
]);
