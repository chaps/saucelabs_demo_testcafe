import {Selector, t} from 'testcafe'

class CheckoutInformationPage {

    constructor (){
        this.checkoutInfoContainer = Selector('#checkout_info_container');

        this.firstNameField = Selector('#first-name');
        this.lastNameField = Selector('#last-name');
        this.zipCodeField = Selector('#postal-code');
        
        this.cartCancelButton = Selector('.cart_cancel_link');
        this.continueButton = Selector('.cart_button');

        this.errorButton = Selector('.error-button');
    }

    //PAGE METHOD Reference:
    // https://devexpress.github.io/testcafe/documentation/guides/concepts/page-model.html#step-7---add-actions-to-the-page-model
    async do_info_form(firstName, lastName, zipCode){
        if (firstName){
            await t.typeText(this.firstNameField, firstName);
        }
        if (lastName){
            await t.typeText(this.lastNameField, lastName);
        }
        if (zipCode){
            await t.typeText(this.zipCodeField, zipCode)
        }   
        await t.click(this.continueButton);
    }
}

export default new CheckoutInformationPage();
