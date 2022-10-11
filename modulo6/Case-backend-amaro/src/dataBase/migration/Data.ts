import path from "path";
import { FileSystem } from "../../services/FileSystem";
import { IdGenerator } from "../../services/IdGenerator";

//Chamando o serviço para leitura do arquivo json
const lendoJson:any = new FileSystem().readFileJson(path.resolve(__dirname, "../../../src/products.json"))

// preparando a variavel para a migrations 
export const products: any = lendoJson.products.map((result: any) => {
    return { id: result.id, nome: result.name, tags: result.tags };
  }
);


//Preparando a lógica para a inserção na Tabela Products

export let Products: any = [];
const uuid = new IdGenerator().generate();
  Products.push({ id: uuid });

  // Preparado para o Migrations

  const mapProducts = lendoJson.products.map((result:any) => {
    return { id: result.id, tags: result.tags };
});

for (let index = 0; index < exports.products.length; index++) {

    for (let i = 0; i < Number(mapProducts[index].tags.length); i++) {

        for (let contaTags = 0; contaTags < products.length; contaTags++)

            if (mapProducts[index].products[i] === products[contaTags].tag) {
                mapProducts[index].products[i] = products[contaTags].id;
                products.push({ id: mapProducts[index].id,});
            }
    }
}
 