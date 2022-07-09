import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Inbox = new Schema(
    {
        korisnickoime1: {
            type: String
        },
        korisnickoime2: {
            type: String
        },
        nekretina:{
            type: Number
        },
        id: {
            type: Number
        },
        naslov:{
            type: String
        },
        konverzacija: [{
            text: {
                type: String
            },
            posiljalac: {
                type: String
            },
            vreme: {
                type: String
            },
            procitano: {
                type: Boolean
            }
        }]
    }
);

export default mongoose.model('Inbox', Inbox, 'inbox');