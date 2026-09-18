Feature: products feature

 @ui @products @sortDD
  Scenario: Validate list of sorting options
    Given I open the login page
    When I enter valid 'standard_user' and 'secret_sauce'
    And I click the login button
    And Click on sort dropdown list
    Then Verify below options are presnet in sort drop down list:
     | sortOptions    | 
     | Name (A to Z)  | 
     | Name (Z to A)   | 
     | Price (low to high) | 
     | Price (high to low) |
   And Click on Hamburger button on product page
   And Click on add to cart button