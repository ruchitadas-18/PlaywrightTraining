Feature: Add To Cart

  Scenario: User adds a product  to the cart
    Given the user is on the product page
    When the user clicks on the "Add to Cart" button
    Then the product should be added to the cart
    When the user click on product 
    Then the product details should be displayed
    When clicking on add to cart
    Then the cart alert should appear
    When clicking on shopping cart should move to cart
    Then cart should contain the product