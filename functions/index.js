const functions = require('firebase-functions');
const admin = require('firebase-admin');
const server = require('./src/server');

admin.initializeApp();

// Cloud Functions
const api = functions.https.onRequest(server);

module.exports = { api };
