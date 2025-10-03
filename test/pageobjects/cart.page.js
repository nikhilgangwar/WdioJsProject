import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CartPage extends Page {
    /**
     * define selectors using getter methods
     */
    //shopping cart link
    get shoppingCartLink() {
         return $('.shopping_cart_link'); 
        }
    //checkout button    
    get checkoutButton() {
        return $('//button[contains(text(),"Checkout")]'); 
        }  

    // goto shopping cart    
    async goToShoppingCart() {
        await this.shoppingCartLink.click();
    }

    //checkout button
    async proceedToCheckout() {
        await this.checkoutButton.click();
    }
    
}

export default new CartPage();
