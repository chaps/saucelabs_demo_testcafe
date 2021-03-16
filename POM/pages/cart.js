import {Selector} from 'testcafe'

class CartPage {

    constructor (){
        this.cartContentsContainer = Selector('#cart_contents_container');

        this.cartItems = Selector('.cart_item');
        this.continueShoppingButton = Selector('.cart_footer .btn_secondary');
        this.checkoutButton = Selector('.checkout_button');
    }
}