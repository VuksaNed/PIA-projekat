import express from 'express';
import {BlokiraniController} from '../controllers/blokirani.controller'
const blokiraniRouter = express.Router();

blokiraniRouter.route('/dodajBlok').post(
    (req, res)=>new BlokiraniController().dodajBlok(req, res)
);

blokiraniRouter.route('/dohvatiBlokiraneSaJednim').post(
    (req, res)=>new BlokiraniController().dohvatiBlokiraneSaJednim(req, res)
);

blokiraniRouter.route('/dodajBlok').post(
    (req, res)=>new BlokiraniController().dodajBlok(req, res)
);

blokiraniRouter.route('/daLiSuBlokirani').post(
    (req, res)=>new BlokiraniController().daLiSuBlokirani(req, res)
);

blokiraniRouter.route('/daLiSuBlokirani').post(
    (req, res)=>new BlokiraniController().daLiSuBlokirani(req, res)
);

blokiraniRouter.route('/odBlokiraj').post(
    (req, res)=>new BlokiraniController().odBlokiraj(req, res)
);


export default blokiraniRouter;