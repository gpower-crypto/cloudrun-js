const express = require('express');
const { Client } = require('@elastic/elasticsearch');
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const app = express();
const port = process.env.PORT || 3000;

// Elasticsearch setup variables
const esHost = process.env.ELASTICSEARCH_HOST;
const esUsername = process.env.ELASTICSEARCH_USERNAME;
const esPassword = process.env.ELASTICSEARCH_PASSWORD;
const esIndexName = process.env.ELASTICSEARCH_INDEXNAME;
const logToElk = process.env.LOG_TO_ELK === 'true';

// Elasticsearch client setup
let esClient;
if (logToElk) {
    esClient = new Client({
      node: `http://${esHost}:9200`,
      auth: {
        username: esUsername,
        password: esPassword,
      }
    });
    console.log("Logs will be directly sent to Elasticsearch")
} else {
    console.log("Logs are not being sent to Elasticsearch")
}

// Helper function to send log to Elasticsearch
const logToElasticsearch = async (logMessage) => {
    if (!logToElk) return; // Skip if logging to ELK is disabled

    try {
        await esClient.index({
            index: esIndexName,
            body: {
                timestamp: new Date(),
                message: logMessage,
                level: 'info',
            }
        });
        console.log('Log successfully sent to Elasticsearch');
    } catch (error) {
        console.log('Error sending log to Elasticsearch:', error);
    }
};

app.get('/', (req, res) => {
    res.send('Welcome to the Express API!');
    logToElasticsearch('Welcome to the Express API!');
    console.log('Welcome to the Express API!');
});

app.get('/hello', (req, res) => {
    res.send('Hello, World!');
    logToElasticsearch('Hello, World!');
    console.log('Hello, World!');
  });

app.listen(port, () => {
    logToElasticsearch(`Express API listening at http://localhost:${port}`);
    console.log(`Express API listening at http://localhost:${port}`);
});