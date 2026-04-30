// components/JobInputForm.jsx
// Handles adding/removing jobs and loading sample data

import { useState } from 'react';
import { SAMPLE_JOBS } from '../utils/jobSequencing';

export default function JobInputForm({ jobs, setJobs, onRun }) {
  // Local state for the "new job" form fields
  const [form, setForm] = useState({ id: '', deadline: '', profit: '' });
  const [error, setError] = useState('');

  // ── Add a new job ─────────────────────────────────────────────────────────
  function handleAdd() {
    const { id, deadline, profit } = form;

    // Basic validation
    if (!id.trim()) return setError('Job ID is required.');
    if (jobs.some(j => j.id.trim().toUpperCase() === id.trim().toUpperCase()))
      return setError(`Job ID "${id}" already exists.`);
    if (!deadline || Number(deadline) < 1) return setError('Deadline must be ≥ 1.');
    if (!profit || Number(profit) < 0) return setError('Profit must be ≥ 0.');

    setError('');
    setJobs(prev => [...prev, {
      id: id.trim().toUpperCase(),
      deadline: Number(deadline),
      profit: Number(profit),
    }]);
    setForm({ id: '', deadline: '', profit: '' }); // reset
  }

  // ── Remove a job by id ────────────────────────────────────────────────────
  function handleRemove(id) {
    setJobs(prev => prev.filter(j => j.id !== id));
  }

  // ── Load sample data ──────────────────────────────────────────────────────
  function loadSample() {
    setJobs(SAMPLE_JOBS);
    setError('');
  }

  // ── Allow Enter key to submit the form ───────────────────────────────────
  function handleKeyDown(e) {
    if (e.key === 'Enter') handleAdd();
  }

  return (
    <div className="bg-card border border-border rounded-2xl p-6 shadow-card">
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <h2 className="font-display font-semibold text-text-bright text-lg">
          📋 Job Input
        </h2>
        <button onClick={loadSample} className="btn-ghost text-xs px-4 py-2">
          ⚡ Load Sample Data
        </button>
      </div>

      {/* ── Input row ── */}
      <div className="grid grid-cols-3 gap-3 mb-3">
        <div>
          <label className="block font-mono text-xs text-muted mb-1">Job ID</label>
          <input
            className="input-field"
            placeholder="J1"
            value={form.id}
            onChange={e => setForm(f => ({ ...f, id: e.target.value }))}
            onKeyDown={handleKeyDown}
          />
        </div>
        <div>
          <label className="block font-mono text-xs text-muted mb-1">Deadline</label>
          <input
            className="input-field"
            type="number"
            min="1"
            placeholder="2"
            value={form.deadline}
            onChange={e => setForm(f => ({ ...f, deadline: e.target.value }))}
            onKeyDown={handleKeyDown}
          />
        </div>
        <div>
          <label className="block font-mono text-xs text-muted mb-1">Profit ($)</label>
          <input
            className="input-field"
            type="number"
            min="0"
            placeholder="100"
            value={form.profit}
            onChange={e => setForm(f => ({ ...f, profit: e.target.value }))}
            onKeyDown={handleKeyDown}
          />
        </div>
      </div>

      {/* Error message */}
      {error && (
        <p className="text-danger font-mono text-xs mb-3 bg-danger/10 border border-danger/20
                      rounded-lg px-3 py-2">
          ⚠ {error}
        </p>
      )}

      {/* Add button */}
      <button onClick={handleAdd} className="btn-primary w-full mb-5">
        + Add Job
      </button>

      {/* ── Jobs table ── */}
      {jobs.length === 0 ? (
        <div className="text-center py-8 text-muted font-mono text-sm border border-dashed
                        border-border rounded-xl">
          No jobs added yet. Add one above or load sample data.
        </div>
      ) : (
        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-surface border-b border-border">
                <th className="text-left font-mono text-muted text-xs px-4 py-2.5">JOB ID</th>
                <th className="text-left font-mono text-muted text-xs px-4 py-2.5">DEADLINE</th>
                <th className="text-left font-mono text-muted text-xs px-4 py-2.5">PROFIT</th>
                <th className="text-right font-mono text-muted text-xs px-4 py-2.5">ACTION</th>
              </tr>
            </thead>
            <tbody>
              {jobs.map((job, i) => (
                <tr key={job.id}
                    className={`border-b border-border/50 transition-colors hover:bg-surface/60
                                ${i % 2 === 0 ? '' : 'bg-surface/20'}`}>
                  <td className="px-4 py-3">
                    <span className="font-mono font-semibold text-accent">{job.id}</span>
                  </td>
                  <td className="px-4 py-3 font-mono text-text">{job.deadline}</td>
                  <td className="px-4 py-3 font-mono font-semibold text-warn">${job.profit}</td>
                  <td className="px-4 py-3 text-right">
                    <button
                      onClick={() => handleRemove(job.id)}
                      className="btn-danger text-xs px-3 py-1"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Run button */}
      {jobs.length >= 1 && (
        <button
          onClick={onRun}
          className="btn-primary w-full mt-5 py-3 text-base rounded-2xl"
        >
          ▶ Run Algorithm
        </button>
      )}
    </div>
  );
}
