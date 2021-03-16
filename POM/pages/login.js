import {Selector} from 'testcafe'

class LoginPage {

    constructor (){

        // Login Form:
        this.usernameField = Selector('#user-name');
        this.passwordField = Selector('#password');
        this.loginButton = Selector("#login-button");
        
        // Error button displayed on login errors.
        this.errorButton = Selector('.error-button');
    }
}