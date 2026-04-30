/**
 * Job Sequencing with Deadlines — Greedy Algorithm
 *
 * Goal: Schedule jobs to maximize total profit,
 *       where each job has a deadline (must finish by slot ≤ deadline)
 *       and takes exactly 1 unit of time.
 */

export function jobSequencing(jobs) {
  const logs = []; // Step-by-step explanation logs

  // ── Step 1: Sort jobs by profit (descending) ──────────────────────────────
  const sorted = [...jobs].sort((a, b) => b.profit - a.profit);
  logs.push({
    type: 'sort',
    message: `Sorted ${sorted.length} jobs by profit (highest first): ${sorted.map(j => `${j.id}($${j.profit})`).join(' → ')}`,
  });

  // ── Step 2: Find the maximum deadline ────────────────────────────────────
  const maxDeadline = Math.max(...sorted.map(j => j.deadline));
  logs.push({
    type: 'info',
    message: `Maximum deadline found: ${maxDeadline}  →  creating ${maxDeadline} time slot(s) [Slot 1 … Slot ${maxDeadline}]`,
  });

  // ── Step 3: Create empty slots array (1-indexed display, 0-indexed array) ─
  // slots[0] = time slot 1, slots[1] = time slot 2, etc.
  const slots = Array(maxDeadline).fill(null);

  let totalProfit = 0;

  // ── Step 4: Try to assign each job to the latest available slot ───────────
  for (let i = 0; i < sorted.length; i++) {
    const job = sorted[i];
    let placed = false;

    // Try from the latest possible slot (min of maxDeadline & job's deadline)
    // going backwards to find the first free slot
    for (let j = Math.min(maxDeadline, job.deadline) - 1; j >= 0; j--) {
      if (slots[j] === null) {
        slots[j] = { ...job, slotIndex: j }; // Assign job to this slot
        totalProfit += job.profit;
        placed = true;
        logs.push({
          type: 'placed',
          message: `✔  ${job.id} (profit $${job.profit}, deadline ${job.deadline}) → placed in Slot ${j + 1}`,
          jobId: job.id,
        });
        break;
      }
    }

    if (!placed) {
      logs.push({
        type: 'skipped',
        message: `✘  ${job.id} (profit $${job.profit}, deadline ${job.deadline}) → skipped (no free slot before deadline ${job.deadline})`,
        jobId: job.id,
      });
    }
  }

  // ── Step 5: Collect selected jobs from filled slots ───────────────────────
  const selectedJobs = slots.filter(Boolean);

  logs.push({
    type: 'result',
    message: `Done! Selected ${selectedJobs.length} job(s): [${selectedJobs.map(j => j.id).join(', ')}] — Total Profit: $${totalProfit}`,
  });

  return { sortedJobs: sorted, slots, totalProfit, selectedJobs, logs };
}

/** IDs of jobs that ended up selected (for quick lookup) */
export function getSelectedIds(selectedJobs) {
  return new Set(selectedJobs.map(j => j.id));
}

/** Sample dataset used by "Load Sample Data" button */
export const SAMPLE_JOBS = [
  { id: 'J1', deadline: 2, profit: 20 },
  { id: 'J2', deadline: 2, profit: 60 },
  { id: 'J3', deadline: 1, profit: 40 },
  { id: 'J4', deadline: 3, profit: 100 },
  { id: 'J5', deadline: 4, profit: 80 },
];
