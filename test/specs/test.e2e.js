import 'dotenv/config'
import { browser } from '@wdio/globals'
import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'


describe('My Login application', () => {
    it('should be able to login using Standard User', async () => {
        await LoginPage.open()
        console.log('username env - '+process.env.STANDARDUSER);
        await LoginPage.login(process.env.STANDARDUSER, process.env.PASSWORD) 
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')                   
    })

    it('should be able to login using performance glitch User', async () => {
        await LoginPage.open()
        await LoginPage.login(process.env.PERFORMANCEGLITCHUSER, process.env.PASSWORD)
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
                     
    })
    it('should not login using invalid user', async () => {
        await LoginPage.open()        
        await LoginPage.login('invaliduser', process.env.PASSWORD)
        await expect(LoginPage.errorMessage).toHaveText('Epic sadface: Username and password do not match any user in this service')               
    })
})

