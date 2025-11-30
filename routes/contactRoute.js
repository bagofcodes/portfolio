const router = require('express').Router();
const nodemailer = require('nodemailer');

router.post('/', async (req, res) => {
  const { name, email, message } = req.body;

  // 1. Validate input
  if (!name || !email || !message) {
    return res.status(400).json({ msg: "Please fill all the fields." });
  }

  // 2. Optional: validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ msg: "Please enter a valid email address." });
  }

  // 3. Configure nodemailer transporter
  const smtpTransporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: 'shaw.anshu@gmail.com',
      pass: process.env.PASS, // use Gmail App Password
    }
  });

  // 4. Mail options
  const mailOptions = {
    from: 'shaw.anshu@gmail.com',
    replyTo: email,
    to: 'shaw.anshu@gmail.com',
    subject: `Message For Hiring from ${name}`,
    html: `
      <h3>Information About the Recruiter</h3>
      <ul>
        <li>Name: ${name}</li>
        <li>Email: ${email}</li>
      </ul>
      <h3>Message</h3>
      <p>${message}</p>
    `
  };

  // 5. Send mail and handle errors
  try {
    await smtpTransporter.sendMail(mailOptions);
    res.status(200).json({ msg: "Thank you for reaching out! Will revert back shortly." });
  } catch (err) {
    console.error("Mail Error:", err);
    res.status(500).json({ msg: "Failed to send email. Please try again later." });
  }
});

module.exports = router;