export interface IShowDB {
    id: string,
    band: string,
    starts_at: Date
}

export interface ITicketDB {
    id: string,
    show_id: string,
    user_id: string
   
}

export interface ICreateShowInputDTO{
    token:string
    band:string,
    startsAt:Date,
    tickets:number
}

export interface ICreateShowOutputDTO{
    message:string,
    show:Show
}

export interface IGetShowInputDTO {
    token: string
}

export interface IGetShowOutputDTO {
    show: Show[]
}

export interface ICreateReserva{
    token:string,
    id: string,
    tickets:number
}
export class Show {
    constructor(
        private id: string,
        private band: string,
        private startsAt: Date,
        private tickets: number = 5000
    ) {}

    public getId = () => {
        return this.id
    }

    public getBand = () => {
        return this.band
    }

    public getStartsAt = () => {
        return this.startsAt
    }

    public getTickets = () => {
        return this.tickets
    }

    public setId = (newId: string) => {
        this.id = newId
    }

    public setBand = (newBand: string) => {
        this.band = newBand
    }

    public setStartsAt = (newStartsAt: Date) => {
        this.startsAt = newStartsAt
    }

    public setTickets = (newTickets: number) => {
        this.tickets = newTickets
    }
}
