import {Selector, t} from 'testcafe'

class HeaderPage {

    constructor (){

        // Header Elements:
        this.menuButton = Selector('#react-burger-menu-btn');
        this.logoutLink = Selector('#logout_sidebar_link');
        this.cartButton = Selector('.shopping_cart_link').addCustomMethods({   
            // Returns the quantity of products added to the cart.
            //  Displayed in the shopping cart badge element
            getCartQty: (element, index) => {
                const shopping_cart_badge = element.querySelector('.shopping_cart_badge');
                return (shopping_cart_badge === null) ? 0 : parseInt(shopping_cart_badge.innerText);
            }
        });
    }

    async logout(){
        await t
            .click(this.menuButton)
            .click(this.logoutLink);
    }
}

export default new HeaderPage();