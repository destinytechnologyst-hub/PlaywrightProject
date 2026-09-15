Feature: Validate Add to card functionality on product page

  @cart @ui @verifyLogo
Scenario: Verify logo swagAlb logo on products page
    Given I open the login page
    When I enter valid 'standard_user' and 'secret_sauce'
    And I click the login button
    Then Verify 'Swag Labs' text present in swaglab logo

   @cart @ui
  Scenario: Validate add to cart functionality for single product
    Given I open the login page
    When I enter valid 'standard_user' and 'secret_sauce'
    And I click the login button
    And Click on add to cart button
    Then Verify no of products '1' added in the cart

    @cart @ui
  Scenario: Validate add to cart functionality for multiple products 
    Given I open the login page
    When I enter valid 'standard_user' and 'secret_sauce'
    And I click the login button
    And Click on add to cart button
    And Click on add to cart button
    And Click on add to cart button
    And Click on add to cart button
    Then Verify no of products '4' added in the cart


     @cart @ui
  Scenario: Validate remove product from cart functionality
    Given I open the login page
    When I enter valid 'standard_user' and 'secret_sauce'
    And I click the login button
    And Click on add to cart button
    And Click on add to cart button
    And Click on add to cart button
    And Click on Remove button to remove product from cart
    Then Verify no of products '2' added in the cart


     @ProdcutPrice @cart @ui
  Scenario: Validate product price on products page
    Given I open the login page
    When I enter valid 'standard_user' and 'secret_sauce'
    And I click the login button
    # And Click on add to cart button
    Then Verify price '49.99' of the product 'Sauce Labs Fleece Jacket'