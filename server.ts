const express = require('express');
const app = express();
const cors = require('cors');

// Server settings
app.use(cors());
app.use(express.static('public'));

app.get('/', function (req: any, res: any) {
    res.send('Hello World!');
});


app.listen(3000, function () {
    console.log('Server running on port 3000');
});