import { browser } from '@wdio/globals'
import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'


describe('My Login application', () => {
    it('should be able to login using Standard User', async () => {
        await LoginPage.open()
        await LoginPage.login('standard_user', 'secret_sauce')                    
    })
})

