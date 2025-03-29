import express from 'express';
import bodyParser from 'body-parser';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config({ path: __dirname + '/.env' });

const app = express();
const port = 3001;


app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.get('/hamzu',(req,res)=>{
    res.send('hamza bukhari')
})

app.post('/send-email', async (req, res) => {
  const { name, email, contact, address, message } = req.body;

  const nodemailer = require('nodemailer');
  const dotenv = require('dotenv');
  dotenv.config();
  
  
  const transporter = nodemailer.createTransport({
      service: process.env.SERVICE,
      auth: {
          user: process.env.EMAIL,
          pass: process.env.PASSWORD
      }
  });

  const mailOptions = {
    from: process.env.EMAIL,
    to: process.env.RECEIVER_EMAIL, 
    subject: 'Contact Form Submission',
    text: `Name: ${name}\nEmail: ${email}\nContact: ${contact}\nAddress: ${address}\nMessage: ${message}`,
  };


  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);
    res.status(200).send('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send('Error sending email');
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});