"use server"

import ContactFormEmail from "@/email/ContactFormEmail";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const SendEmail = async (formData) => {
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    let data;

    try {
        data = await resend.emails.send({
            from: "Portfolio msg <onboarding@resend.dev>",
            to: "18akashyadav@gmail.com",
            subject: "Message from Portfolio Contact Form",
            reply_to: email,
            // text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
            react: <ContactFormEmail name={name} email={email} message={message} />
        })
    } catch (error) {
        return {
            error
        };
    }
    return {
        data,
    }

}