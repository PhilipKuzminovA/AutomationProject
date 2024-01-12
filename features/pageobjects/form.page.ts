import Page from "./page";

class testForm extends Page {
    get formUrl() { return "https://qavalidation.com/demo-form/?contact-form-hash=875a4285a37d67e2416c29f39cb2425c0d8d255c" }
    get headerMain() { return $('//h1') }
    get nameInput() { return $('//*[@id="g4072-fullname"]') }
    get emailInput() { return $('//*[@id="g4072-email"]') }
    get phoneInput() { return $('//*[@id="g4072-phonenumber"]') }
    get genderChooseIcon() { return $('//*[@id="g4072-gender-button"]').click() }
    get experienceYears() { return $$('//*[@class="radio  grunion-field"]') }
    get skillsCheckBox() { return $$('//*[@class="checkbox-multiple  grunion-field"]') }
    get qaToolsDropDown() { return $('//*[@id="g4072-qatools-button"]/span[contains(@class, "ui-icon")]').click() }
    get submitButton() { return $('//*[@class="wp-block-jetpack-button wp-block-button"]/button') }
    get resultHeader() { return $('//h4[@id="contact-form-success-header"]') }

    async enterName(firstName: string) {
        await (await this.nameInput).setValue(firstName)
    }

    async enterEmail(email: string) {
        await (await this.emailInput).setValue(email)
    }

    async enterPhoneNum(phoneNum: number) {
        await (await this.phoneInput).setValue(phoneNum)
    }

    async submitClick() {
        await (await this.submitButton).click()
    }

    async genderDropDownitem(value: string) {
        const genderChoose = $(`//*[@class="ui-menu-item"]/div[text()='${value}']`)
        return genderChoose.click();
    }

    async qaToolsDropDownitem(value: string) {
        const qaToolsItem = $(`//*[@id="g4072-qatools-menu"]/li/div[text()='${value}']`);
        return qaToolsItem.click();
    }

    async selectItem(elementLocator: WebdriverIO.ElementArray, value: string) {
        for (let i = 0; i < elementLocator.length; i++) {
            const element = await (elementLocator[i]).getAttribute('value');
            if (element === value) {
                await (elementLocator[i]).click()
                break;
            }
        }
    }
}
export default new testForm()