import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Arhivirani = new Schema(
    {
        korisnickoime1: {
            type: String
        },
        id: {
            type: Number
        }
    }
);

export default mongoose.model('Arhivirani', Arhivirani, 'arhivirani');