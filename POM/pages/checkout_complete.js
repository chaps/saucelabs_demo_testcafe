import {Selector} from 'testcafe'

class CheckoutCompletePage {

    constructor (){
        this.checkoutCompleteContainer = Selector('#checkout_complete_container');
    }
}

export default new CheckoutCompletePage();