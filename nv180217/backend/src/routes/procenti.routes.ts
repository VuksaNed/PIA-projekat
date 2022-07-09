import express from 'express';
import {ProcentiController} from '../controllers/procenti.controller'
const procentiRouter = express.Router();

procentiRouter.route('/AzurirajsvePonudusavremenom').post(
    (req, res)=>new ProcentiController().AzurirajsvePonudusavremenom(req, res)
);

procentiRouter.route('/dohvatiProcente').get(
    (req, res)=>new ProcentiController().dohvatiProcente(req, res)
);


export default procentiRouter;