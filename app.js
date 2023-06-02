const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

const port = 3000;

app.use('/api', require('./routes'));

app.listen(port, () => {
    console.log('Tu app esta lista por http://localhost:3000');
})