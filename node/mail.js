const nodemailer = require("nodemailer");

const HOST = "4fcd0ab4-eu-de.lb.appdomain.cloud"
const PORT = 25
const FROM = "admin@jorgehernandezramirez.com"
const TO = ["root@jorgehr7.com", "root@krzysztof.com"]
const SUBJECT = "Hello ✔"
const TEXT = "Hello world?"
const HTML = "<b>Hello world?</b>"

async function sendmail() {
  let transporter = nodemailer.createTransport({
    host: HOST,
    port: PORT,
    secure: false,
    tls: {
      rejectUnauthorized: false
    }
  });

  let to = TO[getRandomNumberBetween0And1()];
  //console.log("Sending to %s", to)

  return transporter.sendMail({
    from: FROM,
    to: to,
    subject: SUBJECT,
    text: TEXT, 
    html: HTML
  });
}

function getRandomNumberBetween0And1(){
  return Math.floor(Math.random() * 2)
}

module.exports = sendmail
