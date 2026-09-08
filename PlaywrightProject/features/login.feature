Feature: Login functionality

  @login @ui
  Scenario: Validate login functionality with valid credentials
    Given I open the login page
    When I enter valid username and password
    And I click the login button
    Then I should see the dashboard

    