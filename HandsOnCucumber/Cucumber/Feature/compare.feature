Feature: Compare Two Products
    Scenario: Compare two products and verify the comparison page
        Given I am on the homepage
        When I navigate to category 'Electronics'
        And I add the first product to the comparison list '14.1-inch Laptop'
        Then Click on add to compare button
        And I add the second product to the comparison list 'Build your own cheap computer'
        And Click on add to compare button
        Then I should see both products listed for comparison
        And I should see the specifications of both products side by side
        Then select the cheaper product for purchase