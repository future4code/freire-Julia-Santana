import { product } from "../type/typeProduct";
import { connection } from "../data/connection";

// Essa função está inserindo um produto na tabela "labecommerce_products"
export const insertProduct = async (product: product): Promise<void> => {
  await connection("labecommerce_products").insert({
    id: product.id,
    name: product.name,
    price: product.price,
    image_url: product.image_url,
  });
};