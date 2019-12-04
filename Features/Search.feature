Feature: Google Search Analysis
  @tag1
  Scenario: Google search 
    Given I navigate to "http://www.google.com"
    When I search for "test"
    Then I should see some results
    And I close the browser