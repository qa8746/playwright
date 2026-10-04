# Playwright + TypeScript + Cucumber BDD

A starter end-to-end testing framework using Playwright for browser automation and Cucumber.js for Gherkin scenarios.

## Requirements

- Node.js 20 or newer
- npm

## Setup

1. Install dependencies: `npm install`
2. Install the Chromium browser: `npx playwright install chromium`
3. Run the suite: `npm test`

## Commands

- `npm test` — run tests headlessly and write the HTML report to `reports/cucumber-report.html`.
- `npm run test:headed` — run with the browser visible.
- `npm run test:debug` — run headed with Playwright API debug logging enabled.
- `npm run test:report` — explicitly run tests and generate the HTML report.

The browser is launched in the Cucumber hooks; each scenario gets an isolated context and page. Failed scenarios attach a screenshot to the Cucumber report.

## Configuration

- Set `BASE_URL` to test another deployment; it defaults to `https://playwright.dev`.
- `HEADLESS=false` is set by the headed/debug scripts. The default is headless.
- Add Gherkin files under `src/features`, step definitions under `src/steps`, and reusable page objects under `src/pages`.

## Project structure

- `src/features` — Gherkin scenarios
- `src/steps` — Cucumber step definitions
- `src/pages` — page objects
- `src/support` — Cucumber World and browser lifecycle hooks
- `reports` — generated HTML report output
