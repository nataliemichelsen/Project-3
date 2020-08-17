const nodemailer = require("nodemailer");
const emailer = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  ignoreTLS: false,
  secure: false,
  auth: {
    user: "story.lines.agile@gmail.com",
    pass: "Abcd!234Abcd!234"
  }
});

module.exports = emailer;
