import { test, expect } from '@playwright/test';

test.beforeEach( async({page}) => {
  await page.goto('/')
})

test('Update Pet Type', async ({page}) => {
  await expect(page.locator('.title')).toHaveText('Welcome to Petclinic')
  // select pet types menu item
  await page.getByText('Pet Types').click()
  // add assertion of 'Pet types' text displaying
  await expect(page.getByRole('heading')).toHaveText('Pet Types')
  // find and click on cat edit button = used Xpath
  await page.getByRole('row', { name: 'cat' }).getByRole('button', { name: 'Edit' }).click()
  //Assert 'edit pet type' is displayed
  await expect(page.getByRole('heading')).toHaveText('Edit Pet Type')
  // change pet type name to rabbit
  await expect(page.getByRole('textbox')).toHaveValue('cat')
  await page.getByRole('textbox').fill('rabbit')
  // click on 'update' button
  await page.getByText('Update').click()
  // add assertion that first pet type is 'rabbit'
  await expect(page.locator('[id="0"]')).toHaveValue('rabbit')
  // click on edit button for same "rabbit" pet type 
  await page.getByRole('row', { name: 'rabbit' }).getByRole('button', { name: 'Edit' }).click()
  // and change name from rabbit back to cat
  await expect(page.getByRole('textbox')).toHaveValue('rabbit')
  await page.getByRole('textbox').fill('cat')
  await page.getByText('Update').click()
  // add assertion that first pet type has value of 'cat'
  await expect(page.locator('[id="0"]')).toHaveValue('cat')
})

