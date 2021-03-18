import InventoryPage from '../pages/inventory'
import HeaderPage from '../pages/header'
import CartPage from '../pages/cart'
import {standardUser} from '../roles'
import {get_random} from '../utils'


fixture('Add to cart feature testing')
    .beforeEach( async t => {
        await t
            .useRole(standardUser)
    })


test
.meta('testID', 't-0004')
('Navitage to the shopping cart', async t => {
    await t
        .expect(InventoryPage.inventoryContainer.exists).ok()
        .click(HeaderPage.cartButton)
        .expect(CartPage.cartContentsContainer.exists).ok();

});


test
.meta('testID', 't-0005')
('Add a product item to the cart', async t => {

    await t
        .expect(InventoryPage.inventoryContainer.exists).ok()
    const totalInventoryProducts = await InventoryPage.inventoryItems.count;
    // Expects the inventory page to contain at least 1 product
    await t.expect(totalInventoryProducts).gt(0);
    // Select a random product.
    let randomItem = await InventoryPage.selectUniqueElements(1);
    randomItem = randomItem[0];
    
    // Add the product by clicking on the item's add to cart button.
    // Expect the cart badge to equal 1.
    await t
        .click(InventoryPage.inventoryItems.nth(randomItem["index"]).getCartButton())
        .expect(HeaderPage.cartButton.getCartQty()).eql(1);
    await t
        .click(HeaderPage.cartButton)
        .expect(CartPage.cartContentsContainer.exists).ok()
        .expect(CartPage.cartItems.count).eql(1);
    const cartPageItem = await CartPage.cartItems.nth(0);
    await t
        .expect(await cartPageItem.getProductTitle()).eql(randomItem["title"])
        .expect(await cartPageItem.getProductPrice()).eql(randomItem["price"]);
});


test
.meta('testID', 't-0006')
('Add multiple product items to the cart', async t => {

    await t.expect(InventoryPage.inventoryContainer.exists).ok();
    const totalInventoryProducts = await InventoryPage.inventoryItems.count;
    // Expects the inventory page to contain at least 2 products
    await t.expect(totalInventoryProducts).gt(1);
    // Select N random items between 2 or the total items in the page.
    const selectNelements = get_random(2, totalInventoryProducts);
    // Choose N random unique items from the ones available in the page.
    const randomSelectedItems = await InventoryPage.selectUniqueElements(selectNelements);
    // Add all items to the cart.
    for (const element of randomSelectedItems) {
        await t.click(InventoryPage.inventoryItems.nth(element["index"]).getCartButton())
    }
    // Expect the cart badge to equal the same number of products to be added.
    await t
        .expect(HeaderPage.cartButton.getCartQty()).eql(randomSelectedItems.length)
    // Proceed to cart page and validate the number of items in the cart.
    await t
        .click(HeaderPage.cartButton)
        .expect(CartPage.cartContentsContainer.exists).ok()
        .expect(CartPage.cartItems.count).eql(randomSelectedItems.length);
    // Validate that each of the added products are in the cart and with the expected values.
    for(let i=0; i < randomSelectedItems.length; i++)
    {
        const cartItem = await CartPage.cartItems.nth(i);
        await t
            .expect(await cartItem.getProductTitle()).eql(randomSelectedItems[i]["title"])
            .expect(await cartItem.getProductPrice()).eql(randomSelectedItems[i]["price"])
    }
});


