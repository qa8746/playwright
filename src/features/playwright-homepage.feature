Feature: Playwright homepage
  As a visitor
  I want to open the Playwright website
  So that I can confirm the site is available

  Scenario: View the Playwright homepage
    When I open the Playwright homepage
    Then the page title should contain "Playwright"
