// pages/VisualizerPage.jsx
// Main visualizer: input section + output section

import { useState } from 'react';
import JobInputForm from '../components/JobInputForm';
import SortedJobsTable from '../components/SortedJobsTable';
import StepLogs from '../components/StepLogs';
import SlotVisualization from '../components/SlotVisualization';
import ResultCard from '../components/ResultCard';
import { jobSequencing, getSelectedIds } from '../utils/jobSequencing';

export default function VisualizerPage({ onBack }) {
  // Jobs the user has entered
  const [jobs, setJobs] = useState([]);

  // Algorithm result — null until user runs
  const [result, setResult] = useState(null);

  // Run the algorithm and store results
  function handleRun() {
    if (jobs.length === 0) return;
    const output = jobSequencing(jobs);
    setResult(output);

    // Smooth-scroll to the results section
    setTimeout(() => {
      document.getElementById('results-section')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  }

  // Reset everything and start over
  function handleReset() {
    setResult(null);
    setJobs([]);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const selectedIds = result ? getSelectedIds(result.selectedJobs) : new Set();

  return (
    <div className="min-h-screen px-4 py-10 max-w-5xl mx-auto animate-fade-in">

      {/* ── Top navigation bar ── */}
      <div className="flex items-center justify-between mb-8">
        <button onClick={onBack} className="btn-ghost text-xs px-4 py-2">
          ← Home
        </button>
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          <span className="font-mono text-xs text-muted">Job Sequencing Visualizer</span>
        </div>
        {result && (
          <button onClick={handleReset} className="btn-danger text-xs px-4 py-2">
            ↺ Reset
          </button>
        )}
        {!result && <div className="w-24" />}
      </div>

      {/* ── Page title ── */}
      <div className="mb-8">
        <h1 className="font-display font-extrabold text-3xl text-text-bright mb-1">
          Algorithm <span className="text-accent">Visualizer</span>
        </h1>
        <p className="font-mono text-muted text-sm">
          Add jobs → Run → Watch the greedy algorithm work
        </p>
      </div>

      {/* ── Input section ── */}
      <section className="mb-10">
        <JobInputForm jobs={jobs} setJobs={setJobs} onRun={handleRun} />
      </section>

      {/* ── Output section (only shown after running) ── */}
      {result && (
        <section id="results-section" className="space-y-6 animate-slide-up">

          {/* Divider with label */}
          <div className="flex items-center gap-4 py-2">
            <div className="flex-1 h-px bg-border" />
            <span className="font-mono text-xs text-accent bg-accent/10 border border-accent/25
                             px-3 py-1 rounded-full">
              ALGORITHM OUTPUT
            </span>
            <div className="flex-1 h-px bg-border" />
          </div>

          {/* 1. Sorted jobs table */}
          <SortedJobsTable sortedJobs={result.sortedJobs} selectedIds={selectedIds} />

          {/* 2. Step-by-step logs */}
          <StepLogs logs={result.logs} />

          {/* 3. Slot timeline */}
          <SlotVisualization slots={result.slots} />

          {/* 4. Final result card */}
          <ResultCard
            selectedJobs={result.selectedJobs}
            totalProfit={result.totalProfit}
            totalJobs={jobs.length}
          />

          {/* Bottom action */}
          <div className="flex justify-center pt-4 pb-8">
            <button onClick={handleReset} className="btn-ghost px-8">
              ↺ Try with Different Jobs
            </button>
          </div>
        </section>
      )}
    </div>
  );
}
