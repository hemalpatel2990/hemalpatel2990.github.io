# Shipped Titles Data Accuracy Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Update `ShippedTitles.astro` with accurate tech stacks and contributions for each project.

**Architecture:** Update the `titles` data array and refine the `platform` field to include the primary technology (Unity/Unreal).

**Tech Stack:** Astro, TypeScript.

---

### Task 1: Update ShippedTitles Data

**Files:**
- Modify: `src/components/ShippedTitles.astro`

- [ ] **Step 1: Update the `titles` array with corrected data**

```typescript
const titles = [
  {
    name: "Wave Beta",
    platform: "Unreal Engine 5 | Social XR",
    year: "2024",
    company: "WaveXR",
    image: "/images/wavexr-thumb.png",
    storeUrl: "https://www.meta.com/experiences/wave-beta/7011698248940643/",
    contribution: "Developed the Social Venue architecture, mini-games, and core interactive platform features for the modern Wave social experience."
  },
  {
    name: "Wave Standalone",
    platform: "Unreal Engine | PICO Store",
    year: "2023",
    company: "WaveXR",
    image: "/images/wavexr-thumb.png",
    storeUrl: "https://www.picoxr.com/global/games/wave",
    contribution: "Implemented interactive features and Niagara particle systems for a standalone replay-based XR experience."
  },
  {
    name: "Calvin Harris - The Virtual Experience",
    platform: "Unreal Engine | Virtual Concert",
    year: "2023",
    company: "WaveXR",
    image: "/images/CalvinHarris_Experience.png",
    youtubeId: "9BncRHR98tk",
    contribution: "Engineered real-time interaction systems and optimized Niagara particle effects for a massive live-streamed VR concert."
  },
  {
    name: "Justin Bieber - An Interactive Virtual Experience",
    platform: "Unity | Virtual Concert",
    year: "2021",
    company: "WaveXR",
    image: "/images/Bieber_Wave.jpg",
    youtubeId: "UAhGvhvcoyY",
    contribution: "Built multiplayer networking and interactive gameplay systems in Unity for the 'Interactive Virtual Experience'."
  },
  {
    name: "Pentakill: Lost Chapter",
    platform: "Unity | Virtual Concert",
    year: "2021",
    company: "WaveXR",
    image: "/images/Pentakill_Wave.webp",
    youtubeId: "_rsW0a7JmBs",
    contribution: "Developed a Node-RED based voting overlay system that allowed viewers to trigger real-time visual changes in the live Unity application."
  },
  {
    name: "Wave Beta (Legacy)",
    platform: "Unity | Steam Store",
    year: "2021",
    company: "WaveXR",
    image: "/images/wavexr-thumb.png",
    storeUrl: "https://store.steampowered.com/app/453000/Wave_Beta/",
    contribution: "Architected a Node-RED pipeline to queue/filter YouTube comments and built a custom Unity Editor tool for tech artists to spawn real-time visual prefab interactions."
  },
  {
    name: "John Legend - Bigger Love",
    platform: "Unity | Virtual Concert",
    year: "2020",
    company: "WaveXR",
    image: "/images/JohnLegend_Wave.png",
    youtubeId: "eGy64l9Yuuw",
    contribution: "Architected a Node-RED pipeline to queue/filter YouTube comments and built a custom Unity Editor tool for tech artists to spawn real-time visual prefab interactions."
  },
  {
    name: "Tinashe - Open Session",
    platform: "Unity | Virtual Concert",
    year: "2020",
    company: "WaveXR",
    image: "/images/Tinashe_Wave.png",
    youtubeId: "gxCEmbX-Xdk",
    contribution: "Architected a Node-RED pipeline to queue/filter YouTube comments and built a custom Unity Editor tool for tech artists to spawn real-time visual prefab interactions."
  },
  {
    name: "The Weeknd Experience",
    platform: "Unity | Virtual Concert",
    year: "2020",
    company: "WaveXR",
    image: "/images/Weekend_Wave.webp",
    youtubeId: "uViueiV8fME",
    contribution: "Architected a Node-RED pipeline to queue/filter YouTube comments and built a custom Unity Editor tool for tech artists to spawn real-time visual prefab interactions."
  },
  {
    name: "Eden Falling",
    platform: "Unity | PC RPG",
    year: "2020",
    company: "Razor Edge Games",
    image: "/images/razor-thumb.png",
    contribution: "Architected the Character Creator system and engineered core turn-based gameplay and survival systems in C#."
  },
  {
    name: "Alimentary Avengers",
    platform: "Unity | Mobile Education",
    year: "2015",
    company: "Smartcloud",
    image: "/images/smartcloud-thumb.png",
    contribution: "Developed 2D platforming gameplay and puzzle systems for an interactive educational app in Unity."
  },
  {
    name: "Tafe Planetary Plus",
    platform: "Unity | Mobile iOS",
    year: "2014",
    company: "Smartcloud",
    image: "/images/smartcloud-thumb.png",
    contribution: "Built the mobile UI architecture and related visual transitions for a 3D product showcase application in Unity."
  }
];
```

- [ ] **Step 2: Verify and Commit**

Run: `git add src/components/ShippedTitles.astro && git commit -m "feat: update shipped titles with accurate tech stacks and contributions"`

---

### Task 2: Status Update

**Files:**
- Modify: `STATUS.md`

- [ ] **Step 1: Update STATUS.md to reflect the content sync**

```markdown
- [x] **Content Sync:** Shipped Titles updated with accurate Unity/Unreal tech stacks and system details (Node-RED, Editor Tools).
```

- [ ] **Step 2: Commit**

Run: `git add STATUS.md && git commit -m "docs: update status for shipped titles sync"`
