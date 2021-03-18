import {Selector} from 'testcafe'

class CheckoutOverviewPage {

    constructor (){
        this.checkoutSummaryContainer = Selector('#checkout_summary_container');

        this.cartItems = Selector('.cart_item')
        .addCustomMethods({   
            getRemoveButton: (element, index) => {
                return element[0].querySelector('.cart_button');
            }
        },{
            returnDOMNodes: true
        })
        .addCustomMethods({   
            getProductTitle: (element, index) => {
                // Returns the product's name
                return element.querySelector('.inventory_item_name').innerText;
            },
            getProductPrice: (element, index) => {
                // Returns the product's price
                return parseFloat(element.querySelector('.inventory_item_price').innerText.replace("$", "").trim());
            }
        });
        this.cancelButton = Selector('.cart_cancel_link');
        this.finishButton = Selector('.cart_button');
    }
}


export default new CheckoutOverviewPage();