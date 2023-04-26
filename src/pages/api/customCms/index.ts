import express, { Application, Request, Response } from 'express';
import { cms } from './database/cms.data';

const cors = require('cors');
const customCmsApi: Application = express();

customCmsApi.get('/api/customCms', (req: Request, res: Response) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(cms);
})

customCmsApi.use(cors(
    {origin: process.env.VERCEL_URL_CORS}
));


export default customCmsApi;