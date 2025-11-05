const express = require('express');
const morgan = require('morgan');
const errorHandler = require('./errorHandler');


const heroRoutes = require('./routes/heroRoutes');
const heroCrudRoutes = require('./routes/heroCrudRoutes');


const app = express();
const port = 3000;

app.use(morgan('dev'));
app.use(express.json());

const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));
app.use('/hero', heroRoutes);
app.use('/hero-crud', heroCrudRoutes);

app.listen(port, () => {
    console.log(`Listening on port http://localhost:${port}`);
})
app.use(errorHandler);