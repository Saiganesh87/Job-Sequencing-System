<div align="center">
  
<br/>

> 🚀 An **interactive, step-by-step visualizer** for the **Job Sequencing with Deadlines** greedy algorithm — built with React, Vite, and Tailwind CSS.

<br/>

---

</div>

## 📌 Table of Contents

- [📖 What is Job Sequencing?](#-what-is-job-sequencing)
- [🧠 Algorithm Explanation](#-algorithm-explanation)
- [✨ Features](#-features)
- [🖥️ Demo Preview](#%EF%B8%8F-demo-preview)
- [📁 Project Structure](#-project-structure)
- [⚙️ Tech Stack](#%EF%B8%8F-tech-stack)
- [🚀 Getting Started](#-getting-started)
- [📊 Sample Data](#-sample-data)
- [🎨 UI Design Highlights](#-ui-design-highlights)
- [🤝 Contributing](#-contributing)

---

## 📖 What is Job Sequencing?

**Job Sequencing with Deadlines** is a classic **Greedy Algorithm** problem in computer science.

> Given a set of jobs, each with a **deadline** and a **profit**, schedule jobs to **maximize total profit** — with the constraint that each job takes exactly **1 unit of time** and must be completed **on or before its deadline**.

### 🔑 Real-World Applications

| Domain | Use Case |
|--------|----------|
| 🖥️ **Operating Systems** | CPU job scheduling |
| 📦 **Logistics** | Delivery order prioritization |
| 🏥 **Healthcare** | Emergency patient prioritization |
| 💰 **Finance** | Transaction processing by deadline |
| 📡 **Networks** | Packet scheduling |

---

## 🧠 Algorithm Explanation

The algorithm follows a **Greedy Strategy** — always pick the most profitable available job first.

### 📋 Step-by-Step Walkthrough

```
Given Jobs:
┌──────┬──────────┬────────┐
│ Job  │ Deadline │ Profit │
├──────┼──────────┼────────┤
│  J1  │    2     │  $20   │
│  J2  │    2     │  $60   │
│  J3  │    1     │  $40   │
│  J4  │    3     │ $100   │
│  J5  │    4     │  $80   │
└──────┴──────────┴────────┘
```

**Step 1 — Sort by Profit (Descending):**
```
J4($100) → J5($80) → J2($60) → J3($40) → J1($20)
```

**Step 2 — Create Time Slots (max deadline = 4):**
```
[ _ ] [ _ ] [ _ ] [ _ ]
  1     2     3     4
```

**Step 3 — Assign Jobs Greedily (latest free slot ≤ deadline):**
```
J4 (deadline 3) → Slot 3 ✔   [ _ ] [ _ ] [J4] [ _ ]
J5 (deadline 4) → Slot 4 ✔   [ _ ] [ _ ] [J4] [J5]
J2 (deadline 2) → Slot 2 ✔   [ _ ] [J2] [J4] [J5]
J3 (deadline 1) → Slot 1 ✔   [J3] [J2] [J4] [J5]
J1 (deadline 2) → No free slot before deadline 2 ✘
```

**Step 4 — Result:**
```
✅ Selected Jobs : J3, J2, J4, J5
💰 Total Profit  : $40 + $60 + $100 + $80 = $280
❌ Skipped       : J1 (no available slot)
```

### 🔢 Complexity Analysis

| Metric | Value |
|--------|-------|
| ⏱️ **Time Complexity** | O(n²) — for each job, scan slots backwards |
| 💾 **Space Complexity** | O(n) — for the slots array |
| ✅ **Optimality** | Globally optimal (proven greedy choice property) |

### 📐 Algorithm Pseudocode

```
FUNCTION jobSequencing(jobs[]):
  1. SORT jobs by profit in DESCENDING order
  2. maxDeadline ← MAX(job.deadline for each job)
  3. slots[1..maxDeadline] ← NULL  (empty time slots)
  4. totalProfit ← 0

  5. FOR each job in sorted jobs:
       FOR j ← MIN(maxDeadline, job.deadline) DOWN TO 1:
         IF slots[j] is NULL:
           slots[j] ← job
           totalProfit ← totalProfit + job.profit
           BREAK  ← (move to next job)

  6. RETURN slots, totalProfit
```

### ✅ Why Greedy Works Here

The greedy choice — **always process the highest-profit job first** — is provably optimal because:
- Swapping a lower-profit job for a higher-profit one in the same slot never decreases total profit.
- Assigning to the **latest available slot** preserves earlier slots for future jobs with tighter deadlines.

---

## ✨ Features

- 🟢 **Add / Remove Jobs** — custom Job ID, Deadline, and Profit
- ⚡ **Load Sample Data** — one-click 5-job example
- 📊 **Sorted Jobs Table** — visual green/red status (selected vs skipped)
- 🪵 **Step-by-Step Logs** — terminal-style trace of every algorithm decision
- 📅 **Slot Timeline** — animated time-slot boxes showing the final schedule
- 🏆 **Result Card** — selected jobs, profit formula breakdown, and summary stats
- 🌙 **Dark Theme** — sleek dark UI with grid texture and neon green accents
- 📱 **Responsive Design** — works on mobile, tablet, and desktop
- ⌨️ **Keyboard Friendly** — press `Enter` in any input to add a job instantly

---

## 🖥️ Demo Preview

### 🏠 Home Page
> Clean landing page with algorithm overview and step cards

### 📋 Input Section
> Add jobs, remove them, or load sample data instantly

### 📊 Output Section
> See sorted table → step logs → slot timeline → final result — all at once

---

## 📁 Project Structure

```
job-sequencer/
│
├── public/                     # Static assets
│   ├── favicon.svg
│   └── icons.svg
│
├── src/
│   ├── utils/
│   │   └── jobSequencing.js    # ✅ Core greedy algorithm + sample data
│   │
│   ├── components/
│   │   ├── JobInputForm.jsx    # Add/remove jobs, load sample data
│   │   ├── SortedJobsTable.jsx # Jobs sorted by profit (green/red status)
│   │   ├── StepLogs.jsx        # Terminal-style decision logs
│   │   ├── SlotVisualization.jsx # Animated slot timeline
│   │   └── ResultCard.jsx      # Final result summary + profit formula
│   │
│   ├── pages/
│   │   ├── HomePage.jsx        # Landing page with algorithm explanation
│   │   └── VisualizerPage.jsx  # Main orchestrator page
│   │
│   ├── App.jsx                 # Simple 2-page router
│   ├── main.jsx                # React entry point
│   └── index.css               # Tailwind + global styles + fonts
│
├── index.html
├── tailwind.config.js
├── vite.config.js
├── package.json
└── README.md
```

---

## ⚙️ Tech Stack

| Technology | Purpose |
|------------|---------|
| ⚛️ **React 18** | UI components and state management |
| ⚡ **Vite 5** | Lightning-fast dev server and bundler |
| 🎨 **Tailwind CSS 3** | Utility-first responsive styling |
| 🔤 **Sora + JetBrains Mono** | Display and monospace fonts (Google Fonts) |
| 📦 **Vanilla JS** | Algorithm logic (no extra libraries) |

---

## 🚀 Getting Started

### Prerequisites

Make sure you have **Node.js ≥ 18** installed.

```bash
node --version   # should be v18+
npm --version    # should be v8+
```

### 1. Clone the Repository

```bash
git clone https://github.com/Saiganesh87/job-sequencing-visualizer.git
cd job-sequencing-visualizer
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Development Server

```bash
npm run dev
```

Then open **http://localhost:5173** in your browser 🎉

### 4. Build for Production

```bash
npm run build
npm run preview    # preview the production build
```

---

## 📊 Sample Data

Click **"⚡ Load Sample Data"** to auto-fill these jobs:

| Job | Deadline | Profit | Result |
|-----|----------|--------|--------|
| J1  | 2        | $20    | ❌ Skipped |
| J2  | 2        | $60    | ✅ Slot 2  |
| J3  | 1        | $40    | ✅ Slot 1  |
| J4  | 3        | $100   | ✅ Slot 3  |
| J5  | 4        | $80    | ✅ Slot 4  |

**Total Profit: `$40 + $60 + $100 + $80 = $280`**

---

## 🎨 UI Design Highlights

```
Color Palette:
  Background  → #0a0e1a  (deep navy)
  Card        → #161d2e  (dark slate)
  Accent      → #00e5a0  (neon green)  ← selected jobs
  Danger      → #ff4d6d  (coral red)   ← skipped jobs
  Warning     → #f59e0b  (amber)       ← profit values
  Muted       → #4b5a72  (slate grey)  ← labels
```

- 🌐 **Grid texture** — subtle green grid overlay on the background
- ✨ **Glow effects** — card hover glows and slot box shadows
- 🎞️ **Animations** — fade-in, slide-up, and pop keyframes via Tailwind
- 💻 **Terminal style** — log window mimics a real dev console

---

## 🤝 Contributing

Contributions are welcome! Here's how:

1. **Fork** this repository
2. **Create** a feature branch: `git checkout -b feature/my-feature`
3. **Commit** your changes: `git commit -m "feat: add my feature"`
4. **Push** to the branch: `git push origin feature/my-feature`
5. **Open** a Pull Request

### 💡 Ideas for Contribution
- [ ] Add animation delay between log entries
- [ ] Export schedule as PDF or image
- [ ] Add more algorithm variants (EDF, SJF)
- [ ] Dark/light theme toggle
- [ ] Unit tests for `jobSequencing.js`

---

<div align="center">

Made with ❤️ by [Saiganesh87](https://github.com/Saiganesh87)

⭐ **Star this repo** if you found it helpful!

</div>
