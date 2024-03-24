const express = require('express');
const app = express();

require('dotenv').config();

const routes = require('./routes/ImageUploadRouter');

app.use('/', routes);

app.listen(5000, () => {
    console.log('Server running on port 5000');
});
