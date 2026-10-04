module.exports = {
  default: {
    requireModule: ['ts-node/register'],
    require: ['src/support/**/*.ts', 'src/steps/**/*.ts'],
    paths: ['src/features/**/*.feature'],
    format: ['progress', 'html:reports/cucumber-report.html'],
    publishQuiet: true,
    parallel: 1,
    worldParameters: {
      baseUrl: process.env.BASE_URL || 'https://playwright.dev'
    }
  }
};
