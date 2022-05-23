import { Typography } from "@mui/material";
import { useState } from "react";
import "./contact.scss";
function Contact() {
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const msg = { email, message };
      // Send post request to firebase and store msg in database

      // const response = await fetch("http://localhost:3000/contact", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(msg),
      // });
      // console.log(response);
      setMessage("");
      setEmail("");
      alert("Thanks I'll get back to you ASAP!");
    } catch (err) {
      console.error(err.message);
    }
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
