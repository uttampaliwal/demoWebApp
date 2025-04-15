const apm = require('elastic-apm-node').start({
    serviceName: 'demowebapp',
    serverUrl: process.env.APM_SERVER_URL || 'http://apm-server:8200',
    environment: process.env.NODE_ENV || 'production'
});

module.exports = apm;

