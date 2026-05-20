---
title: "Software Engineer II"
company: "WaveXR"
date: "Nov 2019 – Dec 2025"
location: "Remote"
order: 1
---
- Architected a production networking system (NATS + Unreal) with Manager/Controller/UI pipelines, enabling real-time player control of live stage visuals; shipped the solution and conducted user testing to confirm stability.
- Rebuilt the concurrent Niagara particle system using the command pattern, boosting frame rate from 15 fps to 36 fps under full audience load, and resolved RPC/Blueprint bottlenecks via Unreal Insights, cutting frame time and memory usage by over 80%.
- Developed a C++ UE5 build-config tool (Unreal Build Tool XML) and custom PAK packager, automating credential injection and stripping across 15 environments; containerized supporting services with Docker and integrated the toolchain into CI/CD, adopted studio-wide.
- Diagnosed and resolved Windows-to-Linux build failures including strict type enforcement differences, path separator incompatibilities, and threading race conditions caused by OS-level scheduler divergence — maintaining a stable, reproducible cross-platform build.
- Operated Linux server instances during live concert broadcasts — pulling Grafana logs, configuring server-side services, and resolving runtime failures under hard broadcast deadlines.
- Validated dedicated server builds using WSL and Docker containers, reproducing Linux-specific runtime behavior and confirming server stability prior to cloud deployment.
- Integrated PlayFab matchmaking, inventory, and player login systems across client and server boundaries.
- Designed a NATS-based interaction service routing high-frequency performance data server-side, offloading Unreal replication and enabling multi-instance distribution.
- Led 2 engineers and 2 tech artists on the Social Experience feature from prototype to production.
- Drove Unity to UE5 engine migration, architecting core systems in C++ and maintaining feature parity across the full product stack.
- Built a UE5 Segment analytics subsystem batching up to 20 timestamped REST events before dispatch, callable from any game system.
- Engineered interactive systems powering 6 live mocap concert experiences, each with unique production requirements and hard broadcast deadlines across Unity and Unreal Engine.
- Supported live show operations via Grafana monitoring, triaging client-side issues in real time alongside DevOps to maintain stability during active broadcasts.
