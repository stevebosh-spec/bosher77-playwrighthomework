import { test, expect } from '@playwright/test';

test.beforeEach( async({page}) => {
  await page.goto('/')
})

test('Update Pet Type', async ({page}) => {
  await expect(page.locator('.title')).toHaveText('Welcome to Petclinic')
  // select pet types menu item
  await page.getByText('Pet Types').click()
  // add assertion of 'Pet types' text displaying
  await page.locator('_ngcontent-ng-c910900098').locator(':text-is("Pet Types")')
  // find and click on cat edit button = used Xpath
  await page.locator('//*[@id="pettypes"]/tbody/tr[1]/td[2]/button[1]').click()
  //Assert 'edit pet type' is displayed
  await page.locator('_ngcontent-ng-c910900098').locator(':text-is("Edit Pet Type")')
  // change pet type name to rabbit
  await page.locator('//*[@id="name"]').click()
  // fill with 'rabbit'
  await page.locator('//*[@id="name"]').fill('rabbit')
  // click on 'update' button
  await page.getByText('Update').click()
  // add assertion that first pet type has 'Rabbit'
  await page.locator('_ngcontent-ng-c910900098').locator(':text-is("rabbit")')
  // click on edit button for same "rabbit" pet type and change name from rabbot back to cat
  await page.locator('//*[@id="pettypes"]/tbody/tr[1]/td[2]/button[1]').click()
  await page.locator('//*[@id="name"]').click()
  await page.locator('//*[@id="name"]').fill('cat')
  await page.getByText('Update').click()
  // add assertion that first pet type has value of 'cat'
  await page.locator('_ngcontent-ng-c910900098').locator(':text-is("cat")')
})

