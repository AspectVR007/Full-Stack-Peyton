import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer'

dotenv.config();
const app = express();


const PORT = 5000;

app.use(cors());

app.use(express.json());

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
});





app.get('/test', (req, res) => {
    res.json({ message: "YOOOOO" });
});





app.post('/sendmail', async (req, res) => {
    try {
        const { email, fname, lname, message } = req.body;

        if(!email || !message){
            return res.status(400).json({ message: "Email and message are required" });
        }

        await transporter.sendMail({
            from: email,
            to: process.env.SMTP_USER,
            subject: `Message from ${fname} ${lname}`,
            text: message,
        });


    } catch(error) {
        console.error("Email error:", error);

        return res.status(500).json({
            message: "Failed to send email."
        });
    }
});










app.listen(PORT, () => {
    console.log("We are running on port " + PORT);
});

