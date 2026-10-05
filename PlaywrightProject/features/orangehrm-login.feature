Feature: OrangeHRM login

  @ui @orangehrm
  Scenario: Log in with valid OrangeHRM credentials
    Given I open the OrangeHRM login page
    When I enter the OrangeHRM username "Admin" and password "admin123"
    And I submit the OrangeHRM login form
    Then I should be redirected to the OrangeHRM dashboard