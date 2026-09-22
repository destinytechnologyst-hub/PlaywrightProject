Feature: place order

 @ui @login @placeOrder
  Scenario: Validate place order functionality
    Given I open the login page
    When I enter valid 'standard_user' and 'secret_sauce'
    And I click the login button
    And Click on add to cart button
    And Click on cart icon 
    And Click on checkout Button
    And Enter first name on checkout page
    And Enter last name on checkout page
    And Enter Zip code on checkout page
    And Click on Continue button
    And Click on finish button on overview page
    Then Verify order got placed successfully


