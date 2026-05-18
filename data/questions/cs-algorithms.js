HUB.addQuestions('cs/algorithms', [
  {
    marks: 2,
    body: 'State the worst-case time complexity of a binary search on a sorted array of length n, using Big-O notation. Briefly justify your answer.',
    mark: [
      { points: 1, text: 'O(log n)' },
      { points: 1, text: 'Each comparison halves the remaining search space, so the number of comparisons grows logarithmically with n.' },
    ],
  },
  {
    marks: 5,
    body: 'Using Dijkstra\'s algorithm, find the shortest path from A to E in the following weighted graph. Show the working table at each step.\n\nEdges: A–B (4), A–C (2), B–C (1), B–D (5), C–D (8), C–E (10), D–E (2).',
    mark: [
      { points: 1, text: 'Initialise distances: A=0, others = ∞.' },
      { points: 1, text: 'Settle A → update B=4, C=2.' },
      { points: 1, text: 'Settle C → update B=3, D=10, E=12.' },
      { points: 1, text: 'Settle B → update D=8.' },
      { points: 1, text: 'Settle D → update E=10. Final shortest path A → C → B → D → E, length 10.' },
    ],
  },
  {
    marks: 4,
    partMarks: [2, 2],
    body: 'Compare merge sort and quicksort in terms of (a) worst-case time complexity and (b) space complexity. Give one situation in which you would prefer quicksort.',
    mark: [
      { points: 1, text: 'Merge sort: worst-case O(n log n).' },
      { points: 1, text: 'Quicksort: worst-case O(n²) (e.g. already-sorted with naive pivot).' },
      { points: 1, text: 'Merge sort uses O(n) auxiliary space; quicksort is in-place, O(log n) for the call stack.' },
      { points: 1, text: 'Quicksort preferred when memory is tight or cache locality matters — its in-place partitioning is hardware-friendly.' },
    ],
  },
]);
