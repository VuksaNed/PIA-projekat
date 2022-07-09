import express from 'express';
import Arhivirani from '../models/arhivirani';

export class ArhiviraniController {
    dodajArhivu = (req: express.Request, res: express.Response) => {

        let p = new Arhivirani(req.body)
        p.save().then(nar => { res.json({ 'poruka': 'ok' }) }).catch(err => {
            res.json(err);
        })
    }

    dohvatiSveArhivirane = (req: express.Request, res: express.Response) => {
        let korisnickoime1= req.body.korisnickoime1
        Arhivirani.find({$or:[{"korisnickoime1":korisnickoime1}]},
            (err, arh) => {
                if (err) console.log(err);
                else res.json(arh);
            })
    }

    odArhiviraj = (req: express.Request, res: express.Response) => {
        let korisnickoime1= req.body.korisnickoime1
        let id= req.body.id
        Arhivirani.collection.deleteOne({"korisnickoime1":korisnickoime1,"id":id}).then(nar => { res.json({ 'poruka': 'ok' }) }).catch(err => {
            res.json(err);
        })
    }


}



