const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
const path = require("path");
// middleware
app.use(cors());
app.use(express.json());

// get index page
app.use(express.static(path.join(__dirname, "build")));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});
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
app.listen(3000, () => {});
