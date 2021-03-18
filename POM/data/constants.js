import dotenv from 'dotenv'
dotenv.config()

//Site Under Test URL
// TODO: Use ENV VAR for SUT_URL and current URL as default if ENV VAR is not set.
export const SUT_URL = 'https://www.saucedemo.com/';


export const CREDENTIALS = {
    "STANDARD_USER": {
        "USERNAME": process.env.SAUCELABS_DEMO_STANDARD_USER,
        "PASSWORD": process.env.SAUCELABS_DEMO_STANDARD_PASSWORD
    },
    "LOCKED_OUT_USER": {
        "USERNAME": process.env.SAUCELABS_DEMO_LOCKEDOUT_USER,
        "PASSWORD": process.env.SAUCELABS_DEMO_STANDARD_PASSWORD
    },
    "PROBLEM_USER": {
        "USERNAME": process.env.SAUCELABS_DEMO_PROBLEM_USER,
        "PASSWORD": process.env.SAUCELABS_DEMO_STANDARD_PASSWORD
    },
    "PERFORMANCE_GLITCH_USER": {
        "USERNAME": process.env.SAUCELABS_DEMO_PERFORMANCE_GLITCH_USER,
        "PASSWORD": process.env.SAUCELABS_DEMO_STANDARD_PASSWORD
    },
    "INVALID_USER": {
        "USERNAME": "invalid_user",
        "PASSWORD": "invalid_password"
    },
};

export const USER_DATA = {
    "FIRSTNAME": "USERFIRSTNAME",
    "LASTNAME": "USERLASTNAME",
    "ZIPCODE": "12345",
}