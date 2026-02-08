async function login(page) {
  await page.goto('https://www.saucedemo.com/');

  const userList = await page.locator('#login_credentials').innerText();
  const userName = userList
    .split('\n')
    .map(t => t.trim())
    .find(t => t.includes('error'));

  const passwordText = await page.locator('.login_password').innerText();
  const password = passwordText
    .split('\n')
    .map(t => t.trim())
    .find(t => t.includes('sauce'));

  await page.getByPlaceholder('Username').fill(userName);
  await page.getByPlaceholder('Password').fill(password);
  await page.getByRole('button', { name: 'Login' }).click();
}

module.exports = { login };
