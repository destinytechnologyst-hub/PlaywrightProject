Feature: Login functionality

 @ui @login 
  Scenario: Validate login functionality with valid credentials
    Given I open the login page
    When I enter valid 'standard_user' and 'secret_sauce'
    And I click the login button
    Then I should see the dashboard


 @ui @login @error
    Scenario Outline: Validate login functionality with Invalid credentials
    Given I open the login page
    When I enter valid '<username>' and '<password>'
    And I click the login button
    Then Verify error message '<errorMessage>' displayed on login page

Examples:
    | username | password | errorMessage |
    |                |         | Username is required  |
    |  standard_user |         | Password is required  |
    |  user          |  passs  | Username and password do not match any user in this service  |


 
    

    