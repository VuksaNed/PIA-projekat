import express from 'express';
import {PonudaController} from '../controllers/ponuda.controller'
const ponudaRouter = express.Router();

ponudaRouter.route('/dodajPonudu').post(
    (req, res)=>new PonudaController().dodajPonudu(req, res)
);

ponudaRouter.route('/dohvatiPonuduSaIdIStatusom').post(
    (req, res)=>new PonudaController().dohvatiPonuduSaIdIStatusom(req, res)
);

ponudaRouter.route('/dohvatiPonuduSaIdPosiljaocemIstatusom').post(
    (req, res)=>new PonudaController().dohvatiPonuduSaIdPosiljaocemIstatusom(req, res)
);

ponudaRouter.route('/AzurirajPonudu').post(
    (req, res)=>new PonudaController().AzurirajPonudu(req, res)
);

ponudaRouter.route('/AzurirajsvePonude').post(
    (req, res)=>new PonudaController().AzurirajsvePonude(req, res)
);

ponudaRouter.route('/AzurirajsvePonudusavremenom').post(
    (req, res)=>new PonudaController().AzurirajsvePonudusavremenom(req, res)
);

ponudaRouter.route('/dohvatiPonuduSaStatusom').post(
    (req, res)=>new PonudaController().dohvatiPonuduSaStatusom(req, res)
);


export default ponudaRouter;