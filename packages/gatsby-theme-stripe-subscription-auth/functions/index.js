const functions = require('firebase-functions')
const Stripe = require('stripe')(functions.config().stripesecret.key, {
  maxNetworkRetries: 4,
})

// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require('firebase-admin')
admin.initializeApp()

exports.createUserPermission = functions.https.onRequest(async (req, res) => {
  const { object } = req.body.data

  const customer = await Stripe.customers.retrieve(object.customer)
  const email = customer.email

  const firebaseUser = await admin.auth().getUserByEmail(email)
  const displayName = firebaseUser.displayName

  const plan = object.display_items[0].plan.nickname

  await admin
    .firestore()
    .collection('/users')
    .add({ email: email, plan, displayName: displayName })

  res.send('Added user to db')
})
