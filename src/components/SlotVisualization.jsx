// components/SlotVisualization.jsx
// Shows the time-slot timeline with filled/empty boxes

export default function SlotVisualization({ slots }) {
  return (
    <div className="bg-card border border-border rounded-2xl p-6 shadow-card">
      <h2 className="font-display font-semibold text-text-bright text-lg mb-1">
        📅 Slot Timeline
      </h2>
      <p className="font-mono text-muted text-xs mb-5">
        Time slots 1 → {slots.length} — each slot holds one job
      </p>

      {/* ── Slot boxes ── */}
      <div className="flex flex-wrap gap-4 mb-6">
        {slots.map((job, i) => (
          <div
            key={i}
            className={`
              flex flex-col items-center justify-center rounded-2xl border-2 p-4
              min-w-[88px] min-h-[100px] transition-all duration-500
              animate-pop
              ${job
                ? 'border-accent bg-accent/10 shadow-glow'
                : 'border-border bg-surface opacity-50'}
            `}
            style={{ animationDelay: `${i * 80}ms` }}
          >
            {/* Slot number label */}
            <span className="font-mono text-xs text-muted mb-2">Slot {i + 1}</span>

            {job ? (
              <>
                {/* Job ID */}
                <span className="font-mono font-bold text-accent text-xl leading-none">
                  {job.id}
                </span>
                {/* Profit */}
                <span className="font-mono text-warn text-xs mt-1.5 font-semibold">
                  ${job.profit}
                </span>
                {/* Deadline */}
                <span className="font-mono text-muted text-xs mt-0.5">
                  D:{job.deadline}
                </span>
              </>
            ) : (
              /* Empty slot */
              <span className="font-mono text-muted/40 text-2xl">—</span>
            )}
          </div>
        ))}
      </div>

      {/* ── Legend ── */}
      <div className="flex items-center gap-6 pt-4 border-t border-border">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-md bg-accent/20 border-2 border-accent" />
          <span className="font-mono text-xs text-muted">Filled slot</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-md bg-surface border-2 border-border opacity-50" />
          <span className="font-mono text-xs text-muted">Empty slot</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs text-warn">$</span>
          <span className="font-mono text-xs text-muted">= Profit</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs text-muted">D:</span>
          <span className="font-mono text-xs text-muted">= Deadline</span>
        </div>
      </div>
    </div>
  );
}
