
# Testcafe Demo 
## Implements web E2E test cases for: https://www.saucedemo.com/


## Instructions:
- Clone the repo:
`git clone git@github.com:chaps/saucelabs_demo_testcafe.git`
- Move into the root of the project's directory e.g.:
`cd saucelabs_demo_testcafe`
- install the project's dependencies:
`npm install .`
- Copy and fill the env variables for the project:
`cp .env.template .env`
- Fill the required variables from the .env file (Credentials are available at: https://www.saucedemo.com/)
- run tests directly through testcafe:
`testcafe POM/tests`
- OR run tests through npm:
`npm run test_chrome`
- Run tests in all browsers throguh testcafe's all:
`npm run test_all` or `testcafe all POM/tests`

## Implemented test cases:
`npm install testcafe-reporter-spec`


### Run particular test cases by test ID example:
`testcafe chrome POM/tests --test-meta testID=test-0001`

### Available test cases:
`
testcafe chrome POM/tests --test-meta testID=test-0001
...
testcafe chrome POM/tests --test-meta testID=test-0010
`

### Run tests across all browsers:
`testcafe all POM/tests`
This will run tests across all browsers installed in your system.
The output header for the test execution will include the detected browsers:
```
➜  testcafe all POM/tests
Using locally installed version of TestCafe.
 Running tests in:
 - Firefox 84.0 / macOS 10.15
 - Microsoft Edge 89.0.774.54 / macOS 10.15.6
 - Chrome 89.0.4389.82 / macOS 10.15.6
 - Safari 13.1.2 / macOS 10.15.6

 ...
 ```


 ### Troubleshooting:
Env vars for CREDENTIALS are missing.
Copy the contents from .env.template into a file named .env
and fill out the respective variables values in the file.
 ```
 ✖ Login with a valid user

   1) - Error in Role initializer -
      The "text" argument is expected to be a non-empty string, but it was "".

         15 |
         16 |    //Reference:
         17 |    // https://devexpress.github.io/testcafe/documentation/guides/concepts/page-model.html#step-7---add-actions-to-the-page-model
         18 |    async do_login(username, password){
         19 |        await t
       > 20 |            .typeText(this.usernameField, username)
         21 |            .typeText(this.passwordField, password)
         22 |            .click(this.loginButton);
         23 |    }
         24 |}
         25 |
 ```