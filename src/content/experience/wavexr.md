---
title: "Software Engineer II"
company: "WaveXR"
date: "Nov 2019 – Dec 2025"
location: "Remote (Horsham, PA)"
order: 1
category: "primary"
---
- Managed a team of four engineers and technical artists to deliver the Social Venue platform that includes live gameplay frameworks. Coordinated directly with producers and product stakeholders to define scope and technical roadmaps.
- Architected a custom Unreal-to-NATS messaging layer to handle real-time performer and attendee data serialization. Built accompanying UMG editor tools that allowed technical artists to configure data routing without writing code.
- Designed a proxy system over NATS streams using a decoupled C++ MVVM pattern. This allowed runtime configuration overrides via Blueprints, isolating visual scripting from core systems and supporting cross-peripheral input switching.
- Rebuilt a high-draw Niagara particle system using the command pattern to optimize execution under full client load. Stabilized real-time performance on the hardware-constrained Quest 3, recovering frame rate from 15 fps to 36 fps with ASW enabled.
- Profiled and eliminated critical RPC bottlenecks and Blueprint overhead using Unreal Insights. Achieved an 80% reduction in frame times and optimized runtime memory allocation.
- Bypassed slow TeamCity CI/CD build loops by reverse-engineering Unreal's packaging pipeline to create a custom, UMG-based Editor Export Tool, letting content creators instantly generate local build artifacts.
- Maintained cross-platform runtime systems across Unity and UE5 for live, high-occupancy virtual concerts. Partnered with DevOps to monitor and triage client-side infrastructure anomalies using Grafana.
- Identified and resolved deterministic cross-platform bugs between Windows and Linux builds, addressing path separator issues and rendering discrepancies.
- Built a modular telemetry subsystem that batched network events before dispatch, minimizing local network overhead and optimizing data pipeline traffic.
- Integrated Meta Horizon party features and player-blocking mechanics via the Oculus SDK, keeping replication states synced across connected peers.
- Migrated legacy virtual environment codebases from Unity to UE5, porting core subsystems to native C++ to retain feature parity.
