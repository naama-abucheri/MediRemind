// utils/sendSMS.js
const twilio = require("twilio");
require("dotenv").config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioNumber = process.env.TWILIO_PHONE_NUMBER;

const client = new twilio(accountSid, authToken);

const sendSMS = async (to, message) => {
  try {
    const msg = await client.messages.create({
      body: message,
      from: twilioNumber,
      to: to,
    });

    console.log("✅ Message sent:", msg.sid);
  } catch (error) {
    console.error("❌ Failed to send message:", error.message);
  }
};

module.exports = sendSMS;
require("dotenv").config();
const sendSMS = require("./sendSMS");
const { getUpcomingAppointments } = require("../appointments");