const express = require('express');
const nodemailer = require('nodemailer');
const multer = require('multer');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

const upload = multer({ dest: 'uploads/' });



const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', 
  password: '', 
  database: 'recrutement' 
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database');
});



const transporter = nodemailer.createTransport({
  host: 'smtp.zoho.com',
  port: 587,
  secure: false,
  auth: {
    user: 'digiup@zohomail.com',
    pass: 'aya2024.'
  }
});


const handleFormSubmission = (req, res) => {
  console.log('Received form data:', req.body);
  console.log('Received file:', req.file);

  if (!req.file) {
    return res.status(400).send('No file uploaded');
  }

  const { name, address, city, postalCode, email, phone, gender, selectedJob } = req.body;
  const cvPath = req.file.path;

  const query = `
    INSERT INTO candidats (nom, adresse, ville, code_postal, email, telephone, sexe, offre, cv)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(query, [name, address, city, postalCode, email, phone, gender, selectedJob, cvPath], (err, results) => {
    if (err) {
      console.error('Error inserting data into the database:', err);
      return res.status(500).send('Error saving data to the database');
    }

    console.log('Data saved to the database:', results);

  
    const mailOptions = {
      from: 'digiup@zohomail.com',
      to: 'digiuptest@gmail.com',
      subject: 'New Job Application',
      text: `
        Name: ${name}
        Address: ${address}
        City: ${city}
        Postal Code: ${postalCode}
        Email: ${email}
        Phone: ${phone}
        Gender: ${gender}
        Selected Job: ${selectedJob}
      `,
      attachments: req.file ? [{ path: req.file.path, filename: req.file.originalname }] : []
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
        res.status(500).send('Error sending email');
      } else {
        console.log('Email sent:', info.response);
        res.status(200).send('Form submitted successfully');
      }
    });
  });
};



const handleContactFormSubmission = (req, res) => {
  const { name, email, subject, message } = req.body;

  const mailOptions = {
    from: 'digiup@zohomail.com',
    to: 'digiuptest@gmail.com',
    subject: subject || 'New Contact Form Message',
    text: `
      Name: ${name}
      Email: ${email}
      Message: ${message}
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending contact form email:', error);
      return res.status(500).json({ success: false, error: 'Error sending email' });
    } else {
      console.log('Contact form email sent:', info.response);
      return res.status(200).json({ success: true, message: 'Message sent successfully' });
    }
  });
};

app.post('/submit', upload.single('cv'), handleFormSubmission);

app.post('/contact', handleContactFormSubmission);

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
