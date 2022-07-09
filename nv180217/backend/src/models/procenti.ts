import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Procenti = new Schema(
    {
        prodaja: {
            type: Number
        },
        iznajmljivanje: {
            type: Number
        }
    }
);

export default mongoose.model('Procenti', Procenti, 'procenti');