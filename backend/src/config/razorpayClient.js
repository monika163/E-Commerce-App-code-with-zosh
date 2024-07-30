const Razorpay = require("razorpay");

apiKey = process.env.apikey;
apiSecret = process.env.apisecret;

const razorpay = new Razorpay({
  key_id: apiKey,
  key_secret: apiSecret
});

module.exports = razorpay;
