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

## Azure DevOps pipeline

The root-level `azure-pipelines.yml` runs the headless Cucumber suite on Ubuntu when changes are pushed or pull requests target `main` or `master`. It installs Node.js 20, npm dependencies, and Chromium, then publishes the generated HTML report as the `cucumber-report` pipeline artifact, including when the tests fail.

An Azure DevOps account is not required to create or keep this YAML file, but it is required to run the pipeline in Azure DevOps. To set it up:

1. Create/sign in with a Microsoft account, then create an Azure DevOps organization at [dev.azure.com](https://dev.azure.com/) and a project.
2. Put this project in a repository Azure DevOps can access. You can push it to Azure Repos or connect a GitHub repository during pipeline creation.
3. In the project, open **Pipelines > New pipeline**, select the repository, choose **Existing Azure Pipelines YAML file**, and select `/azure-pipelines.yml`.
4. Save and run the pipeline. To trigger it from another branch, add that branch under both `trigger.branches.include` and `pr.branches.include` in the YAML.

Until you have an Azure DevOps organization and a connected repository, the pipeline cannot be created or executed in ADO; the YAML is ready to use once those are available.

## Project structure

- `src/features` — Gherkin scenarios
- `src/steps` — Cucumber step definitions
- `src/pages` — page objects
- `src/support` — Cucumber World and browser lifecycle hooks
- `reports` — generated HTML report output
