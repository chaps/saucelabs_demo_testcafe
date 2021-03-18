import InventoryPage from '../pages/inventory'
import HeaderPage from '../pages/header'
import CartPage from '../pages/cart'
import CheckoutInformationPage from '../pages/checkout_information'
import CheckoutOverview from '../pages/checkout_overview'
import CheckoutCompletePage from '../pages/checkout_complete'
import {standardUser} from '../roles'
import {get_random} from '../utils'
import {USER_DATA} from '../data/constants'


fixture('Checkout feature testing')
    .beforeEach( async t => {
        await t
            .useRole(standardUser)
    })


test
.meta('testID', 't-0007')
('Continue with missing mail information', async t => {

    await t.expect(InventoryPage.inventoryContainer.exists).ok();
    const totalInventoryProducts = await InventoryPage.inventoryItems.count;
    // Expects the inventory page to contain at least 1 product
    await t.expect(totalInventoryProducts).gt(0);
    // Select a random product.
    const randomInventoryItemIndex = get_random(0, totalInventoryProducts-1);
    const randomItem = await InventoryPage.inventoryItems.nth(randomInventoryItemIndex);
    // Add the product by clicking on the item's add to cart button.
    // and Expect the cart badge to equal 1.
    await t
        .click(randomItem.getCartButton())
    await t
        .click(HeaderPage.cartButton)
        .expect(CartPage.cartContentsContainer.exists).ok()
    await t
        .click(CartPage.checkoutButton);
    await CheckoutInformationPage.do_info_form(
        USER_DATA["FIRSTNAME"], USER_DATA["LASTNAME"], ""
    )
    await t
        .expect(CheckoutInformationPage.errorButton.exists).ok()
});


test
.meta('testID', 't-0008')
('Fill User\'s information', async t => {
    await t
        .expect(InventoryPage.inventoryContainer.exists).ok();
    const totalInventoryProducts = await InventoryPage.inventoryItems.count;
    // Expects the inventory page to contain at least 1 product
    await t
        .expect(totalInventoryProducts).gt(0);
    // Select a random product.
    const randomInventoryItemIndex = get_random(0, totalInventoryProducts-1)
    const randomItem = await InventoryPage.inventoryItems.nth(randomInventoryItemIndex);
    // Add the product by clicking on the item's add to cart button.
    //  and Expect the cart badge to equal 1.
    await t
        .click(randomItem.getCartButton())
        .click(HeaderPage.cartButton)
        .expect(CartPage.cartContentsContainer.exists).ok()
        .click(CartPage.checkoutButton);
    await CheckoutInformationPage.do_info_form(
        USER_DATA["FIRSTNAME"], USER_DATA["LASTNAME"], USER_DATA["ZIPCODE"]
    )
    await t
        .expect(CheckoutOverview.checkoutSummaryContainer.exists).ok()
});



test
.meta('testID', 't-0009')
('Final Order Items', async t => {
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
    await t.expect(HeaderPage.cartButton.getCartQty()).eql(randomSelectedItems.length);
    await t.click(HeaderPage.cartButton);
    await t
        .expect(CartPage.cartContentsContainer.exists).ok()
        .expect(CartPage.cartItems.count).eql(randomSelectedItems.length);
    // Validate 
    for(let i=0; i < randomSelectedItems.length; i++)
    {
        const cartItem = await CartPage.cartItems.nth(i);
        await t
            .expect(await cartItem.getProductTitle()).eql(randomSelectedItems[i]["title"])
            .expect(await cartItem.getProductPrice()).eql(randomSelectedItems[i]["price"])
    }
    await t.click(CartPage.checkoutButton);
    await CheckoutInformationPage.do_info_form(
        USER_DATA["FIRSTNAME"], USER_DATA["LASTNAME"], USER_DATA["ZIPCODE"]
    )
    await t.expect(CheckoutOverview.checkoutSummaryContainer.exists).ok()
    for(let i=0; i < randomSelectedItems.length; i++)
    {
        const cartItem = await CheckoutOverview.cartItems.nth(i);
        await t
            .expect(await cartItem.getProductTitle()).eql(randomSelectedItems[i]["title"])
            .expect(await cartItem.getProductPrice()).eql(randomSelectedItems[i]["price"])
    }
});

test
.meta('testID', 't-0010')
('Complete a purchase', async t => {
    
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
        await t
            .click(InventoryPage.inventoryItems.nth(element["index"]).getCartButton())
    }
    await t
        .click(HeaderPage.cartButton)
        .expect(CartPage.cartContentsContainer.exists).ok()
        .expect(CartPage.cartItems.count).eql(randomSelectedItems.length)
        .click(CartPage.checkoutButton);
    await CheckoutInformationPage.do_info_form(
        USER_DATA["FIRSTNAME"], USER_DATA["LASTNAME"], USER_DATA["ZIPCODE"]
    )
    await t
        .expect(CheckoutOverview.checkoutSummaryContainer.exists).ok()
        .click(CheckoutOverview.finishButton)
        .expect(CheckoutCompletePage.checkoutCompleteContainer.exists).ok()
});

