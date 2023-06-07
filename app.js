require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { dbConnect } = require('./config/database');
const app = express();

app.use(cors());
app.use(express.json());

const port = 3000;

app.use('/api', require('./routes'));

app.listen(port, () => {
    console.log('Tu app esta lista por http://localhost:3000');
})

dbConnect();