import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect } from '@wdio/globals'
import testForm from '../pageobjects/form.page'


Given(/^I am on the practice page/, async function () {
    await browser.url(testForm.formUrl);
    await browser.maximizeWindow()
});

Then(/^I validate page (.*)$/, async function (headertext: string) {
    await expect(await testForm.headerMain).toHaveText(headertext);
});

When(/^I enter full name (.*)$/, async function (name: string) {
    await testForm.enterName(name);
});

When(/^I enter email (.*)$/, async function (email: string) {
    await testForm.enterEmail(email);
});

When(/^I enter phonenumber (.*)$/, async function (phonenumber: number) {
    await testForm.enterPhoneNum(phonenumber)
});

When(/^I select gender (.*)$/, async function (gender: string) {
    await testForm.genderChooseIcon;
    await browser.pause(3000);
    await testForm.genderDropDownitem(gender);

});

When(/^I select years of experience (.*)$/, async function (experience: string) {
    await testForm.selectItem(await testForm.experienceYears, experience);
});

When(/^I select skills (.*)$/, async function (skills: string) {
    await testForm.selectItem(await testForm.skillsCheckBox, skills);
});

When(/^I select tools (.*)$/, async function (tools: string) {
    await testForm.qaToolsDropDown;
    await browser.pause(3000);
    await testForm.qaToolsDropDownitem(tools);
});

When(/^I click on submit button/, async function () {
    await testForm.submitClick();
    await browser.pause(5000)
});

Then(/^I validate result page header (.*)$/, async function (resultPageHeader: string) {
    await (await testForm.resultHeader).waitForDisplayed();
    await expect(await testForm.resultHeader).toHaveText(resultPageHeader);
    await browser.pause(3000);
});