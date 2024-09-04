import { useState, useEffect } from 'react';
import { CONTACT } from '../constants'
import '../css/Contact.css'
import { motion } from 'framer-motion';

export const Contactus = () => {
    const [restrictClicks, setRestrictClicks] = useState(false);
    const sendEmail = async (e) => {
        e.preventDefault();
        setRestrictClicks(true);
    
        const formData = new FormData(e.target);
    
        try {
            const response = await fetch('https://my-portfolio-serverapi-50021942498.development.catalystappsail.in/send', {
                method: 'POST',
                body: JSON.stringify({
                    fromName: formData.get('from_name'),
                    fromEmail: formData.get('from_email'),
                    message: formData.get('message')
                }),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
    
            if (response.ok) {
                alert('Message sent successfully!');
            } else {
                alert('Failed to send message.');
            }
        } catch (error) {
            alert('Error: ' + error.message);
        }
        finally {
            setRestrictClicks(false);
        }
    };
    

    useEffect(() => {
        const inputs = document.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.addEventListener('input', (e) => {
                if (input.value.length > 0) {
                    input.classList.add('active');
                } else {
                    input.classList.remove('active');
                }
            });
        });
        return () => {
            inputs.forEach(input => {
                input.removeEventListener('input', () => { });
            });
        };
    }, []);
    return (
        <div className='border-b border-neutral-900 pb-20'>
            <motion.div initial={{ opacity: 0, y: -100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.5 }} className='contact-scroll-container my-10 bg-red-600'>
                <p className='contact-scrolling-text'>Feel free to reach out to me at any time and I am open to discussing any projects or opportunities.</p>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: -100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.5 }} className='my-10 text-center text-4xl'>Get in <span className="text-neutral-500">Touch</span></motion.h1>
            <div className='flex justify-around contact-wrapper'>
                <motion.div initial={{ x: -100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }} className=' tracking-tighter'>
                    <p className='my-4'>{CONTACT.address}</p>
                    <p className='my-4'>{CONTACT.phoneNo}</p>
                    <a href={`mailto:${CONTACT.email}`} className='border-b'>{CONTACT.email}</a>
                </motion.div>
                <motion.div initial={{ x: 100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }} className='text-center contact-form'>
                    <form onSubmit={sendEmail}>
                        <div className='input-wrapper'>
                            <input type='text' id='name' name='from_name' required />
                            <label htmlFor='name'>Name</label>
                        </div>
                        <div className='input-wrapper'>
                            <input type='email' id='email' name='from_email' required />
                            <label htmlFor='email'>Email</label>
                        </div>

                        <div className='input-wrapper'>
                            <textarea id='message' name='message' rows='4' required></textarea>
                            <label htmlFor='message'>Message</label>
                        </div>
                        <button type='submit' disabled={restrictClicks}>{
                            restrictClicks ? 'Sending...' : 'Send'
                        }</button>
                    </form>
                </motion.div>
            </div>
        </div>
    )
}
