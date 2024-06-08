import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class InventoryPage extends Page {
    /**
     * define selectors using getter methods
     */
    get LinkSauceLabsBackpack () {
        return $('#item_4_title_link');
    }
    get  btnSauceLabsBackpackAddtoCart () {
        return $('#add-to-cart-sauce-labs-backpack');
    }   

    get LinkSauceLabsFleeceJacket () {
        return $('#item_5_title_link');
    }
    get  btnSauceLabsFleeceJacketAddtoCart () {
        return $('#add-to-cart-sauce-labs-fleece-jacket');
    }   

    get  btnShoppingCart () {
        return $('data-test="shopping-cart-link"');
    }   
    
}

export default new InventoryPage();
