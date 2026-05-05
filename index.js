var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var cors = require('cors');

const dotenv = require('dotenv');
dotenv.config();

const creds =  { USER: process.env.EMAIL, PASS: process.env.PASS }
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;

var transport = {
    host: 'smtp.gmail.com', // Don’t forget to replace with the SMTP host of your provider
    port: 587,
    secure: false,
    auth: {
    user: creds.USER,
    pass: creds.PASS
  }
}

var transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});

router.post('/send', (req, res, next) => {
  var name = req.body.name
  var email = req.body.email
  var message = req.body.message
  var content = `Name: ${name} \n Email: ${email} \n Message: \n ${message} `

  var mail = {
    from: creds.USER,
    to: creds.USER,
    subject: `New Message from ${name}`,
    text: content
  }

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      console.log(err)
      res.json({
        status: 'fail'
      })
    } else {
      console.log('email sent')
      res.json({
        status: 'success'
     })
 
     transporter.sendMail({
       from: creds.USER,
       to: email,
       subject: "Thank you for reaching out!",
       text: `Thank you for contacting me, I will be in touch!\n\nForm details\nName: ${name}\n Email: ${email}\n Message: ${message}`
     }, function(error, info){
       if(error) {
         console.log(error);
       } else{
         console.log('Message sent: ' + info.response);
       }
     });
    }
  })
})

const app = express()
app.use(cors())
app.use(express.json())
app.use('/', router)
app.listen(process.env.PORT || 3002)