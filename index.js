const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const markets = require('./market.js');

const app = express();
const port = 8000;
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/markets', (req, res) => {
    res.json(markets.markets);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});