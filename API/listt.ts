import { request } from "playwright";

export class UserAPI {
 
   async getProductList() {
      const apiContext = await request.newContext();

      const response = await apiContext.get("https://automationexercise.com/api/productsList");

      return response;

   }

   async searchProduct(productName: string) {

      const apiContext = await request.newContext();

      const response = await apiContext.get(`https://automationexercise.com/api/searchProduct?name=${productName}`);
   }
   
}
