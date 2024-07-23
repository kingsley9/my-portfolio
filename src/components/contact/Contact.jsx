import React from 'react';

import { Typography } from '@mui/material';
import { useState, useRef } from 'react';
import './contact.scss';

import emailjs from 'emailjs-com';
function Contact() {
  const form = useRef();
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const msg = { email, message };
      // Send message to my email

      emailjs.init('XaePIeTAi7kCXXA9V');
      emailjs.send('service_e0h05iv', 'template_u388ojk', msg);
      setMessage('');
      setEmail('');
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
          align="center"
          variant="h3"
          component="div"
          fontWeight={'bold'}
        >
          Contact Me
        </Typography>
        <form ref={form} onSubmit={handleSubmit}>
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
          <button type="submit">
            <Typography
              gutterBottom
              align="center"
              variant="button"
              component="div"
              fontWeight={'bold'}
            >
              Send
            </Typography>
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
