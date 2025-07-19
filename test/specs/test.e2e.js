import 'dotenv/config'
import { faker } from '@faker-js/faker';
import { browser, expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import InventoryPage from '../pageobjects/inventory.page.js'
import CartPage from '../pageobjects/cart.page.js'
import CheckoutPage from '../pageobjects/checkout.page.js'

describe('My Login application', () => {
    it('should be able to login using Standard User', async () => {
        // Open the login page
        await LoginPage.open()

        //Login using the standard user
        await LoginPage.login(process.env.STANDARDUSER, process.env.PASSWORD)

        // expect InventoryPage after login
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
        
        // expect Sauce Labs Backpack product on InventoryPage after login    
        await expect(InventoryPage.LinkSauceLabsBackpack).toHaveText('Sauce Labs Backpack')               
    })
    it('should be able to login using performance glitch User', async () => {
     
        // Open the login page..
        await LoginPage.open()
     
        //Login using the performance glitch user
        await LoginPage.login(process.env.PERFORMANCEGLITCHUSER, process.env.PASSWORD)
     
        // expect InventoryPage after login
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
     
        // expect Sauce Labs Backpack product on InventoryPage after login 
        await expect(InventoryPage.LinkSauceLabsBackpack).toHaveText('Sauce Labs Backpack')               
    })
    it('should not login using invalid user', async () => {
        
        // Open the login page
        await LoginPage.open()
       
        //Login using the performance glitch user
        await LoginPage.login('invaliduser', process.env.PASSWORD)
       
        // expect Error message for invalid user
        await expect(LoginPage.errorMessage).toHaveText('Epic sadface: Username and password do not match any user in this service')               
    })

    it('should not login using Locked user', async () => {
       
        // Open the login page
        await LoginPage.open()        
       
        //Login using the locked user
        await LoginPage.login(process.env.LOCKEDUSER, process.env.PASSWORD)

         // expect Error message for locked user
        await expect(LoginPage.errorMessage).toHaveText('Epic sadface: Sorry, this user has been locked out.')               
    })

    it('should not login when password is blank', async () => {
       
        // Open the login page
        await LoginPage.open()        
       
        //Login using the standard user and blank password
        await LoginPage.login(process.env.STANDARDUSER, '')

         // expect Error message for locked user
        await expect(LoginPage.errorMessage).toHaveText('Epic sadface: Password is required')               
    })

    it('should not login when username is blank', async () => {
       
        // Open the login page
        await LoginPage.open()        
       
        //Login using the blank username and valid password
        await LoginPage.login('', process.env.PASSWORD)

         // expect Error message for locked user
        await expect(LoginPage.errorMessage).toHaveText('Epic sadface: Username is required')               
    })

})

describe('End to End Login, Add Product and Place an order flow', () => {
    it('should be able to place an order using standard user', async () => {

         // Open the login page
        await LoginPage.open()

        //Login using the standard user
        await LoginPage.login(process.env.STANDARDUSER, process.env.PASSWORD)

        // expect InventoryPage after login
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
        
        // expect Sauce Labs Backpack product on InventoryPage after login    
        await expect(InventoryPage.LinkSauceLabsBackpack).toHaveText('Sauce Labs Backpack')

        // Click on Add to Cart for Sauce Labs Sauce Labs Backpack 
        await InventoryPage.btnSauceLabsBackpackAddtoCart.click()

        // Click on Add to Cart for Sauce Labs Fleece Jacket
        await InventoryPage.btnSauceLabsFleeceJacketAddtoCart.click()
        
        // Click on Shopping Cart
        await CartPage.goToShoppingCart()

        // Click on Checkout
        await CartPage.proceedToCheckout()
        
        //Generate random Firstname Lastname and Postcode
        const firstName = faker.person.firstName()
        const lastname = faker.person.lastName()
        const postCode = faker.location.zipCode('####') // '6925'

        // Enter Firstname Lastname and Postcode
        await CheckoutPage.UserInfromation(firstName, lastname,postCode)

        // Click on Finish
        await CheckoutPage.btnFinish.click()

        //expect Back Home button to appear
        await expect(CheckoutPage.btnBackHome).toHaveText('Back Home')
        await browser.pause(1000)        
    })

    it('should be able to place an order using performance glitch user', async () => {
        
        // Open the login page
        await LoginPage.open()

        //Login using the performance glitch user
        await LoginPage.login(process.env.PERFORMANCEGLITCHUSER, process.env.PASSWORD)

        // expect InventoryPage after login
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
        
        // expect Sauce Labs Backpack product on InventoryPage after login  
        await expect(InventoryPage.LinkSauceLabsBackpack).toHaveText('Sauce Labs Backpack')

        // Click on Add to Cart for Sauce Labs Sauce Labs Backpack
        await InventoryPage.btnSauceLabsBackpackAddtoCart.click()

        // Click on Add to Cart for Sauce Labs Fleece Jacket
        await InventoryPage.btnSauceLabsFleeceJacketAddtoCart.click()

        // Click on Shopping Cart
        await CartPage.goToShoppingCart()

        // Click on Add to Cart for Sauce Labs
        await CartPage.proceedToCheckout()
        
        //Generate random Firstname Lastname and Postcode
        const firstName = faker.person.firstName()
        const lastname = faker.person.lastName()
        const postCode = faker.address.zipCode('####') // '6925'

        // Enter Firstname Lastname and Postcode
        await CheckoutPage.UserInfromation(firstName, lastname,postCode)

        // Click on Finish
        await CheckoutPage.btnFinish.click()

        //expect Back Home button to appear
        await expect(CheckoutPage.btnBackHome).toHaveText('Back Home')
        await browser.pause(1000)        
    })
   
})

