const express = require("express");
const cors = require("cors");
const sendSMS = require("./utils/sendSMS");

require("dotenv").config();

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.post("/send-sms", async (req, res) => {
  const { phone, message } = req.body;
  try {
    await sendSMS(phone, message);
    res.json({ success: true });
  } catch (error) {
    res.json({ success: false, error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
