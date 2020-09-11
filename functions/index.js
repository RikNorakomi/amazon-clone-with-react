const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const express = require("express");
const cors = require("cors");

// Second param is stripe secret key
const stripe = require("stripe")(
  "sk_test_51HQAQVFNn4USStiHHaRCBqKPPmM7WUJyW3ftrK7QLzIQXTj1ryLsBgsoyLRyD52HWoybP5v0pSwwDlhKRDNYqKnQ00DLuHnLDm"
);

// API

// App config
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get("/", (req, res) => res.status(200).send("this is working !!"));
app.get("/qazi", (req, res) => res.status(200).send("Whats up Qazi !!"));
app.post("/payments/create", async (req, res) => {
  const total = req.query.total; // amount in $ sub units
  console.log("payment request received. Total >>> ", total);
  const paymentIntent = await stripe.paymentIntent.create({
    amount: total,
    currency: "usd",
  });

  // 201 is OK plus something is created
  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// Listen command
exports.api = functions.https.onRequest(app);

// Example endpoint
// http://localhost:5001/clone-with-login-stripe/us-central1/api
