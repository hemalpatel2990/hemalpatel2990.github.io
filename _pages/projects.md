---
layout: single
title: "Projects"
permalink: /projects/
author_profile: true
toc: true
toc_label: "Companies"
toc_icon: "briefcase"
---

# Featured Work

A showcase of my professional work across multiplayer systems, engine optimization, and custom tooling.

<div class="project-thumbnails">
  <div class="project-thumb-card">
    <a href="#wavexr">
      <img src="/assets/images/wavexr-thumb.png" alt="WaveXR">
      <h3>WaveXR</h3>
      <p>2019-2025</p>
    </a>
  </div>
  <div class="project-thumb-card">
    <a href="#razor-edge-games">
      <img src="/assets/images/razor-thumb.png" alt="Razor Edge Games">
      <h3>Razor Edge Games</h3>
      <p>2015-2020</p>
    </a>
  </div>
  <div class="project-thumb-card">
    <a href="#smartcloud-infotech">
      <img src="/assets/images/smartcloud-thumb.png" alt="Smartcloud Infotech">
      <h3>Smartcloud Infotech</h3>
      <p>2014-2015</p>
    </a>
  </div>
</div>

---

## WaveXR
{: #wavexr}

![WaveXR](/assets/images/wavexr-thumb.png){: .align-center}

**Software Engineer II (Senior Gameplay/Systems Focus)**  
**Nov 2019** - **Dec 2025** | **Remote**

**Shipped Experiences:**
1. **Justin Bieber - An Interactive Virtual Experience** (2021)
2. **The Weeknd Experience** (2020)
3. **Pentakill: Lost Chapter** (League of Legends) (2021)
4. **Calvin Harris - The Virtual Experience** (2023)

Led mission-critical multiplayer systems and editor tools development for a live-service VR platform.

**Key Achievements:**
- Spearheaded a mission-critical core social initiative: Nexus, architecting the C++ UI framework, interaction models, and gameplay logic, leading the team to successful integration and adoption as a foundational system.
- Functioned as a solo engineer on rapid-response initiatives, executing full-stack development (Gameplay, UI, Backend integration) to deliver critical features outside the primary roadmap cycle.
- Performed rapid prototyping to validate gameplay mechanics for stakeholders, allowing the team to 'fail fast' and pivot direction before committing significant resources.
- Architected and implemented server-authoritative, state-synchronization systems enabling users to dynamically change visual elements across a persistent, live server instance.
- Provided technical guidance and mentorship to multiple developers on the creation of diverse and scalable interaction systems, ensuring adherence to engine best practices and performance standards.
- Worked with the team on successful engine transition from Unity to Unreal, simultaneously architecting and implementing some of the core interaction features (e.g. Custom Niagara Components, Single Niagara Subsystem per client).
- Integrated foundational backend services (e.g., user accounts, party system) with gameplay systems, ensuring reliable and scalable cross-platform data synchronization.
- Engineered and optimized robust, low-latency gameplay systems for dedicated multiplayer networking environments, ensuring highly synchronized and scalable player experiences.
- Developed multiple proprietary tools within the Unreal Editor, resulting in a quantifiable increase in workflow efficiency for the Content & Development teams (e.g., reducing scene setup time by 30%).
- Applied deep engine-level expertise and Unreal Profiling tools (e.g., Unreal Insights) to refactor and optimize various core systems (e.g., memory management, rendering), resulting in substantial performance gains of over 80% across the application.
- Enforced high architectural standards and code quality through rigorous peer reviews, reducing technical debt and ensuring long-term maintainability.
- Established and maintained coding guidelines for the team, conducting daily code reviews to ensure adherence to SOLID principles and performance budgets.

---

## Razor Edge Games
{: #razor-edge-games}

![Razor Edge Games](/assets/images/razor-thumb.png){: .align-center}

**Contract Unity Programmer**  
**Nov 2015** - **Feb 2020** | **Remote**

**Key Projects:**
1. **Eden Falling** - Turn-based Sci-Fi Survival RPG

**Key Achievements:**
- Engineered core gameplay loops including turn-based combat, inventory, and survival mechanics, implementing custom logic for dynamic boss encounters and player tracking.
- Led the integration of open-source hair/fur simulation and holographic UI shaders, troubleshooting complex mesh-to-spline data format conflicts.
- Created custom internal tools that streamlined the content creation pipeline, reducing iteration time for artists and designers on a large-scale open-world project.
- Contributed to a major DLC release by diagnosing critical bugs and maintaining technical documentation to ensure project transparency.

---

## Smartcloud Infotech Pvt. Ltd.
{: #smartcloud-infotech}

![Smartcloud Infotech](/assets/images/smartcloud-thumb.png){: .align-center}

**Unity Developer**  
**Jun 2014** - **Mar 2015** | **Pune, India**

**Shipped Titles:**
1. **Alimentary Avengers** - Educational nutrition game
2. **Tafe Planetary Plus** - Interactive learning application
3. **E-Smart** - Educational platform
4. **Be Safe, Be Smart!** - Safety awareness application

**Key Achievements:**
- Shipped interactive commercial applications using Unity, including *Alimentary Avengers*, *Tafe Planetary Plus*, *E-Smart*, and the informative app *Be Safe, Be Smart!*
- Consulted with clients to define project scope and provided accurate project estimations, along with process improvement suggestions.
- Implemented and iteratively refined UI/UX and gameplay features based on direct client feedback and requirements.

---

# Personal Projects

Independent initiatives and open-source contributions.

<div class="project-thumbnails">
  <div class="project-thumb-card">
    <a href="#universal-data-sync">
      <img src="/assets/images/universal-data-sync-thumb.png" alt="Universal Data Sync">
      <h3>Universal Data Sync</h3>
      <p>2025</p>
    </a>
  </div>
</div>

---

## Universal Data Sync
{: #universal-data-sync}

![Universal Data Sync](/assets/images/universal-data-sync-thumb.png){: .align-center}

**Open Source Tool for Unreal Engine**  
**Dec 2025** | **NeoNexus Studios**

A high-performance networking solution for Unreal Engine designed to solve the challenge of replicating arbitrary data structures without custom C++ code.

**Key Features:**
- **Dynamic Struct Replication:** Replicate any `USTRUCT` marked as `BlueprintType` without modifying C++ source
- **Fast Array Serialization:** Built on `FFastArraySerializer` for minimized bandwidth usage
- **Type Safety:** Optional schema enforcement to restrict keys or values to specific types
- **Event-Driven:** dedicated events for key addition, updates, and removal for responsive UI

**Technologies:** Unreal Engine, C++, Networking, Replication, FastArraySerializer

**Repository:** [UniversalDataSync](https://github.com/hemalpatel2990/UniversalDataSync)
