import express from 'express';
import { connect } from 'mongoose';
import { User } from '../models/userModel';
const app = express();
const port = 3000;
const domain = 'localhost';

app.use(express.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', `*`);
    res.header('Access-Control-Allow-Methods', 'GET, POST');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});


app.listen(port, async () => {
    await connect(process.env.MONGO_URI || '').then(() => {
        console.log(`Connected to MongoDB`);
    }).catch((err) => {
        console.log(`Error connecting to MongoDB: ${err}`);
    });
    console.log(`Server running at http://${domain}:${port}`);
});

app.post('/create', async (req, res) => {
    const randomId = Math.floor(Math.random() * 1000);

    const user = new User({
        userId: randomId,
        score: 0,
    });
    await user.save();

    res.send({ id: user.userId });
});

app.get('/all', async (req, res) => {
    const users = await User.find();

    users.sort((a, b) => {
        return b.score - a.score;
    });

    res.send(users);
});

app.post('/submit/:id/:type', async (req, res) => {
    let addScore = 0;
    const { id, type } = req.params;

    if (type === 'win')
        addScore = 6;
    else if (type === 'draw')
        addScore = 3;
    else if (type === 'loss')
        addScore = 1;

    const user = await User.findOne({ userId: id });

    if (!user) {
        return res.status(404).send({ error: 'User not found' });
    }

    user.score = user.score + addScore;
    await user.save();
    res.send({ success: true });
});