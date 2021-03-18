import {Selector} from 'testcafe'
import {get_random} from '../utils'


class InventoryPage {

    constructor (){
        // ProductPage elements
        this.inventoryContainer = Selector('.inventory_container');
        this.inventoryItems = Selector('.inventory_item')
            .addCustomMethods({   
                // Returns a CartButton, relative to an inventory item.
                getCartButton: (element, index) => {
                    return element[0].querySelector('.btn_inventory');
                }
            },{
                returnDOMNodes: true
            })
            .addCustomMethods({   
                // Returns the product's name
                getProductTitle: (element, index) => {
                    return element.querySelector('.inventory_item_name').innerText;
                },
                // Returns the product's price
                getProductPrice: (element, index) => {
                    
                    return parseFloat(element.querySelector('.inventory_item_price').innerText.replace("$", "").trim());
                },
                // Returns a boolean value that represents if the element has already been added to the cart else False.
                getIsItemAdded: (element, index) => {
                    return element.querySelector('.btn_primary.btn_inventory') === null;
                },
                
            });
    }

    async selectUniqueElements(selectNelements){
        //Given an integer `selectNelements`
        // Select N unique items where N equals `selectNelements`
        // Build an array of all possible indexes (inventoryItems)
        let inventoryItemsIndex = [...Array(await this.inventoryItems.count).keys()];
        let randomSelectedItems = [];
        
        for(let i=0; i < selectNelements; i++)
        {
            // Select a random prod and pop it from the available items.
            let randomSelected = inventoryItemsIndex.splice(
                get_random(0, inventoryItemsIndex.length-1), 1
            )[0]
            // Push the popped item to the array of selected items
            const randomItem = await this.inventoryItems.nth(randomSelected);
            // Save product data to use in tests.
            // TODO: add serializer method.
            randomSelectedItems.push(
                {
                    "index": randomSelected,
                    "title": await randomItem.getProductTitle(),
                    "price": await randomItem.getProductPrice()
                }
            );
        }    
        return randomSelectedItems;
    }
}

export default new InventoryPage();