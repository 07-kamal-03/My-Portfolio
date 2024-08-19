package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/send")
@CrossOrigin(origins = "*")
public class EmailController {  

    @Autowired
    private JavaMailSender javaMailSender;

    @PostMapping
    public String sendMail(@RequestBody EmailRequest emailRequest) {
        try {
            SimpleMailMessage message = new SimpleMailMessage();
            message.setFrom(emailRequest.getFromEmail());
            message.setTo("kamalprs50@gmail.com");  // Change to your email
            message.setSubject("New Contact Form Submission");
            message.setText("Name: " + emailRequest.getFromName() + "\n" +
                            "Email: " + emailRequest.getFromEmail() + "\n" +
                            "Message: " + emailRequest.getMessage());
            javaMailSender.send(message);
            return "Email Sent!";
        } catch (Exception e) {
            return "Error: " + e.getMessage();
        }
    }
}
