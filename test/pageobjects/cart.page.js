import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CartPage extends Page {
    /**
     * define selectors using getter methods
     */
    get shoppingCartLink() {
         return $('.shopping_cart_link'); 
        }
    get checkoutButton() {
        return $('//button[contains(text(),"Checkout")]'); 
        }  

    async goToShoppingCart() {
        await this.shoppingCartLink.click();
    }

    async proceedToCheckout() {
        await this.checkoutButton.click();
    }
    
}

export default new CartPage();
