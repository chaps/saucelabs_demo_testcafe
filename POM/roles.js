import { Role } from 'testcafe';
import {SUT_URL, CREDENTIALS} from './data/constants';
import LoginPage from './pages/login';

// Roles reference:
//  https://devexpress.github.io/testcafe/documentation/guides/advanced-guides/authentication.html#create-and-apply-roles

export const standardUser = Role(SUT_URL, async t => {
    await LoginPage.do_login(
        CREDENTIALS["STANDARD_USER"]["USERNAME"],
        CREDENTIALS["STANDARD_USER"]["PASSWORD"]
    )
}, { preserveUrl: true });

export const invalidUser = Role(SUT_URL, async t => {
    await LoginPage.do_login(
        CREDENTIALS["INVALID_USER"]["USERNAME"],
        CREDENTIALS["INVALID_USER"]["PASSWORD"]
    );
}, { preserveUrl: true });

export const admin = Role(SUT_URL, async t => {
    await LoginPage.login(
        CREDENTIALS["STANDARD_USER"]["USERNAME"],
        CREDENTIALS["STANDARD_USER"]["PASSWORD"]
    )
});

