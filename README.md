# Astronaut Self-Assessment Panel

Prototype for the **NASA Space Apps Challenge 2026** challenge *"Software for Astronauts on Space Missions"* (health monitoring).

> **Prototype, not a medical device.** Nothing in this app is a diagnosis or treatment advice.

## What it does (implemented)

- Daily check-in for 7 indicators: resting heart rate, systolic/diastolic pressure, blood glucose, body temperature, sleep duration, mood (1–5 self-rating).
- Compares recent readings with the user's **own baseline** (first 7 readings) and shows one of four statuses: *Usual*, *Watch*, *Attention*, *No data*.
- **Missing data is never shown as "fine"**: indicators without enough data are grey and counted separately.
- Clickable body map + region list (keyboard accessible), trend charts with baseline band, "why it matters" and "how to measure" notes.
- Two clearly separated data sources: **Simulated demo** (fictional, labelled) and **My entries** (stored only in the browser's localStorage).
- Plain static site: no backend, no dependencies, works offline.

## Run it

Open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000   # then open http://localhost:8000
```

## Tests

```bash
node tests/core.test.js       # no dependencies
```

Covers baseline/deviation logic, edge cases (too few readings, zero variance, missing values), input validation and the simulated scenario.

## Scientific status and limitations (please read)

| Item | Status |
|---|---|
| Challenge requirements | Taken from the official challenge page text (Intermediate, Human Exploration / Software / Space Exploration). |
| Status levels | **Statistical deviation from the user's own baseline** (|z| ≥ 2 = Watch, ≥ 3 = Attention). These cut-offs are configurable conventions, **not clinical thresholds**. |
| Input limits | Only reject physically impossible typing errors; they are not normal ranges. |
| Explanatory texts (`js/content.js`) | **Draft. Not yet verified against NASA HRP sources.** Marked in the UI. |
| Indicator → hazard mapping | **Proposed mapping, unverified.** |
| Demo data (`js/demo.js`) | **Entirely fictional**, arbitrary parameters, makes no claim about real physiology. |
| No clinical reference ranges | None are used yet. If added, each needs population, units and a cited source, and must be labelled as terrestrial if it is not spaceflight-specific. |
| Not covered | Bone/muscle and immune indicators (shown as "no data"), radiation, environment, camera input, ML. |
| Guidance | The app only suggests *discussing a large change with the flight surgeon*. It gives no medication or treatment advice. |

## Structure

```
index.html          page
css/style.css       styles
js/core.js          pure logic: validation, baseline, status (tested)
js/demo.js          simulated data generator (fictional)
js/content.js       draft explanatory texts
js/app.js           UI wiring
tests/core.test.js  unit tests
```

## Next steps

1. Verify and cite explanatory texts and hazard mapping from NASA HRP resources.
2. Decide which reference ranges (if any) to add, with sources.
3. Add measurement reminders and a bone/muscle or immune-related input if a sourced indicator is chosen.
