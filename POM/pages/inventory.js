import {Selector} from 'testcafe'

class InventoryPage {

    constructor (){
        // ProductPage elements
        this.productLabel = Selector('#react-burger-menu-btn');
        this.inventoryItems = Selector('.inventory_item');
    }
}
