import {Selector} from 'testcafe'

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
}