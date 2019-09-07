Feature: The Bing

  I want to open a social network page

  @focus
  Scenario: Opening a social network page
    Given I open "https://bing.com" page
    Then I see "Bing" in the title
