// components/SortedJobsTable.jsx
// Shows jobs after sorting by profit, highlighting selected vs skipped

export default function SortedJobsTable({ sortedJobs, selectedIds }) {
  return (
    <div className="bg-card border border-border rounded-2xl p-6 shadow-card">
      <h2 className="font-display font-semibold text-text-bright text-lg mb-1">
        📊 Jobs Sorted by Profit
      </h2>
      <p className="font-mono text-muted text-xs mb-4">
        Greedy order — highest profit first
      </p>

      <div className="overflow-x-auto rounded-xl border border-border">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-surface border-b border-border">
              <th className="text-left font-mono text-muted text-xs px-4 py-2.5">RANK</th>
              <th className="text-left font-mono text-muted text-xs px-4 py-2.5">JOB ID</th>
              <th className="text-left font-mono text-muted text-xs px-4 py-2.5">DEADLINE</th>
              <th className="text-left font-mono text-muted text-xs px-4 py-2.5">PROFIT</th>
              <th className="text-left font-mono text-muted text-xs px-4 py-2.5">STATUS</th>
            </tr>
          </thead>
          <tbody>
            {sortedJobs.map((job, i) => {
              const selected = selectedIds.has(job.id);
              return (
                <tr
                  key={job.id}
                  className={`border-b border-border/50 transition-all duration-300
                    ${selected
                      ? 'bg-accent/5 hover:bg-accent/10'
                      : 'bg-danger/5 hover:bg-danger/10 opacity-70'
                    }`}
                >
                  {/* Rank */}
                  <td className="px-4 py-3 font-mono text-muted text-xs">#{i + 1}</td>

                  {/* Job ID */}
                  <td className="px-4 py-3">
                    <span className={`font-mono font-bold text-sm ${selected ? 'text-accent' : 'text-danger'}`}>
                      {job.id}
                    </span>
                  </td>

                  {/* Deadline */}
                  <td className="px-4 py-3 font-mono text-text">{job.deadline}</td>

                  {/* Profit */}
                  <td className="px-4 py-3 font-mono font-semibold text-warn">${job.profit}</td>

                  {/* Status badge */}
                  <td className="px-4 py-3">
                    {selected ? (
                      <span className="inline-flex items-center gap-1.5 bg-accent/15 text-accent
                                       border border-accent/30 rounded-full px-2.5 py-0.5
                                       font-mono text-xs font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                        Selected
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 bg-danger/15 text-danger
                                       border border-danger/30 rounded-full px-2.5 py-0.5
                                       font-mono text-xs font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-danger" />
                        Skipped
                      </span>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
