import { test } from '@playwright/test';
import ClassFixture from '../utils/ClassFixture';

test('RegisterUser', async ({ page }) => {
  const classFixture = new ClassFixture(page);
  const register = await classFixture.createRegisterInstance();

  //Navigating to registration page
  await register.navigateToPage('my-account/');
  
  //Filling the registration details
  await register.fillRegistrationDetails();
  await register.verifyRegistrationSuccess();
});

test.only('LoginUser', async ({ page }) => {
  const classFixture = new ClassFixture(page);
  const login = await classFixture.createLoginInstance();

  //Navigating to login page
  await login.navigateToPage('my-account/');
  
  //Filling the login details
  await login.fillLoginDetails();
  await login.verifyLoginSuccess();
});
