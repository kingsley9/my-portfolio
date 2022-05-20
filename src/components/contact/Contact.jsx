import {
  Button,
  Box,
  Card,
  CardActions,
  CardContent,
  Typography,
  CardActionArea,
} from "@mui/material";
import { useState } from "react";
import "./contact.scss";
function Contact() {
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = { email, message };
    console.log(msg);
  };
  return (
    <div className="contact" id="contact">
      <div className="wrapper">
        <Typography
          gutterBottom
          fontFamily={"Montserrat"}
          align="center"
          variant="h4"
          component="div"
        >
          Contact Me
        </Typography>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            required
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            placeholder="Message"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button type="submit">Send</button>
          {/* {<span>Thanks I'll reply ASAP!</span>} */}
        </form>
      </div>
    </div>
  );
}

export default Contact;
