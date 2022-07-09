import express from 'express';
import Inbox from '../models/inbox';

export class InboxController {
    dodajPoruku = (req: express.Request, res: express.Response) => {
        Inbox.find({}, (err, inb)=>{
            if(err) console.log(err);
            else{
                req.body.id=inb.length+1
                let p = new Inbox(req.body)
                p.save().then(nar => { res.json({ 'poruka': 'ok' }) }).catch(err => {
                    res.json(err);
                })
            }
        })
    }

    dodajPorukuUKonverzaciju = (req: express.Request, res: express.Response) => {
        let id= req.body.id
        
        let text= req.body.text
        let posiljalac=req.body.posiljalac
        let vreme= req.body.vreme
        let procitano= req.body.procitano

        let konv={
            text:text,
            posiljalac:posiljalac,
            vreme: vreme,
            procitano:procitano
        }

        Inbox.collection.updateOne({"id":id},{$push:{"konverzacija":konv}})
        res.json({ 'poruka': 'ok' })
    }

    dohvatiPonudeZaKorisnikeInekretninu = (req: express.Request, res: express.Response) => {
        let korisnickoime1= req.body.korisnickoime1
        let nekretina= req.body.nekretina
        Inbox.findOne({$or:[{$and:[{"nekretina":nekretina,"korisnickoime1":korisnickoime1}]},{$and:[{"nekretina":nekretina,"korisnickoime2":korisnickoime1}]}]},
            (err, inbox) => {
                if (err) console.log(err);
                else res.json(inbox);
            })
    }

    dohvatiPonudeZaKorisnike = (req: express.Request, res: express.Response) => {
        let korisnickoime1= req.body.korisnickoime1
        Inbox.find({$or:[{"korisnickoime1":korisnickoime1},{"korisnickoime2":korisnickoime1}]},
            (err, inbox) => {
                if (err) console.log(err);
                else res.json(inbox);
            })
    }

    dohvatiInboxSaIdom = (req: express.Request, res: express.Response) => {
        let id = req.body.id;

        Inbox.findOne({ 'id': id },
            (err, inb) => {
                if (err) console.log(err);
                else res.json(inb);
            })
    }


    azurirajCitanje = (req: express.Request, res: express.Response) => {
        let konverzacija = req.body.konverzacija;
        let id = req.body.id

        Inbox.collection.updateOne({ 'id': id }, {
            $set: {
                'konverzacija': konverzacija
            }
        });
        res.json({ poruka: 'ok' })
    }


}