import express from 'express';
const app = express();
import cors from 'cors';


import connection from "./src/db.js";

try {
    connection.authenticate();
    console.log('DB Connected');
  } catch (error) {
    console.error('DB Failed:', error);
  }

// Server settings
app.use(cors());
app.use(express.static('public'));

app.get('/', function (req: any, res: any) {
    res.send('Hello World!');
});

// APIS I LOVE APIS


app.listen(3000, function () {
    console.log('Server running on port 3000');
});