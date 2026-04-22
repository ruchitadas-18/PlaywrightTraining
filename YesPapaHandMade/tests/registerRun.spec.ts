import { test } from '../utils/objectFixture';
import UserInput from '../utils/UserInput.json';
import Login from '../pages/login'

test.only('RegisterUser', async ({ register }) => {
  //Navigating to registration page
  await register.navigateToPage(UserInput.urls.myAccount);
  
  //Filling the registration details
  await register.fillRegistrationDetails();
  await register.verifyRegistrationSuccess();
});


test('LoginUser', async ({ login }) => {

  //Navigating to login page
  await login.navigateToPage(UserInput.urls.myAccount);
  const user = Login.getUserById(UserInput.login['second user']);
  //Filling the login details
  await login.fillLoginDetails(user);
  await login.verifyLoginSuccess(user);
});
