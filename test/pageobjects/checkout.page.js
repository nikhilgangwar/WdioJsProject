import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CheckoutPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputFirstname () {
        return $('#first-name');
    }

    get inputLastname () {
        return $('#last-name');
    }

    get inputZipPostalCode () {
        return $('#postal-code');
    }

    get btnContinue () {
        return $('#continue');
    }

    get btnFinish () {
        return $('#finish');
    }

    get btnBackHome () {
        return $('#back-to-products');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to enter user information on checkout
     * @param firstname
     * @param lastname
     * @param zippostalcode
     */
    async UserInfromation (firstname, lastname, zippostalcode) {
        await this.inputFirstname.setValue(firstname);
        await this.inputLastname.setValue(lastname);
        await this.inputZipPostalCode.setValue(zippostalcode)
        await this.btnContinue.click();
    }

    
}

export default new CheckoutPage();
