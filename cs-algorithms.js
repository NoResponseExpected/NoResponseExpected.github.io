# Revision Hub data

Questions live here, split one file per topic.

## Adding a new question to an existing topic

1. Open the matching file in `questions/` (e.g. `physics-capacitors.js`).
2. Append a new object to the `HUB.addQuestions(...)` array:

```js
{
  marks: 3,                    // total marks
  partMarks: [1, 2],           // OPTIONAL — only for multi-part questions
  body:
    'A capacitor stores 4.0 mJ at 12 V. ' +
    '(a) Calculate its capacitance. ' +
    '(b) Calculate the charge stored.',
  mark: [
    { points: 1, text: 'C = 2E/V² = ...' },
    { points: 1, text: 'C ≈ 56 μF' },
    { points: 1, text: 'Q = CV ≈ 6.7×10⁻⁴ C' },
  ],
}
```

The `(a)`, `(b)`, `(c)` markers in `body` are auto-split into parts by the
renderer — no extra setup needed. `partMarks` lines up with those labels.
`mark[].points` should sum to `marks`.

## Adding a new topic

1. Make sure the topic is listed in `hub.js` under its subject's `topics: []`
   (id + name).
2. Create `questions/<subject-id>-<topic-id>.js` and call
   `HUB.addQuestions('<subject-id>/<topic-id>', [ … ]);`
3. Add a `<script src="data/questions/...">` line to `index.html`.

## Adding a new subject

Add an entry to the `subjects` array in `hub.js` (id, name, board, icon, blurb,
topics). Then add topic files as above.
