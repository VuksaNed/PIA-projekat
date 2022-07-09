import express from 'express';
import { KorisnikController } from '../controllers/korisnik.controller';
const korisnikRouter = express.Router();

korisnikRouter.route('/prijava').post(
    (req, res)=>new KorisnikController().prijava(req, res)
);

korisnikRouter.route('/registrujSe').post(
    (req, res)=>new KorisnikController().registracija(req, res)
);

korisnikRouter.route('/dohvatiKorisnikaSaKorimenom').post(
    (req, res)=>new KorisnikController().dohvatiKorisnikaSaKorimenom(req, res)
);

korisnikRouter.route('/dohvatiKorisnikaSaAdresom').post(
    (req, res)=>new KorisnikController().dohvatiKorisnikaSaAdresom(req, res)
);

korisnikRouter.route('/promenaLozinke').post(
    (req, res)=>new KorisnikController().promenaLozinke(req, res)
);

korisnikRouter.route('/AzurirajPodatke').post(
    (req, res)=>new KorisnikController().AzurirajPodatke(req, res)
);

korisnikRouter.route('/dohvatiSveKorisnikeOsimOznacenog').post(
    (req, res)=>new KorisnikController().dohvatiSveKorisnikeOsimOznacenog(req, res)
);

korisnikRouter.route('/obrisiKorisnika').post(
    (req, res)=>new KorisnikController().obrisiKorisnika(req, res)
);

korisnikRouter.route('/dohvatiKorisnikesaStatusom').post(
    (req, res)=>new KorisnikController().dohvatiKorisnikesaStatusom(req, res)
);

korisnikRouter.route('/azurirajStatus').post(
    (req, res)=>new KorisnikController().azurirajStatus(req, res)
);

export default korisnikRouter;