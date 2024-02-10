var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "rsadiki99@gmail.com",
    pass: "2023@rufaydah",
  },
});

var mailOptions = {
  from: "rsadiki99@gmail.com",
  to: "reacharuna302@gmail.com",
  subject: "Sending Email using Node.js",
  text: "That was easy!",
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
