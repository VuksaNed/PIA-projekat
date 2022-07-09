import express from 'express';
import Blokirani from '../models/blokirani';

export class BlokiraniController {
    dodajBlok = (req: express.Request, res: express.Response) => {

        let p = new Blokirani(req.body)
        p.save().then(nar => { res.json({ 'poruka': 'ok' }) }).catch(err => {
            res.json(err);
        })
    }

    dohvatiBlokiraneSaJednim = (req: express.Request, res: express.Response) => {
        let korisnickoime1= req.body.korisnickoime1
        Blokirani.find({$or:[{"korisnickoime1":korisnickoime1},{"korisnickoime2":korisnickoime1}]},
            (err, blok) => {
                if (err) console.log(err);
                else res.json(blok);
            })
    }

    daLiSuBlokirani = (req: express.Request, res: express.Response) => {
        let korisnickoime1= req.body.korisnickoime1
        let korisnickoime2= req.body.korisnickoime2
        Blokirani.find({$or:[{"korisnickoime1":korisnickoime1,"korisnickoime2":korisnickoime2},{"korisnickoime2":korisnickoime1,"korisnickoime1":korisnickoime2}]},
            (err, blok) => {
                if (err) console.log(err);
                else res.json(blok);
            })
    }

    odBlokiraj = (req: express.Request, res: express.Response) => {
        let korisnickoime1= req.body.korisnickoime1
        let korisnickoime2= req.body.korisnickoime2
        Blokirani.collection.deleteOne({"korisnickoime1":korisnickoime1,"korisnickoime2":korisnickoime2}).then(nar => { res.json({ 'poruka': 'ok' }) }).catch(err => {
            res.json(err);
        })
    }

}



