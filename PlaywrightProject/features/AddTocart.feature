Feature: Login functionality

  @cart @ui
  Scenario: Validate add to cart functionality
    Given I open the login page
    When I enter valid username and password
    And I click the login button
    And Click on add to cart button
    Then Verify product added in the cart