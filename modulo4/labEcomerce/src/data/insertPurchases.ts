import { purchases} from "../type/typePurchases";
import { connection } from "./connection";

// Essa função está inserindo um produto na tabela "labecommerce_purchases"
export const insertPurchases = async (purchases: purchases):Promise<void> =>{
    await connection ("labelabecommerce_purchases")
    .insert({
        id:purchases.id,
        user_id:purchases.user_id,
        product_id:purchases.product_id,
        quatity:purchases.quantity,
        total_price:purchases.total_price
    })
}