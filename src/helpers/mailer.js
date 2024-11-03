import nodemailer from 'nodemailer'
import User from '@/models/userModels'
import bcryptjs from 'bcryptjs'


export const sendEmail = async ({email,emailType,userId}) => 
{
    try 
    {
        //create a hashed token
        const hashedToken = await bcryptjs.hash(userId.toString(),10)

        if(emailType === "VERIFY")
        {
            await User.findByIdAndUpdate(userId,
                {verifyToken:hashedToken,
                verifyTokenExpiry:Date.now()+3600000})
        }
        else if(emailType === "RESET")
        {
            await User.findByIdAndUpdate(userId,
                {forgotPasswordToken:hashedToken,forgotPasswordTokenExpiry:
                Date.now()+3600000})
        }

        // Looking to send emails in production? Check out our Email API/SMTP product!
        var transport = nodemailer.createTransport({
            host: "sandbox.smtp.mailtrap.io",
            port: 2525,
            auth: {
              user: "55dfa60e8ac870",
              pass: "f6770dc8400157"
            }
          });


        const mailOptions = 
        {
            from : 'medisoter@gmail.com',
            to : email,
            subject : emailType === "VERIFY" ? "verify your email" : "Reset your password",
            html : `<p>Please click <a href="${process.env.DOMAIN}/verifyemail?token=${hashedToken}">here</a> 
            to ${emailType === "VERIFY" ? "verify your email" : "reset your password"} or copy and paste the link below in your browser <br> ${process.env.DOMAIN}/verifyemail?token=${hashedToken}</p>`

            //to ${emailType === "VERIFY" ? "verify your email" : "reset your password"}
            
        }

        const mailResponse = await transport.sendMail(mailOptions);
        return mailResponse;

            
        
    } 
    catch (error) 
    {
        throw new Error(error.message);
    }
}