import express from 'express';
import Nekretnina from '../models/nekretnina';

export class NekretninaController {
    dohvatiPromovisaneNekretnine = (req: express.Request, res: express.Response) => {
        Nekretnina.find({ 'promovisana': true },
            (err, nekretnina) => {
                if (err) console.log(err);
                else res.json(nekretnina);
            })
    }

    dohvatiNekretnineRezPretrage = (req: express.Request, res: express.Response) => {
        let mincena = req.body.mincena;
        let maxcena = req.body.maxcena
        let grad = req.body.grad
        let odobrena = req.body.odobrena
        if (grad == "") {
            Nekretnina.find({ cena: { $gte: mincena, $lte: maxcena }, "odobrena": odobrena },
                (err, nekretnina) => {
                    if (err) console.log(err);
                    else res.json(nekretnina);
                })
        } else {
            Nekretnina.find({ "odobrena": odobrena, 'grad': grad, cena: { $gte: mincena, $lte: maxcena } },
                (err, nekretnina) => {
                    if (err) console.log(err);
                    else res.json(nekretnina);
                })
        }
    }

    dohvatiSveNekretnine = (req: express.Request, res: express.Response) => {
        let odobrena = req.body.odobrena
        Nekretnina.find({ "odobrena": odobrena },
            (err, nekretnina) => {
                if (err) console.log(err);
                else res.json(nekretnina);
            })
    }

    dohvatiNekretninuSaId = (req: express.Request, res: express.Response) => {
        let id = req.body.id;

        Nekretnina.findOne({ 'id': id },
            (err, nek) => {
                if (err) console.log(err);
                else res.json(nek);
            })
    }

    dohvatiNekretninuSaVlasnikom = (req: express.Request, res: express.Response) => {
        let vlasnik = req.body.vlasnik;

        Nekretnina.find({ 'vlasnik': vlasnik },
            (err, nek) => {
                if (err) console.log(err);
                else res.json(nek);
            })
    }

    dodajNekretninu = (req: express.Request, res: express.Response) => {
        Nekretnina.find({}, (err, nek) => {
            if (err) console.log(err);
            else {
                req.body.id = nek.length + 1
                let p = new Nekretnina(req.body)
                p.save().then(nar => { res.json({ 'poruka': 'ok' }) }).catch(err => {
                    res.json(err);
                })
            }
        })
    }

    AzurirajPodatke = (req: express.Request, res: express.Response) => {
        let naziv = req.body.naziv;
        let grad = req.body.grad
        let opstina = req.body.opstina
        let ulica = req.body.ulica
        let kucailistan = req.body.kucailistan
        let brojspratova = req.body.brojspratova
        let sprat = req.body.sprat
        let kvadratura = req.body.kvadratura
        let brojsoba = req.body.brojsoba
        let namesten = req.body.namesten
        let prodaja = req.body.prodaja
        let cena = req.body.cena
        let galerija = req.body.galerija
        let id = req.body.id

        Nekretnina.collection.updateOne({ 'id': id }, {
            $set: {
                'naziv': naziv, 'grad': grad, 'opstina': opstina,
                'ulica': ulica, 'kucailistan': kucailistan, 'brojspratova': brojspratova, 'sprat': sprat
                , 'kvadratura': kvadratura, 'brojsoba': brojsoba, 'namesten': namesten, 'prodaja': prodaja, 'cena': cena
                , 'galerija': galerija
            }
        });
        res.json({ poruka: 'ok' })
    }

    azurirajStatus = (req: express.Request, res: express.Response) => {
        let odobrena = req.body.odobrena;
        let id = req.body.id

        Nekretnina.collection.updateOne({ 'id': id }, {
            $set: {
                'odobrena': odobrena
            }
        });
        res.json({ poruka: 'ok' })
    }

    azurirajPromovisanje = (req: express.Request, res: express.Response) => {
        let promovisana = req.body.promovisana;
        let id = req.body.id

        Nekretnina.collection.updateOne({ 'id': id }, {
            $set: {
                'promovisana': promovisana
            }
        });
        res.json({ poruka: 'ok' })
    }




}