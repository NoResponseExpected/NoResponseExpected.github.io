// Revision Hub — bootstrap.
// Creates window.HUB with subject + topic metadata.
// Each topic's questions live in their own file under data/questions/
// and register themselves via HUB.addQuestions().

window.HUB = {
  subjects: [
    {
      id: 'physics',
      name: 'Physics',
      board: 'OCR H556',
      icon: 'atom',
      blurb: 'OCR A-Level. Mechanics, fields, waves, quantum.',
      topics: [
        { id: 'forces',       name: 'Forces and Motion' },
        { id: 'em',           name: 'Electromagnetism' },
        { id: 'capacitors',   name: 'Capacitor Discharge' },
        { id: 'shm',          name: 'Simple Harmonic Motion' },
        { id: 'waves',        name: 'Waves' },
        { id: 'quantum',      name: 'Quantum' },
        { id: 'radioactive',  name: 'Radioactive Decay' },
        { id: 'universe',     name: 'Our Place in the Universe' },
        { id: 'imaging',      name: 'Imaging and Signalling' },
      ],
      quizzes: [
        { id: 'q1', name: 'Quiz one', qCount: 30 },
        { id: 'q2', name: 'Quiz two', qCount: 30 },
      ],
    },
    {
      id: 'cs',
      name: 'Computer Science',
      board: 'AQA 7517',
      icon: 'cpu',
      blurb: 'AQA A-Level. Theory, algorithms, architecture.',
      comingSoon: true,
      topics: [
        { id: 'algorithms',   name: 'Algorithms' },
        { id: 'theory',       name: 'Theory of Computation' },
        { id: 'architecture', name: 'Computer Architecture' },
        { id: 'data-struct',  name: 'Data Structures' },
        { id: 'networks',     name: 'Networks' },
        { id: 'data-rep',     name: 'Data Representation' },
        { id: 'databases',    name: 'Databases' },
        { id: 'big-data',     name: 'Big Data' },
        { id: 'functional',   name: 'Functional Programming' },
      ],
    },
  ],

  // Questions keyed by `${subjectId}/${topicId}`.
  // Populated by HUB.addQuestions() calls from data/questions/*.js
  questions: {},

  /**
   * Register questions for a topic.
   *
   *   HUB.addQuestions('physics/capacitors', [
   *     {
   *       marks: 3,
   *       body: 'A 100 μF capacitor is charged to 12 V. Calculate the energy stored.',
   *       mark: [
   *         { points: 1, text: 'E = ½CV²' },
   *         { points: 1, text: '= ½ × 100×10⁻⁶ × 144' },
   *         { points: 1, text: '≈ 7.2 mJ' },
   *       ],
   *     },
   *   ]);
   *
   * For multi-part questions, write (a), (b), (c) inline in `body` —
   * the page auto-splits on those labels — and add `partMarks: [n, n, n]`.
   */
  addQuestions(key, list) {
    if (!this.questions[key]) this.questions[key] = [];
    // Auto-assign sequential ids if not given.
    list.forEach((q, i) => {
      if (!q.id) q.id = `${key.replace('/', '-')}-${this.questions[key].length + i + 1}`;
    });
    this.questions[key].push(...list);
  },
};
