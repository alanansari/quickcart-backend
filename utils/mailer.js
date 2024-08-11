const nodemailer = require('nodemailer');

const sendmail = async (email,otp) => {
  try{
    const msg = {
        from: 'QuickCart"spaces.inc.si@gmail.com"',
        to: email,
        subject: `${otp} is your OTP from QuickCart`,
        html: `
        <div
          style="max-width: 90%; margin: auto; padding-top: 20px"
        >
          <center><h1>Welcome to <span style="color:orange;">QuickCart!</span></h1></center>
          <h3>We are glad to have you!</h3>
          <p style="margin-bottom: 30px;">Please enter this OTP to proceed further</p>
          <h1 style="font-size: 40px; letter-spacing: 2px; text-align:center; color:orange;">${otp}</h1>
     </div>
      `,
    }

    const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth:{
                user: process.env.MAIL_ID,
                pass: process.env.MAIL_PASS
            },
            port: 456,
            host: "smtp.gmail.com"
    });

    await transporter.sendMail(msg);

    return {success:true};

  }catch(err){
    return {success:false, error:err.message || "Error sending mail"};
  }
}

module.exports = {sendmail};