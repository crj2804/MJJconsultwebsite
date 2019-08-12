const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post("/contact", (req, res) => {
  nodemailer.createTestAccount((err, account) => {
    const htmlEmail = `
    <h3> Contact Details </h3>
    <ul>
      <li> name: ${req.body.name}</li>
      <li> email: ${req.body.email}</li>
      </ul>
      <h3> Message </h3>
      <p>${req.body.message}</p>
    `;

    let transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      auth: {
        user: "hudson.macejkovic22@ethereal.email",
        pass: "wVgHBkKt6rqEnMvzya"
      }
    });
    let mailOptions = transporter.sendMail({
      from: "test@testaccount.com",
      to: "hudson.macejkovic22@ethereal.email",
      replyTo: "test@testaccount.com",
      subject: "New Message",
      text: req.body.message,
      html: htmlEmail
    });

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        return console.log(err);
      }
      console.log("Message sent: %s", info.message);
      console.log("Message URL: %s", nodemailer.getTestMessageUrl(info));
    });
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
