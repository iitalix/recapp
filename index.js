import express from 'express';
import { profiles } from './routes/profiles.js';

const app = express();

app.use(express.json());

app.get('/test', (_, res) => res.send('This works.'));

app.use('/api/profiles', profiles);

const port = 8080;
const callback = () => console.log(`Server is running on port ${port}`);

app.listen(port, callback);
