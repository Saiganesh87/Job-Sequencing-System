// pages/HomePage.jsx
// Landing page explaining the algorithm with a "Start" CTA

export default function HomePage({ onStart }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-16 animate-fade-in">

      {/* ── Hero badge ── */}
      <span className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30
                        text-accent font-mono text-xs px-3 py-1.5 rounded-full mb-6 tracking-wider">
        <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
        GREEDY ALGORITHM VISUALIZER
      </span>

      {/* ── Title ── */}
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-text-bright
                     text-center leading-tight mb-4 max-w-3xl">
        Job Sequencing
        <span className="text-accent"> with Deadlines</span>
      </h1>

      <p className="text-muted text-center font-mono text-sm mb-10 max-w-xl leading-relaxed">
        Schedule jobs to maximise total profit — each job takes one time unit and must
        finish&nbsp;on&nbsp;or before its deadline.
      </p>

      {/* ── Algorithm overview cards ── */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl w-full mb-12">
        {[
          { step: '01', title: 'Sort by Profit', desc: 'Rank all jobs from highest to lowest profit so the most valuable jobs are considered first.' },
          { step: '02', title: 'Assign to Slots', desc: 'Place each job into the latest available time slot that is ≤ its deadline.' },
          { step: '03', title: 'Maximise Profit', desc: 'Jobs that cannot fit into any free slot are skipped — giving the optimal selection.' },
        ].map(({ step, title, desc }) => (
          <div key={step}
               className="bg-card border border-border rounded-2xl p-5
                          hover:border-accent/40 hover:shadow-glow transition-all duration-300 group">
            <div className="font-mono text-accent/60 text-xs font-bold mb-2 group-hover:text-accent transition-colors">
              STEP {step}
            </div>
            <div className="font-display font-semibold text-text-bright text-sm mb-1">{title}</div>
            <div className="text-muted text-xs leading-relaxed">{desc}</div>
          </div>
        ))}
      </div>

      {/* ── CTA button ── */}
      <button
        onClick={onStart}
        className="btn-primary text-base px-8 py-3 rounded-2xl
                   shadow-glow hover:scale-105 transition-transform duration-200"
      >
        Start Visualization →
      </button>

      {/* ── Footer note ── */}
      <p className="text-muted/50 font-mono text-xs mt-12">
        Complexity: O(n² ) time · O(n) space
      </p>
    </div>
  );
}
