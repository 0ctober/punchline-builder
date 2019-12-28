var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
  auth: {
    user: 'jc.idjell@gmail.com',
    // pass: '13378yESwEcAN'
  }
});

var mailOptions = {
  from: 'jc.idjell@gmail.com',
  to: 'jc.idjell@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});