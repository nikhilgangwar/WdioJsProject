import 'dotenv/config'
import { faker } from '@faker-js/faker';
import { browser } from '@wdio/globals'
import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import InventoryPage from '../pageobjects/inventory.page.js'
import CartPage from '../pageobjects/cart.page.js'
import CheckoutPage from '../pageobjects/checkout.page.js'

describe('My Login application', () => {
    it('should be able to login using Standard User', async () => {
        await LoginPage.open()
        await LoginPage.login(process.env.STANDARDUSER, process.env.PASSWORD)
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')    
        await expect(InventoryPage.LinkSauceLabsBackpack).toHaveText('Sauce Labs Backpack')               
    })
    it('should be able to login using performance glitch User', async () => {
        await LoginPage.open()
        await LoginPage.login(process.env.PERFORMANCEGLITCHUSER, process.env.PASSWORD)
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')    
        await expect(InventoryPage.LinkSauceLabsBackpack).toHaveText('Sauce Labs Backpack')               
    })
    it('should not login using invalid user', async () => {
        await LoginPage.open()        
        await LoginPage.login('invaliduser', process.env.PASSWORD)
        await expect(LoginPage.errorMessage).toHaveText('Epic sadface: Username and password do not match any user in this service')               
    })

})

describe('End to End Login, Add Product and Place an order flow', () => {
    it('should be able to place an order using standard user', async () => {
        await LoginPage.open()
        await LoginPage.login(process.env.STANDARDUSER, process.env.PASSWORD)
          await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')    
        await expect(InventoryPage.LinkSauceLabsBackpack).toHaveText('Sauce Labs Backpack')
        await InventoryPage.btnSauceLabsBackpackAddtoCart.click()
        await InventoryPage.btnSauceLabsFleeceJacketAddtoCart.click()        
        await CartPage.goToShoppingCart()
        await CartPage.proceedToCheckout()
  
        const firstName = faker.person.firstName()
        const lastname = faker.person.lastName()
        const postCode = faker.address.zipCode('####') // '6925'
        await CheckoutPage.UserInfromation(firstName, lastname,postCode)
        await CheckoutPage.btnFinish.click()
        await expect(CheckoutPage.btnBackHome).toHaveText('Back Home')
        await browser.pause(1000)
        
    })

   
})

