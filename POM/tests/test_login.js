import {SUT_URL, CREDENTIALS} from '../data/constants'
import InventoryPage from '../pages/inventory'
import HeaderPage from '../pages/header'
import {standardUser, invalidUser} from '../roles'
import LoginPage from '../pages/login'

fixture('Login feature testing')
    .beforeEach( async t => {
        
    })

test
.meta('testID', 't-0001')
('Login with a valid user', async t => {
    await t
        .useRole(standardUser)
        .expect(InventoryPage.inventoryContainer.exists).ok();
});


test
.page (SUT_URL)
.meta('testID', 't-0002')
('Login with an invalid user', async t => {
    await LoginPage.do_login(
        CREDENTIALS["INVALID_USER"]["USERNAME"],
        CREDENTIALS["INVALID_USER"]["PASSWORD"]
    );
    await t
        .expect(LoginPage.errorButton.exists).ok()
});


test
.meta('testID', 't-0003')
('Logout from product page', async t => {
    await t
        .useRole(standardUser)
        .expect(InventoryPage.inventoryContainer.exists).ok();
    await HeaderPage.logout()
    await t.expect(LoginPage.usernameField.exists).ok();
})
