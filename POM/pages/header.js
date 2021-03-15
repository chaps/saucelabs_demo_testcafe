import {Selector} from 'testcafe'

class HeaderPage {

    constructor (){

        // Header Elements:
        this.menuButton = Selector('#react-burger-menu-btn');
        this.logoutLink = Selector('#logout_sidebar_link');
        this.cartButton = Selector('.shopping_cart_link');
    }
}