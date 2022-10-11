export interface IProductsDB {
    name: string,
    tags: string,
}

export class Products {
    constructor(
        private name: string,
        private tags: string,
    ) {}
    
    public getName = () => {
        return this.name
    }
    
    public getTags = () => {
        return this.tags
    }


    public setName = (newName: string) => {
        this.name = newName
    }

    public setTags = (newTags: string) => {
        this.tags = newTags
    }

}

export interface IGetPizzasOutputDTO {
    message: string,
    products: {
        name: string,
        tags: string,
    }[]
}