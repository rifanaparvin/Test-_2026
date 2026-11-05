import {} from "playwright";

export class Login{

constructor(private :){};
async navigate(){
    await this..goto("https://adactinhotelapp.com/");

}

async login(user:string, pass:string){
await this..locator("#username").fill(user);
await this..locator("#password").fill(pass);
}

async loginButton(){
    await this..locator('#login').click();
}


}