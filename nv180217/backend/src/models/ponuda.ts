import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Ponuda = new Schema(
    {
        id: {
            type: Number
        },
        datumOd: {
            type: String
        },
        datumDo: {
            type: String
        },
        posiljalac: {
            type: String
        },
        cena: {
            type: Number
        },
        status: {
            type: String
        },
        profitagencije:{
            type: Number
        }
    }
);

export default mongoose.model('Ponuda', Ponuda, 'ponuda');