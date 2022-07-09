import express from 'express';
import {PregledinekretninaController} from '../controllers/pregledinekretnina.controller'
const pregledinekretninaRouter = express.Router();

pregledinekretninaRouter.route('/daLiJeVideo').post(
    (req, res)=>new PregledinekretninaController().daLiJeVideo(req, res)
);

pregledinekretninaRouter.route('/dodajNekretninu').post(
    (req, res)=>new PregledinekretninaController().dodajNekretninu(req, res)
);

pregledinekretninaRouter.route('/dohvatiPreglede').post(
    (req, res)=>new PregledinekretninaController().dohvatiPreglede(req, res)
);


export default pregledinekretninaRouter;