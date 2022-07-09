import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Pregledinekretnina = new Schema(
    {
        id: {
            type: Number
        },
        korisnickoime: {
            type: String
        },
        datum: {
            type: String
        }
    }
);

export default mongoose.model('Pregledinekretnina', Pregledinekretnina, 'pregledinekretnina');
