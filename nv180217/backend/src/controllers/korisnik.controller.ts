import express from 'express';
import Korisnik from '../models/korisnik';

export class KorisnikController {
    prijava = (req: express.Request, res: express.Response) => {
        let korisnickoime = req.body.korisnickoime;
        let lozinka = req.body.lozinka;

        Korisnik.findOne({ 'korisnickoime': korisnickoime, 'lozinka': lozinka },
            (err, korisnik) => {
                if (err) console.log(err);
                else res.json(korisnik);
            })
    }

    dohvatiKorisnikaSaKorimenom = (req: express.Request, res: express.Response) => {
        let korisnickoime = req.body.korisnickoime;

        Korisnik.findOne({ 'korisnickoime': korisnickoime },
            (err, korisnik) => {
                if (err) console.log(err);
                else res.json(korisnik);
            })
    }

    dohvatiKorisnikaSaAdresom = (req: express.Request, res: express.Response) => {
        let adresaeposte = req.body.adresaeposte;

        Korisnik.findOne({ 'adresaeposte': adresaeposte },
            (err, korisnik) => {
                if (err) console.log(err);
                else res.json(korisnik);
            })
    }

    registracija = (req: express.Request, res: express.Response) => {

        let kor = new Korisnik(req.body);
        kor.save().then(kor => { res.json({ 'message': 'ok' }) }).catch(err => { res.json(err); })
    }

    promenaLozinke = (req: express.Request, res: express.Response) => {

        let korisnickoime = req.body.korisnickoime;
        let lozinka = req.body.lozinka;

        Korisnik.collection.updateOne({ 'korisnickoime': korisnickoime }, { $set: { 'lozinka': lozinka } }).then(kor => { res.json({ 'message': 'ok' }) }).catch(err => { res.json(err); })

    }

    AzurirajPodatke = (req: express.Request, res: express.Response) => {
        let korisnickoime = req.body.korisnickoime;
        let ime= req.body.ime
        let prezime=req.body.prezime
        let slika=req.body.slika
        let grad=req.body.grad
        let drzava=req.body.drzava

        Korisnik.collection.updateOne({'korisnickoime': korisnickoime},{$set: {'ime':ime, 'prezime':prezime,'slika':slika,
        'grad':grad,'drzava':drzava}});
        res.json({poruka:'ok'})
    }


    dohvatiSveKorisnikeOsimOznacenog = (req: express.Request, res: express.Response) => {
        let tip = req.body.tip;
        let status="prihvacen"

        Korisnik.find({ 'tip': {$ne: tip},"status": status},
            (err, korisnik) => {
                if (err) console.log(err);
                else res.json(korisnik);
            })
    }

    obrisiKorisnika = (req: express.Request, res: express.Response) => {
        let korisnickoime= req.body.korisnickoime
        Korisnik.collection.deleteOne({"korisnickoime":korisnickoime}).then(nar => { res.json({ 'poruka': 'ok' }) }).catch(err => {
            res.json(err);
        })
    }

    dohvatiKorisnikesaStatusom = (req: express.Request, res: express.Response) => {
        let status= req.body.status
        
        Korisnik.find({ 'status': status },
            (err, korisnik) => {
                if (err) console.log(err);
                else res.json(korisnik);
            })
    }

    azurirajStatus = (req: express.Request, res: express.Response) => {

        let korisnickoime = req.body.korisnickoime;
        let status= req.body.status

        Korisnik.collection.updateOne({ 'korisnickoime': korisnickoime }, { $set: { 'status': status } }).then(kor => { res.json({ 'poruka': 'ok' }) }).catch(err => { res.json(err); })

    }

}