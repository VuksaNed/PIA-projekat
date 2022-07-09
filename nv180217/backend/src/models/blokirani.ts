import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Blokirani = new Schema(
    {
        korisnickoime1: {
            type: String
        },
        korisnickoime2: {
            type: String
        }
    }
);

export default mongoose.model('Blokirani', Blokirani, 'blokirani');