// components/ResultCard.jsx
// Final result: selected jobs list + total profit

export default function ResultCard({ selectedJobs, totalProfit, totalJobs }) {
  const skippedCount = totalJobs - selectedJobs.length;

  return (
    <div className="bg-card border-2 border-accent/40 rounded-2xl p-6 shadow-glow">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-accent/15 border border-accent/30
                        flex items-center justify-center text-lg">
          🏆
        </div>
        <div>
          <h2 className="font-display font-bold text-text-bright text-lg">Final Result</h2>
          <p className="font-mono text-muted text-xs">Optimal job schedule</p>
        </div>
      </div>

      {/* ── Stats row ── */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        {/* Total Profit */}
        <div className="bg-accent/10 border border-accent/25 rounded-xl p-4 text-center">
          <div className="font-mono text-accent text-2xl font-bold">${totalProfit}</div>
          <div className="font-mono text-muted text-xs mt-1">Total Profit</div>
        </div>

        {/* Jobs Scheduled */}
        <div className="bg-surface border border-border rounded-xl p-4 text-center">
          <div className="font-mono text-text-bright text-2xl font-bold">{selectedJobs.length}</div>
          <div className="font-mono text-muted text-xs mt-1">Jobs Scheduled</div>
        </div>

        {/* Jobs Skipped */}
        <div className="bg-danger/10 border border-danger/25 rounded-xl p-4 text-center">
          <div className="font-mono text-danger text-2xl font-bold">{skippedCount}</div>
          <div className="font-mono text-muted text-xs mt-1">Jobs Skipped</div>
        </div>
      </div>

      {/* ── Selected jobs list ── */}
      <div>
        <p className="font-mono text-xs text-muted mb-3 uppercase tracking-wider">
          ✔ Scheduled Jobs (in slot order)
        </p>
        <div className="flex flex-wrap gap-3">
          {selectedJobs.map((job, i) => (
            <div
              key={job.id}
              className="bg-accent/10 border border-accent/30 rounded-xl px-4 py-3
                         animate-pop flex flex-col items-center min-w-[80px]"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <span className="font-mono font-bold text-accent text-lg">{job.id}</span>
              <span className="font-mono text-warn text-xs font-semibold">${job.profit}</span>
              <span className="font-mono text-muted text-xs">→ Slot {(job.slotIndex ?? 0) + 1}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Formula line ── */}
      <div className="mt-5 pt-4 border-t border-border">
        <p className="font-mono text-xs text-muted">
          <span className="text-text">Profit = </span>
          {selectedJobs.map((j, i) => (
            <span key={j.id}>
              <span className="text-warn">${j.profit}</span>
              {i < selectedJobs.length - 1 && <span className="text-muted"> + </span>}
            </span>
          ))}
          <span className="text-text"> = </span>
          <span className="text-accent font-bold">${totalProfit}</span>
        </p>
      </div>
    </div>
  );
}
