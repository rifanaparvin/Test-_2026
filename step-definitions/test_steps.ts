import { Given,When,Then } from "@cucumber/cucumber";
import { Login } from "../s/Login";
import{} from "./hooks"

let login :Login;

Given('Launch Application', async function () {
    login = new Login();
    await login.navigate();
    console.log("Launch")
   
});

When('Enter the username {string} and password {string}', async function (user, pass) {
    await login.login(user,pass);
});

When('Click the login button', async function () {
    await login.loginButton();
});

Then('Validate the Home', async function () {
   await console.log("home ")
});