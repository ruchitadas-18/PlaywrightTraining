Feature: Register User

Scenario: Successfully register a new user
  Given user is on the registration page
  When user fill in the  enter personal details "Mabel","NewAuto", "yipafex639@fentaoba.com", "Mabel#New24"
  And user select the gender "Female"
  Then user click on the register button
  Then user should able to continue to the next page