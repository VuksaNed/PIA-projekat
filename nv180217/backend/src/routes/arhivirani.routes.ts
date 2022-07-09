import express from 'express';
import {ArhiviraniController} from '../controllers/arhivirani.controller'
const arhiviraniRouter = express.Router();

arhiviraniRouter.route('/dodajArhivu').post(
    (req, res)=>new ArhiviraniController().dodajArhivu(req, res)
);

arhiviraniRouter.route('/dohvatiSveArhivirane').post(
    (req, res)=>new ArhiviraniController().dohvatiSveArhivirane(req, res)
);

arhiviraniRouter.route('/odArhiviraj').post(
    (req, res)=>new ArhiviraniController().odArhiviraj(req, res)
);


export default arhiviraniRouter;