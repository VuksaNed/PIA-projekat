import express from 'express';
import {NekretninaController} from '../controllers/nekretnina.controller'
const nekretninaRouter = express.Router();

nekretninaRouter.route('/dohvatiPromovisaneNekretnine').get(
    (req, res)=>new NekretninaController().dohvatiPromovisaneNekretnine(req, res)
);

nekretninaRouter.route('/dohvatiNekretnineRezPretrage').post(
    (req, res)=>new NekretninaController().dohvatiNekretnineRezPretrage(req, res)
);

nekretninaRouter.route('/dohvatiSveNekretnine').post(
    (req, res)=>new NekretninaController().dohvatiSveNekretnine(req, res)
);

nekretninaRouter.route('/dohvatiNekretninuSaId').post(
    (req, res)=>new NekretninaController().dohvatiNekretninuSaId(req, res)
);

nekretninaRouter.route('/dohvatiNekretninuSaVlasnikom').post(
    (req, res)=>new NekretninaController().dohvatiNekretninuSaVlasnikom(req, res)
);

nekretninaRouter.route('/dodajNekretninu').post(
    (req, res)=>new NekretninaController().dodajNekretninu(req, res)
);

nekretninaRouter.route('/AzurirajPodatke').post(
    (req, res)=>new NekretninaController().AzurirajPodatke(req, res)
);

nekretninaRouter.route('/azurirajStatus').post(
    (req, res)=>new NekretninaController().azurirajStatus(req, res)
);

nekretninaRouter.route('/azurirajPromovisanje').post(
    (req, res)=>new NekretninaController().azurirajPromovisanje(req, res)
);

export default nekretninaRouter;