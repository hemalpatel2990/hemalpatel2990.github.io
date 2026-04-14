# Design Spec: Shipped Titles Data Accuracy & Descriptions

## 1. Goal
Update the `ShippedTitles.astro` component to accurately reflect the technology stack and engineering contributions for each project, ensuring a clear distinction between Unity and Unreal Engine work and specific system architectures (Node-RED, Editor Tools, Niagara).

## 2. Deliverables

### A. `ShippedTitles.astro` Data Update
Modify the `titles` array with accurate `tech`, `platform`, and `contribution` strings.

#### Key Data Points:
-   **Wave Beta (2024):** Unreal Engine 5 | Social venue, mini-games, core interactive platform.
-   **Wave Standalone (2023):** Unreal Engine | PICO only, interaction, Niagara.
-   **Calvin Harris (2023):** Unreal Engine | Niagara optimization, real-time interaction.
-   **Justin Bieber (2021):** Unity | Networking, interactive gameplay.
-   **Pentakill (2021):** Unity | Node-RED voting overlay, live visual triggers.
-   **The Weeknd / Tinashe / John Legend (2020):** Unity | Node-RED comment queuing pipeline, custom Unity Editor tool for prefab spawning/despawning.
-   **Eden Falling (2020):** Unity | Character Creator, turn-based/survival gameplay.
-   **Alimentary Avengers (2015):** Unity | 2D platforming, puzzle systems.
-   **Tafe Planetary Plus (2014):** Unity | Mobile (iOS), UI architecture, transitions.

### B. UI Refinement
- Ensure the `tech` field is displayed or integrated into the `platform` string if appropriate for clarity.
- Maintain the "floating popup" hover effect for the detailed contribution text.

## 3. Implementation Strategy
1.  Update the `titles` constant in `src/components/ShippedTitles.astro`.
2.  Group the contributions for Weeknd, Tinashe, and John Legend under their respective entries but using the unified "Node-RED pipeline + Editor Tool" description.
3.  Ensure "VR" is removed from the Tafe entry and "Mobile/iOS" is emphasized.

## 4. Testing & Validation
-   Verify all descriptions are accurate to the user's provided context.
-   Check that the hover popups still work correctly with the updated (potentially longer) text.
