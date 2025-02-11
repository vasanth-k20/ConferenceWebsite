﻿using System.Net.Mail;

namespace ConferenceWebSiteICSET
{
    public class ResponseEmail
    {
        public bool responseEmail(string userEmail)
        {
            try
            {
                MailMessage newMail = new MailMessage();
                SmtpClient client = new SmtpClient("smtp.gmail.com");

                // Email is sent from the admin's email
                newMail.From = new MailAddress("vasanthkbit@gmail.com", "Response Email");

                // Admin receives the email
                newMail.To.Add(userEmail);

                newMail.Subject = "Your Email Has Been Received";
                newMail.IsBodyHtml = true;
                newMail.Body = "<h3>Thank you for reaching out to us.</h3>" +
                               "<p>We have received your email and our team will get back to you as soon as possible.</p>" +
                               "<p>Please note: This is an automated message. Do not reply to this email.</p>";

                client.EnableSsl = true;
                client.Port = 587;
                client.Credentials = new System.Net.NetworkCredential("vasanthkbit@gmail.com", "ulnl ekap nkgp skuc");

                // Send the email
                client.Send(newMail);

                return true;
            }
            catch (Exception ex)
            {
                Console.WriteLine("Error - " + ex.Message);
                return false;
            }
        }
    }
}
