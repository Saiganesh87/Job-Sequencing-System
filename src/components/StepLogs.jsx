// components/StepLogs.jsx
// Displays each decision step taken by the algorithm as a scrollable log

export default function StepLogs({ logs }) {
  // Map log types to styling
  const styleMap = {
    sort:    { border: 'border-accent/30',  bg: 'bg-accent/5',   dot: 'bg-accent',   tag: 'SORT',    tagColor: 'text-accent' },
    info:    { border: 'border-muted/30',   bg: 'bg-muted/5',    dot: 'bg-muted',    tag: 'INFO',    tagColor: 'text-muted' },
    placed:  { border: 'border-accent/40',  bg: 'bg-accent/8',   dot: 'bg-accent',   tag: 'PLACED',  tagColor: 'text-accent' },
    skipped: { border: 'border-danger/40',  bg: 'bg-danger/8',   dot: 'bg-danger',   tag: 'SKIPPED', tagColor: 'text-danger' },
    result:  { border: 'border-warn/40',    bg: 'bg-warn/5',     dot: 'bg-warn',     tag: 'DONE',    tagColor: 'text-warn'   },
  };

  return (
    <div className="bg-card border border-border rounded-2xl p-6 shadow-card">
      <h2 className="font-display font-semibold text-text-bright text-lg mb-1">
        🪵 Step-by-Step Logs
      </h2>
      <p className="font-mono text-muted text-xs mb-4">
        Each decision the algorithm makes — in order
      </p>

      {/* Terminal-style log window */}
      <div className="bg-bg border border-border rounded-xl p-4 space-y-2 max-h-72 overflow-y-auto
                      font-mono text-xs">
        {/* Terminal prompt header */}
        <div className="flex items-center gap-2 mb-3 pb-2 border-b border-border">
          <span className="w-3 h-3 rounded-full bg-danger/70" />
          <span className="w-3 h-3 rounded-full bg-warn/70" />
          <span className="w-3 h-3 rounded-full bg-accent/70" />
          <span className="ml-2 text-muted">job-sequencer — algorithm trace</span>
        </div>

        {logs.map((log, i) => {
          const s = styleMap[log.type] || styleMap.info;
          return (
            <div
              key={i}
              className={`flex items-start gap-3 p-2.5 rounded-lg border ${s.border} ${s.bg}
                          animate-fade-in`}
              style={{ animationDelay: `${i * 60}ms` }}
            >
              {/* Step number */}
              <span className="text-muted/50 w-5 shrink-0 text-right">{String(i + 1).padStart(2, '0')}</span>

              {/* Coloured dot */}
              <span className={`mt-1 w-1.5 h-1.5 rounded-full shrink-0 ${s.dot}`} />

              {/* Tag + message */}
              <div className="flex-1 min-w-0">
                <span className={`font-bold mr-2 ${s.tagColor}`}>[{s.tag}]</span>
                <span className="text-text break-words">{log.message}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
