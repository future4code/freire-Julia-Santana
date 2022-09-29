import { IShowDB, Show } from "../models/Show"
import { BaseDatabase } from "./BaseDatabase"

export class ShowDatabase extends BaseDatabase {
    public static TABLE_SHOWS = "Lama_Shows"
    public static TABLE_TICKETS = "Lama_Tickets"


    public createShow = async (show: Show) => {

        const showDB = this.createShow(show)
        await BaseDatabase.connection(ShowDatabase.TABLE_SHOWS)
            .insert(showDB)

    }

    public getShow = async () => {
        const showsDB: IShowDB[] = await BaseDatabase
            .connection(ShowDatabase.TABLE_SHOWS)
            .select()

        return showsDB
    }

   
}