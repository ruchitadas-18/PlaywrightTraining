Feature: Login Functionality

  Scenario: Successful Login
    Given I am on the login page
    When I enter valid credentials 'fayin25824@bultoc.com' and 'Mabel#New24'
    Then I should be redirected to the dashboard

  