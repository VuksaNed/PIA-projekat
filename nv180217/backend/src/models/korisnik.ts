import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Korisnik = new Schema(
    {
        ime: {
            type: String
        },
        prezime: {
            type: String
        },
        korisnickoime: {
            type: String
        },
        lozinka: {
            type: String
        },
        slika: {
            type: String
        },
        adresaeposte: {
            type: String
        },
        grad: {
            type: String
        },
        drzava: {
            type: String
        },
        tip: {
            type: String
        },
        status:{
            type: String
        }
    }
);

export default mongoose.model('Korisnik', Korisnik, 'korisnici');