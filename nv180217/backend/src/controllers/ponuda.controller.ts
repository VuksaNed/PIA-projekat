import express from 'express';
import Ponuda from '../models/ponuda';

export class PonudaController {
    dodajPonudu = (req: express.Request, res: express.Response) => {

        let p = new Ponuda(req.body)
        p.save().then(nar => { res.json({ 'poruka': 'ok' }) }).catch(err => {
            res.json(err);
        })
    }

    dohvatiPonuduSaIdIStatusom = (req: express.Request, res: express.Response) => {
        let id = req.body.id;
        let status= req.body.status

        Ponuda.find({ 'id': id, "status":status },
            (err, pon) => {
                if (err) console.log(err);
                else res.json(pon);
            })
    }

    dohvatiPonuduSaIdPosiljaocemIstatusom = (req: express.Request, res: express.Response) => {
        let id = req.body.id;
        let posiljalac= req.body.posiljalac
        let status= req.body.status

        Ponuda.findOne({ 'id': id, "posiljalac":posiljalac,"status":status },
            (err, pon) => {
                if (err) console.log(err);
                else res.json(pon);
            })
    }

    AzurirajPonudu = (req: express.Request, res: express.Response) => {
        let id = req.body.id;
        let posiljalac= req.body.posiljalac
        let status= req.body.status
        let novistatus= req.body.novistatus
        let profitagencije= req.body.profitagencije

        Ponuda.collection.updateOne({ 'id': id, "posiljalac":posiljalac,"status":status },{$set: {'status':novistatus, 'profitagencije':profitagencije}});
        res.json({poruka:'ok'})
    }

    AzurirajsvePonude = (req: express.Request, res: express.Response) => {
        let id = req.body.id;
        let status= req.body.status
        let novistatus= req.body.novistatus
        console.log(id)
        Ponuda.collection.updateMany({ 'id': id,"status":status },{$set: {'status':novistatus}});
        res.json({poruka:'ok'})
    }

    AzurirajsvePonudusavremenom = (req: express.Request, res: express.Response) => {
        let id = req.body.id;
        let status= req.body.status
        let novistatus= req.body.novistatus
        let datumOd= req.body.datumOd
        let datumDo= req.body.datumDo
        console.log(id)
        Ponuda.collection.updateMany({ 'id': id,"status":status, "datumDo":datumDo,"datumOd":datumOd },{$set: {'status':novistatus}});
        res.json({poruka:'ok'})
    }


    dohvatiPonuduSaStatusom = (req: express.Request, res: express.Response) => {
        let status= req.body.status

        Ponuda.find({ "status":status },
            (err, pon) => {
                if (err) console.log(err);
                else res.json(pon);
            })
    }



}