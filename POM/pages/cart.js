import {Selector} from 'testcafe'

class CartPage {

    constructor (){
        this.cartContentsContainer = Selector('#cart_contents_container');

        this.continueShoppingButton = Selector('.cart_footer .btn_secondary');
        this.checkoutButton = Selector('.checkout_button');

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
    }
}

export default new CartPage();
