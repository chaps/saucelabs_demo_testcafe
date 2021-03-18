import {Selector, t} from 'testcafe'

class LoginPage {

    constructor (){

        // Login Form:
        this.usernameField = Selector('#user-name');
        this.passwordField = Selector('#password');
        this.loginButton = Selector("#login-button");
        
        // Error button displayed on login errors.
        this.errorButton = Selector('.error-button');
    }

    //Reference:
    // https://devexpress.github.io/testcafe/documentation/guides/concepts/page-model.html#step-7---add-actions-to-the-page-model
    async do_login(username, password){
        await t
            .typeText(this.usernameField, username)
            .typeText(this.passwordField, password)
            .click(this.loginButton);
    }
}

export default new LoginPage();