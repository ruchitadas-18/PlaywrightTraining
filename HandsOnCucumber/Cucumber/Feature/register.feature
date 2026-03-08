Feature: Register User

Scenario: Successfully register a new user
  Given user is on the registration page
  When user fill in the enter personal details "Mabel","NewAuto", "fay4@bultoc.com", "Mabel#New24"
  And user select the gender "Female"
  Then user click on the register button