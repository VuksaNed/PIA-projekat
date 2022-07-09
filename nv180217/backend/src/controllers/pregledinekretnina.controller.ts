import express from 'express';
import Pregledinekretnina from '../models/pregledinekretnina';

export class PregledinekretninaController {

    dohvatiPreglede = (req: express.Request, res: express.Response) => {

        let id = req.body.id

        Pregledinekretnina.find({ "id": id },
            (err, pon) => {
                if (err) console.log(err);
                else res.json(pon);
            })
    }

    daLiJeVideo = (req: express.Request, res: express.Response) => {

        let id = req.body.id
        let korisnickoime = req.body.korisnickoime
        let datum = req.body.datum

        Pregledinekretnina.find({ "id": id, "korisnickoime": korisnickoime, "datum": datum },
            (err, pon) => {
                if (err) console.log(err);
                else res.json(pon);
            })
    }

    dodajNekretninu = (req: express.Request, res: express.Response) => {

        let p = new Pregledinekretnina(req.body)
        p.save().then(nar => { res.json({ 'poruka': 'ok' }) }).catch(err => {
            res.json(err);
        })
    }

}


