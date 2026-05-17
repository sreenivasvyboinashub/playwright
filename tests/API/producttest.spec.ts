import {test, expect} from 'playwright/test';
import {UserAPI} from '../../API/listt';

test('get product list', async () => {

    const userAPI = new UserAPI();
    const response = await userAPI.getProductList();

    expect (response.status()).toBe(200);
    // console.log(await response.json());
    const responseBody = await response.json();
    for (const product of responseBody.products) {
        console.log(`Product Name: ${product.name}, Price: ${product.brand}`);
    }
})