Feature: Validate Add to card functionality on product page

   @ui @verifyLogo
Scenario: Verify logo swagAlb logo on products page
    Given I open the login page
    When I enter valid 'standard_user' and 'secret_sauce'
    And I click the login button
    Then Verify 'Swag Labs' text present in swaglab logo

   @ui @cart 
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


     @ui @cart 
  Scenario: Validate remove product from cart functionality
    Given I open the login page
    When I enter valid 'standard_user' and 'secret_sauce'
    And I click the login button
    And Click on add to cart button
    And Click on add to cart button
    And Click on add to cart button
    And Click on Remove button to remove product from cart
    Then Verify no of products '2' added in the cart


    @ui @cart @ProdcutPrice 
  Scenario: Validate product price on products page
    Given I open the login page
    When I enter valid 'standard_user' and 'secret_sauce'
    And I click the login button
    Then Verify price '49.99' of the product 'Sauce Labs Fleece Jacket'


    @ui @cart @logout
     Scenario: Verify logout feature on products page
     Given I open the login page
    When I enter valid 'standard_user' and 'secret_sauce'
    And I click the login button
    And Click on Hamburger button on product page
    And Click on logout link on product page
    Then Verify user logged out

    @ui @cart @MyCart
    Scenario: Verify no of products added in car should be available on my cart page
    Given I open the login page
    When I enter valid 'standard_user' and 'secret_sauce'
    And I click the login button
    And Click on add to cart button
    And Click on add to cart button
    And Click on cart icon 
    Then Verify No of products on my cart page is '2'


      @ui @cart @MyCart @removeProduct
      Scenario: Verify Remove product fuctionality on my car page
    Given I open the login page
    When I enter valid 'standard_user' and 'secret_sauce'
    And I click the login button
    And Click on add to cart button
    And Click on add to cart button
    And Click on cart icon 
    Then Verify No of products on my cart page is '2'
    And Click on remove button on my cart page
    Then Verify No of products on my cart page is '1'