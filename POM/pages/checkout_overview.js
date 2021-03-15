import {Selector} from 'testcafe'

class CheckoutOverviewPage {

    constructor (){
        this.checkoutSummaryContainer = Selector('#checkout_summary_container');

        this.cartItems = Selector('.cart_item');
        this.cancelButton = Selector('.cart_cancel_link');
        this.finishButton = Selector('.cart_button');
    }
}