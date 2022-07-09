import express from 'express';
import {InboxController} from '../controllers/inbox.controller'
const inboxRouter = express.Router();

inboxRouter.route('/dodajPoruku').post(
    (req, res)=>new InboxController().dodajPoruku(req, res)
);

inboxRouter.route('/dodajPorukuUKonverzaciju').post(
    (req, res)=>new InboxController().dodajPorukuUKonverzaciju(req, res)
);

inboxRouter.route('/dohvatiPonudeZaKorisnikeInekretninu').post(
    (req, res)=>new InboxController().dohvatiPonudeZaKorisnikeInekretninu(req, res)
);

inboxRouter.route('/dohvatiPonudeZaKorisnike').post(
    (req, res)=>new InboxController().dohvatiPonudeZaKorisnike(req, res)
);

inboxRouter.route('/dohvatiInboxSaIdom').post(
    (req, res)=>new InboxController().dohvatiInboxSaIdom(req, res)
);

inboxRouter.route('/azurirajCitanje').post(
    (req, res)=>new InboxController().azurirajCitanje(req, res)
);


export default inboxRouter;