import { Konverzacija } from "./konverzacija"

export class Inbox{
    korisnickoime1: string
    korisnickoime2: string
    nekretina: number
    id: number
    naslov: string
    konverzacija: Array<Konverzacija>
    poslednjidatum: string
    poslednjevreme: Date
    porukaprocitana: boolean
    arhivirana: boolean
}