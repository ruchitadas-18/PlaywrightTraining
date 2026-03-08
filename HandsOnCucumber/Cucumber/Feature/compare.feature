Feature: Compare Two Products
    Scenario: Reach to compare Product page 
        Given user is on the homepage 
        When user navigate to category 'Apparel & Shoes '
        When user add the first product to the comparison list 'Denim Short with Rhinestones'
        Then Click on add to compare button for the first product
        Then user add the second product to the comparison list 'Custom T-Shirt'
        Then Click on add to compare button for the second product
        Then user should see both products listed for comparison

    Scenario: Verify the specifications of both products side by side
        Given user is on the compare product page
        When user compare the specifications of both products
        Then user prints the product name and verify the names 
        Then user compares the prices of both products
        Then user remove the product with higher priced product
        Then user prints the removed product name
        