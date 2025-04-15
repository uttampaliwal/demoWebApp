const apm = require('./apm');
const logger = require('./logger');
const express = require('express');
const client = require('prom-client');

const app = express();
const port = process.env.PORT || 3000;
const collectDefaultMetrics = client.collectDefaultMetrics;

collectDefaultMetrics();

app.get('/', (req, res) => {
    logger.info('Home page accessed', {
        userId: req.user?.id,
        path: req.path
    });
    res.send('This is my demo web application.');
});


app.get('/about', (req, res, next) => {
    try {
        res.send('Hello my name is Uttam Paliwal! I am a software engineer and I love to code!');
    } catch (err) {
        next(err);
    }
});

app.get('/contact', (req, res, next) => {
    try {
        res.send('My Contact Number is 7980827701 and my email is uttam232002@gmail.com ');
    } catch (err) {
        next(err);
    }
});

app.get('/metrics', async (req, res) => {
    res.set('Content-Type', client.register.contentType);
    res.end(await client.register.metrics());
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});

app.use((err, req, res, next) => {
    logger.error('Application error', {
        error: err.message,
        stack: err.stack,
        path: req.path,
        timestamp: new Date().toISOString()
    });
    res.status(500).send('Something went wrong');
});

