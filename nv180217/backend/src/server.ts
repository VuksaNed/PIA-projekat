import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import korisnikRouter from './routes/korisnik.routes';
import nekretninaRouter from './routes/nekretnine.routes';
import ponudaRouter from './routes/ponuda.routes';
import inboxRouter from './routes/inbox.routes';
import blokiraniRouter from './routes/blokirani.routes';
import arhiviraniRouter from './routes/arhivirani.routes';
import procentiRouter from './routes/procenti.routes';
import pregledinekretninaRouter from './routes/pregledinekretnina.routes';

const app = express();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/agencija');
const connection = mongoose.connection;
connection.once('open', ()=>{
    console.log('mongo ok')
});

const router = express.Router();
router.use('/korisnici', korisnikRouter)
router.use('/nekretnine', nekretninaRouter)
router.use('/ponuda',ponudaRouter)
router.use('/inbox',inboxRouter)
router.use('/blokirani', blokiraniRouter)
router.use('/arhivirani', arhiviraniRouter)
router.use('/procenti', procentiRouter)
router.use('/pregledi', pregledinekretninaRouter)

app.use('/', router);
app.listen(4000, () => console.log(`Express server running on port 4000`));