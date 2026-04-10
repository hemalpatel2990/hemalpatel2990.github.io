---
title: "Software Engineer II"
company: "WaveXR"
date: "Nov 2019 – Dec 2025"
location: "Remote"
order: 1
---
- Led 2 engineers and 2 tech artists on the Social Experience feature from prototype to production.
- Partnered with product managers and technical artists throughout the feature lifecycle, using JIRA to gather requirements, validate mid-build, and adjust scope. Proposed a phased UI approach — Phase 1 auto-generated 2D, Phase 2 full 3D — allowing the initial release to ship on time while preserving the long-term vision.
- Architected a production networking system (NATS + Unreal) with Manager/Controller/UI pipelines, enabling real-time player control of live stage visuals; shipped the solution and conducted user testing to confirm stability.
- Rebuilt the concurrent Niagara particle system using the command pattern, boosting frame rate from 15 fps to 36 fps under full audience load, and resolved RPC/Blueprint bottlenecks via Unreal Insights, cutting frame time and memory usage by over 80%.
- Developed a C# UE5 build-config tool (Unreal Build Tool XML) and custom PAK packager, automating credential injection and stripping across 15 environments; the tool was adopted studio-wide in the CI/CD pipeline.
- Designed a NATS-based interaction service routing high-frequency performance data server-side, offloading Unreal replication and enabling multi-instance distribution.
- Built a UE5 Segment analytics subsystem batching up to 20 timestamped REST events before dispatch, callable from any game system.
- Integrated Meta Horizon party and player-blocking via Oculus SDK, with correct mute/unmute propagation across connected players.
- Drove Unity to UE5 engine migration, architecting core systems in C++ and maintaining feature parity across the full product stack.
- Engineered interactive systems powering 6 live mocap concert experiences, each with unique production requirements and hard broadcast deadlines across Unity and Unreal Engine.
- Supported live show operations via Grafana monitoring, triaging client-side issues in real time alongside DevOps to maintain stability during active broadcasts.
