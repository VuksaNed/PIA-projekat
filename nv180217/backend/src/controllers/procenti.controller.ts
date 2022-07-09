import express from 'express';
import Procenti from '../models/procenti';

export class ProcentiController {

    AzurirajsvePonudusavremenom = (req: express.Request, res: express.Response) => {
        let prodaja = req.body.prodaja;
        let iznajmljivanje= req.body.iznajmljivanje
     
        Procenti.collection.updateMany({},{$set: {'prodaja':prodaja,"iznajmljivanje":iznajmljivanje}});
        res.json({poruka:'ok'})
    }

    dohvatiProcente = (req: express.Request, res: express.Response) => {

        Procenti.findOne({},
            (err, pon) => {
                if (err) console.log(err);
                else res.json(pon);
            })
    }



}