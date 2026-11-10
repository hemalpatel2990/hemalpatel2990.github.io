---
title: "NeoThreads"
tech: ["Unreal Engine", "Modern C++", "Multithreading", "Task Graph"]
image: "/images/NeoThread_thumb.jpg"
order: 3
---
A lightweight concurrency framework for Unreal Engine to safely offload heavy computations from the Game Thread.

- Developed an asynchronous task management layer using C++ and the Unreal Task Graph, keeping the Game Thread free of stalls during intensive gameplay calculations.
- Significantly improves runtime frame stability and frame pacing for CPU-heavy simulation and AI workloads.
