const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
// middleware
app.use(cors());
app.use(express.json());
// ROUTES
// Create a message
app.post("/contact", async (req, res) => {
  try {
    const { email, message } = req.body;
    const newMessage = await pool.query(
      "INSERT INTO contact (email,message) VALUES($1, $2) RETURNING * ",
      [email, message]
    );
    res.json(newMessage.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});
// Get all messages
app.get("/contact", async (req, res) => {
  try {
    const allMessages = await pool.query("SELECT * FROM contact");
    res.json(allMessages.rows);
  } catch (err) {
    console.error(err.message);
  }
});
// Get a message
app.get("/contact/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const message = await pool.query(
      "SELECT * FROM contact WHERE message_id = $1",
      [id]
    );
  } catch (err) {
    console.error(err.message);
  }
});
app.listen(5000, () => {
  console.log("server started on port 5000");
});
