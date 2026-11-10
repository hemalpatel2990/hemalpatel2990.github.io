---
title: "Software Engineer II"
company: "WaveXR"
date: "Nov 2019 – Dec 2025"
location: "Remote (Horsham, PA)"
order: 2
category: "primary"
tags: ["Unreal Engine 5", "Modern C++", "Team Lead (4 FTEs)", "GameMode & PlayerState", "Meta Quest 3 VR", "Slate & UMG Tools", "NATS", "Unreal Insights"]
---
- Helped architect and implement the Social Venue MiniGame manager, the platform's equivalent of a game mode: a server-authoritative system that holds and distributes points and drives a per-minigame leaderboard.
- Designed server-authoritative player-state systems and an analytics system built on Unreal GameMode data.
- Managed a team of four engineers and technical artists to deliver the Social Venue platform, including its minigame and live gameplay frameworks. Coordinated directly with producers and product stakeholders to define scope and technical roadmaps.
- Architected a custom Unreal-to-NATS messaging layer to handle real-time performer and attendee data serialization. Built accompanying UMG editor tools that allowed technical artists to configure data routing without writing code.
- Bypassed slow TeamCity CI/CD build loops by reverse-engineering Unreal's packaging pipeline to create a custom, UMG-based Editor Export Tool, letting content creators instantly generate local build artifacts.
- Designed a proxy system over NATS streams using a decoupled C++ MVVM pattern. This allowed runtime configuration overrides via Blueprints, isolating visual scripting from core systems and supporting cross-peripheral input switching.
- Profiled and eliminated critical RPC bottlenecks and Blueprint overhead using Unreal Insights. Achieved an 80% reduction in frame times and optimized runtime memory allocation.
- Rebuilt a high-draw Niagara particle system using the command pattern to optimize execution under full client load. Stabilized real-time performance on the hardware-constrained Quest 3, recovering frame rate from 15 fps to 36 fps with ASW enabled.
- Maintained cross-platform runtime systems across Unity and UE5 for live, high-occupancy virtual concerts (The Weeknd, Justin Bieber, Calvin Harris, Pentakill). Partnered with DevOps to monitor and triage client-side infrastructure anomalies using Grafana.
- Migrated legacy virtual environment codebases from Unity to UE5, porting core subsystems to native C++ to retain feature parity.
