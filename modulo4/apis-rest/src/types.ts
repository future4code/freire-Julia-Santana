export type usuario = {
    id:number,
    name:string,
    email:string,
    types:UserType
    age:number
}

enum UserType {
    ADMIN = "ADMIN",
    NORMAL = "NORMAL"
}
export let users:usuario[] = [
    {
        id: 1,
        name: "Alice",
        email: "alice@email.com",
        types: UserType.ADMIN,
        age: 12
    },
    {
        id: 2,
        name: "Bob",
        email: "bob@email.com",
        types: UserType.NORMAL,
        age: 36
    },
    {
        id: 3,
        name: "Coragem",
        email: "coragem@email.com",
        types: UserType.NORMAL,
        age: 21
    },
    {
        id: 4,
        name: "Dory",
        email: "dory@email.com",
        types: UserType.NORMAL,
        age: 17
    },
    {
        id: 5,
        name: "Elsa",
        email: "elsa@email.com",
        types: UserType.ADMIN,
        age: 17
    },
    {
        id: 6,
        name: "Fred",
        email: "fred@email.com",
        types: UserType.ADMIN,
        age: 60
    }
]