import express from 'express';
import { createClient } from 'redis';

const app = express();
const port = 3000;
const domain = 'localhost';

const client = createClient({
    url: 'redis://qwq.sh:6379'
});
client.on('error', (err) => {
    console.log('Redis Client Error ' + err);
});


app.use(express.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', `*`);
    res.header('Access-Control-Allow-Methods', 'GET, POST');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});


app.listen(port, async () => {
    await client.connect();
    console.log('Connected to redis.');
    console.log(`Server running at http://${domain}:${port}`);
});

app.post('/create', async (req, res) => {
    const randomId = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    const idSet = JSON.parse(await client.get('idSet') ?? '[]');
    idSet.push(randomId);
    await client.set('idSet', JSON.stringify(idSet));
    res.send({ id: randomId });
});

app.get('/all', async (req, res) => {
    const idSet = JSON.parse(await client.get('idSet') ?? '[]');

    const data: any[] = [];
    for (const id of idSet) {
        const points = Number.parseInt(await client.get(id) ?? '0');
        data.push({ id, points });
    }

    res.send(data);
});