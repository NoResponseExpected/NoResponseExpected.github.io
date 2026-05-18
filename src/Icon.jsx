// Inline Lucide-style icons, 1.7px stroke, currentColor.
function Icon({ name, size = 18 }) {
  const stroke = {
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.7,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  };
  const paths = {
    menu:        <g {...stroke}><path d="M3 6h18M3 12h18M3 18h18"/></g>,
    search:      <g {...stroke}><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></g>,
    sun:         <g {...stroke}><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></g>,
    moon:        <g {...stroke}><path d="M12 3a9 9 0 1 0 9 9 7 7 0 0 1-9-9z"/></g>,
    sidebar:     <g {...stroke}><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M15 4v16"/></g>,
    chevron:     <g {...stroke}><path d="m9 6 6 6-6 6"/></g>,
    'chevron-l': <g {...stroke}><path d="m15 6-6 6 6 6"/></g>,
    external:    <g {...stroke}><path d="M7 17 17 7M9 7h8v8"/></g>,
    check:       <g {...stroke}><path d="m4 12 5 5L20 6"/></g>,
    circle:      <g {...stroke}><circle cx="12" cy="12" r="9"/></g>,
    'circle-d':  <g {...stroke}><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></g>,
    star:        <g {...stroke}><path d="m12 3 2.9 6 6.6.9-4.8 4.7 1.1 6.6L12 18l-5.8 3.2 1.1-6.6L2.5 9.9 9.1 9z"/></g>,
    flame:       <g {...stroke}><path d="M12 22a7 7 0 0 0 7-7c0-2-1-4-3-6 1 4-2 5-3 4 0-3-2-5-3-7-1 4-5 5-5 9a7 7 0 0 0 7 7z"/></g>,
    play:        <g {...stroke}><path d="M6 4v16l14-8z"/></g>,
    list:        <g {...stroke}><path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/></g>,
    arrow:       <g {...stroke}><path d="M5 12h14M13 5l7 7-7 7"/></g>,
    layers:      <g {...stroke}><path d="m12 3 9 5-9 5-9-5 9-5z"/><path d="m3 13 9 5 9-5M3 18l9 5 9-5"/></g>,
    cpu:         <g {...stroke}><rect x="5" y="5" width="14" height="14" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3"/></g>,
    atom:        <g {...stroke}><circle cx="12" cy="12" r="1.5"/><path d="M12 3c4 4 4 14 0 18M12 3c-4 4-4 14 0 18M3 12c4-4 14-4 18 0M3 12c4 4 14 4 18 0"/></g>,
    book:        <g {...stroke}><path d="M4 4h7a3 3 0 0 1 3 3v13a2 2 0 0 0-2-2H4z"/><path d="M20 4h-7a3 3 0 0 0-3 3v13a2 2 0 0 1 2-2h8z"/></g>,
    flag:        <g {...stroke}><path d="M4 22V4M4 4h12l-2 4 2 4H4"/></g>,
    eye:         <g {...stroke}><path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></g>,
    refresh:     <g {...stroke}><path d="M21 12a9 9 0 1 1-3-6.7L21 8"/><path d="M21 3v5h-5"/></g>,
    bookmark:    <g {...stroke}><path d="M6 4h12v17l-6-4-6 4z"/></g>,
  };
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true">
      {paths[name]}
    </svg>
  );
}

window.Icon = Icon;
