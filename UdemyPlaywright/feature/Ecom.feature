Feature: Place Order Functionality

  Scenario: User logs in and places an order successfully
    Given the user login with valid credentials
    When the user searches and adds product to cart
    And proceeds to checkout and submits the order
    Then the order should be placed successfully
    And the order should appear in order history