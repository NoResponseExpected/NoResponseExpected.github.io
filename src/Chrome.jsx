// Topbar + Sidebar Explorer for Revision Hub.

function Topbar({ theme, onTheme, onSearch, route, navigate }) {
  const subjects = window.HUB.subjects;
  const subject = subjects.find(s => s.id === route.subjectId);
  const topic = subject?.topics.find(t => t.id === route.topicId);
  const quiz = subject?.quizzes?.find(q => q.id === route.quizId);

  return (
    <header className="hub-topbar" data-screen-label="Topbar">
      <a className="hub-brand" onClick={() => navigate({ page: 'home' })}>
        <svg viewBox="0 0 44 24" width="34" height="20" className="v-mark" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 4 L10 20 L18 4 L26 20 L34 4 L42 20" />
        </svg>
        <span className="hub-wordmark">Revision<span className="light">Hub</span></span>
      </a>

      <div className="hub-crumbs">
        {route.page !== 'home' && (
          <>
            <span className="sep">/</span>
            {subject && (
              route.page === 'subject'
                ? <span className="here">{subject.name}</span>
                : <button onClick={() => navigate({ page: 'subject', subjectId: subject.id })}>{subject.name}</button>
            )}
            {topic && (
              <>
                <span className="sep">/</span>
                <span className="here">{topic.name}</span>
              </>
            )}
            {quiz && (
              <>
                <span className="sep">/</span>
                <span className="here">{quiz.name}</span>
              </>
            )}
          </>
        )}
      </div>

      <button className="hub-searchbox" onClick={onSearch} aria-label="Search">
        <Icon name="search" size={14} />
        <span>Search questions…</span>
        <span className="hub-kbd">⌘K</span>
      </button>

      <button className="hub-iconbtn" aria-label="Toggle theme" onClick={onTheme}>
        <Icon name={theme === 'dark' ? 'sun' : 'moon'} size={18} />
      </button>
    </header>
  );
}

function Explorer({ route, navigate }) {
  const subjects = window.HUB.subjects;
  const [open, setOpen] = React.useState(() => new Set([route.subjectId].filter(Boolean)));

  const toggle = (id) => {
    setOpen(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id); else next.add(id);
      return next;
    });
  };

  // Auto-open the subject you're inside.
  React.useEffect(() => {
    if (route.subjectId) {
      setOpen(prev => {
        if (prev.has(route.subjectId)) return prev;
        const next = new Set(prev);
        next.add(route.subjectId);
        return next;
      });
    }
  }, [route.subjectId]);

  return (
    <aside className="hub-explorer" data-screen-label="Explorer">
      <h3 className="hub-explorer-title">Subjects</h3>
      <div className="hub-tree">
        <button
          className={`hub-row ${route.page === 'home' ? 'active' : ''}`}
          onClick={() => navigate({ page: 'home' })}
        >
          <span className="chev" style={{ visibility: 'hidden' }} />
          <span className="label">Home</span>
        </button>
        {subjects.map(s => {
          const isOpen = open.has(s.id);
          const subjActive = route.page === 'subject' && route.subjectId === s.id;
          if (s.comingSoon) {
            return (
              <button
                key={s.id}
                className={`hub-row subject ${subjActive ? 'active' : ''}`}
                onClick={() => navigate({ page: 'subject', subjectId: s.id })}
              >
                <span className="chev" style={{ visibility: 'hidden' }} />
                <span className="label">{s.name}</span>
                <span className="count">soon</span>
              </button>
            );
          }
          return (
            <React.Fragment key={s.id}>
              <button
                className={`hub-row subject ${subjActive ? 'active' : ''}`}
                onClick={() => { toggle(s.id); navigate({ page: 'subject', subjectId: s.id }); }}
              >
                <span className={`chev ${isOpen ? 'open' : ''}`}>
                  <Icon name="chevron" size={14} />
                </span>
                <span className="label">{s.name}</span>
              </button>
              {isOpen && s.topics.map(t => {
                const topicActive = route.subjectId === s.id && route.topicId === t.id;
                return (
                  <button
                    key={t.id}
                    className={`hub-row topic ${topicActive ? 'active' : ''}`}
                    onClick={() => navigate({ page: 'topic', subjectId: s.id, topicId: t.id })}
                  >
                    <span className="label">{t.name}</span>
                    <span className="count">{t.qCount}</span>
                  </button>
                );
              })}
            </React.Fragment>
          );
        })}
      </div>
    </aside>
  );
}

window.Topbar = Topbar;
window.Explorer = Explorer;
