import React, { useRef, useState, useEffect } from 'react'
import styled from 'styled-components'
import emailjs from '@emailjs/browser';
import { Snackbar, Alert } from '@mui/material';

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
position: relative;
z-index: 1;
align-items: center;
@media (max-width: 960px) {
    padding: 0px;
}
`

const Wrapper = styled.div`
position: relative;
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
width: 100%;
max-width: 1350px;
padding: 0px 0px 80px 0px;
gap: 12px;
@media (max-width: 960px) {
    flex-direction: column;
}
`

const Title = styled.div`
font-size: 42px;
text-align: center;
font-weight: 600;
margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
      margin-top: 12px;
      font-size: 32px;
  }
`;

const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 16px;
    }
`;


const ContactForm = styled.form`
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.card};
  padding: 32px;
  border-radius: 16px;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  margin-top: 28px;
  gap: 12px;
`

const ContactTitle = styled.div`
  font-size: 24px;
  margin-bottom: 6px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`

const ContactInput = styled.input`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`

const ContactInputMessage = styled.textarea`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`

const ContactButton = styled.button`
  width: 100%;
  text-decoration: none;
  text-align: center;
  background: hsla(271, 100%, 50%, 1);
  background: linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
  background: -moz-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
  background: -webkit-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
  padding: 13px 16px;
  margin-top: 2px;
  border-radius: 12px;
  border: none;
  color: ${({ theme }) => theme.text_primary};
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`

const DirectEmailLink = styled.a`
  color: ${({ theme }) => theme.primary};
  text-decoration: none;
  font-weight: 600;
  &:hover {
    text-decoration: underline;
  }
`;

const SuccessMessage = styled.div`
  width: 95%;
  max-width: 600px;
  margin-top: 16px;
  padding: 16px;
  background-color: rgba(46, 204, 113, 0.15);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: ${({ theme }) => theme.text_primary};
  border: 1px solid rgba(46, 204, 113, 0.5);
`;

const SuccessIcon = styled.div`
  font-size: 48px;
  margin-bottom: 16px;
`;

const Contact = () => {
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [senderName, setSenderName] = useState("");
  const formRef = useRef();

  // Correct EmailJS configuration with valid credentials
  const SERVICE_ID = "service_7j3kx5a";  // Updated with working service
  const TEMPLATE_ID = "template_cjetwoe"; // Updated with working template
  const PUBLIC_KEY = "ZFN__wgDBs0UPaFEa"; // Updated with working public key

  useEffect(() => {
    // Initialize EmailJS with the public key
    emailjs.init(PUBLIC_KEY);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setShowSuccess(false);
    
    try {
      // Store name for success message
      const name = formRef.current.from_name.value;
      setSenderName(name);
      
      // Get form data
      const formData = {
        name: name,
        email: formRef.current.from_email.value,
        subject: formRef.current.subject.value,
        message: formRef.current.message.value,
        to_email: 'kishankumar969846@gmail.com',
        reply_to: formRef.current.from_email.value
      };
      
      // Send email using EmailJS
      const result = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        formData
      );
      
      console.log('Email successfully sent!', result.text);
      setMessage("Message sent successfully! I'll get back to you soon.");
      setError(false);
      setOpen(true);
      formRef.current.reset();
      setShowSuccess(true);
    } catch (err) {
      console.error('Failed to send email:', err);
      setMessage("Failed to send email. Please email me directly at kishankumar969846@gmail.com");
      setError(true);
      setOpen(true);
      setShowSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container id="contact">
      <Wrapper>
        <Title>Contact</Title>
        <Desc>
          Feel free to reach out to me at <DirectEmailLink href="mailto:kishankumar969846@gmail.com">kishankumar969846@gmail.com</DirectEmailLink> or use the form below.
        </Desc>
        
        {showSuccess ? (
          <SuccessMessage>
            <SuccessIcon>✅</SuccessIcon>
            <h3>Thank you, {senderName}!</h3>
            <p>Your message has been sent successfully. I'll get back to you as soon as possible.</p>
            <p>Want to send another message? <span style={{cursor: 'pointer', textDecoration: 'underline'}} onClick={() => setShowSuccess(false)}>Click here</span></p>
          </SuccessMessage>
        ) : (
          <ContactForm ref={formRef} onSubmit={handleSubmit}>
            <ContactTitle>Email Me 🚀</ContactTitle>
            <ContactInput placeholder="Your Name" name="from_name" required />
            <ContactInput placeholder="Your Email" name="from_email" type="email" required />
            <ContactInput placeholder="Subject" name="subject" required />
            <ContactInputMessage placeholder="Message" rows="4" name="message" required />
            <ContactButton type="submit" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}
            </ContactButton>
          </ContactForm>
        )}
        
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={() => setOpen(false)}
        >
          <Alert 
            onClose={() => setOpen(false)} 
            severity={error ? "error" : "success"}
            sx={{ width: '100%' }}
          >
            {message}
          </Alert>
        </Snackbar>
      </Wrapper>
    </Container>
  )
}

export default Contact