import express from 'express';
const app = express();
import cors from 'cors';

import connection from "./src/db.js";

connection.once('open', () => console.log('Database Connected'))
connection.on('error', () => console.error('Database Error'))

// Server settings
app.use(cors());
app.use(express.static('public'));

app.get('/', function (req: any, res: any) {
    res.send('Hello World!');
});

// APIS I LOVE APIS

app.post('/api/v1/visit', function (req: any, res: any) {

});

app.listen(3000, function () {
    console.log('Server running on port 3000');
});