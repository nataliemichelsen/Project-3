const nodemailer = require("nodemailer");
const emailer = nodemailer.createTransport({
  service: "Gmail",
  host: 'smtp.gmail.com',
  port: 465,
  secure: true, 
  auth: {
    user: "story.lines.agile@gmail.com",
    pass: "Abcd!234"
  }
});

module.exports = emailer;
