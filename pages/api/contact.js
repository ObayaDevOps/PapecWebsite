import nodemailer from "nodemailer"

//make this a promise: https://stackoverflow.com/questions/60684227/api-resolved-without-sending-a-response-in-nextjs

//https://www.getmailbird.com/setup/access-bluehost-via-imap-smtp
//https://clean.email/blog/email-settings/bluehost-email-settings


//tls - https://stackoverflow.com/questions/38191770/nodemailer-2-x-configuration-for-office-365-direct-send

export default async (req, res) => {
  const { Name, Email, Message } = req.body;
  const transporter = nodemailer.createTransport({
    host: "smtp.office365.com",
    port: 587,
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD
    },
    tls: {
        ciphers: 'SSLv3'
    }
  });
const data={ from: Email,
    to: process.env.RECIPIENT_ADDRESS,
    subject: `Tax Edge Advisory Contact form submission from ${Name}`,
      html: `<h1>${Name} Has contacted you</h1>
      <p>You have a contact form submission</p><br>
        <p><strong>Email: </strong> ${Email}</p><br>
        <p><strong>Message: </strong> ${Message}</p><br>
      `}

      transporter.sendMail(data, function (err, info) {
        if(err){
            console.log(err)
            console.log("DID NOT SEND !")
            console.log("UN: " + process.env.SMTP_USER)
            console.log("UN: " + process.env.SMTP_PASSWORD)


        }
        else
        console.log("INFO SEND !") // at this point, tell the user message has successfully sent
        //toast
        //chakra tenplate modal ?

          console.log(info)
          res.send("success!!")
      })
};