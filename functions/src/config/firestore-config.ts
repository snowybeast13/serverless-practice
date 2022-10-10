import * as admin from "firebase-admin";

// var admin = require("firebase-admin");

const serviceAccount = require("C:/Users/umiric/Projects/serverless-zadatak/functions/serviceAccount.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

export default db;
