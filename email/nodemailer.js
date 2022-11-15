// const nodemailer = require("nodemailer");

// const transporter = nodemailer.createTransport({
//   host: "",
//   tls: { rejectUnauthorized: false }, //turns security of as cheap server
//   port: 587,
//   secure: false, //allow use of port 587 must be true if port 465
//   auth: {
//     user: "",
//     pass: "",
//   },
// });

// function sendEmail(toAddress, subject, content) {
//   const mailOptions = {
//     from: english.email,
//     to: toAddress,
//     subject: subject,
//     text: content,
//   };

//   transporter.sendMail(mailOptions, (error, info) => {
//     console.log(error, info);
//   });
// }

// module.exports = sendEmail;
