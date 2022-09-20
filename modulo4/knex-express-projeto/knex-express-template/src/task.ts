export type tarefa = {
    title: string,
    description: string,
    limitDate: string,
    creatorUserId: string,
    id: number
}

export const tarefa1: tarefa[] = [
    {
        id: 1,
        title: "Criar banco dos alunos",
        description: "Devemos criar o banco dos alunos para o módulo do backend",
        limitDate: "04/05/2020",
        creatorUserId: "001"
    }
]