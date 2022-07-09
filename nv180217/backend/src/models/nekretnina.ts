import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Nekretnina = new Schema(
    {
        naziv: {
            type: String
        },
        grad: {
            type: String
        },
        opstina: {
            type: String
        },
        ulica: {
            type: String
        },
        kucailistan: {
            type: String
        },
        brojspratova: {
            type: Number
        },
        sprat: {
            type: Number
        },
        kvadratura: {
            type: Number
        },
        brojsoba: {
            type: Number
        },
        namesten:{
            type: Boolean
        },
        galerija: {
            type: Array
        },
        prodaja: {
            type: Boolean
        },
        cena: {
            type: Number
        },
        vlasnik: {
            type: String
        },
        promovisana: {
            type: Boolean
        },
        id:{
            type: Number
        },
        odobrena:{
            type: String
        }
    }
);

export default mongoose.model('Nekretnina', Nekretnina, 'nekretnina');