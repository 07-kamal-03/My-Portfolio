import { useEffect, useRef } from 'react'
import '../css/Contact.css'
import linkedin from '../assets/linkedin.png'
import instagram from '../assets/instagram.png'
// import emailjs from '@emailjs/browser';

export const Contact = () => {

    // const form = useRef();

    // const sendEmail = (e) => {
    //     e.preventDefault();

    //     emailjs
    //         .sendForm('service_yxpso7k', 'template_zv37kxr', form.current, {
    //             publicKey: 'LlIB7sdxlcNgeHoNf',
    //         })
    //         .then(
    //             () => {
    //                 alert('SUCCESS!');
    //             },
    //             (error) => {
    //                 alert('FAILED...', error.text);
    //             },
    //         );
    // };
    const sendEmail = async (e) => {
        e.preventDefault();
    
        const formData = new FormData(e.target);
    
        try {
            const response = await fetch('http://localhost:5000/send', {
                method: 'POST',
                body: JSON.stringify({
                    from_name: formData.get('from_name'),
                    from_email: formData.get('from_email'),
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
    return (<>
        <h1 className='contact-title'>Contact Me</h1>
        <div className='contact-container'>
            <div className='contact-info'>
                <div className='contact-scroll-container'>
                    <p className='contact-scrolling-text'>Feel free to reach out to me at any time and I am open to discussing any projects or opportunities</p>
                </div>
                <p><a href='mailto:kamalprs50@gmail.com'>kamalprs50@gmail.com</a></p>
                <p>+91 9344821633</p>
                <p>Salem,</p>
                <p>Tamil Nadu,</p>
                <p>636116</p>
                <ul>
                    <li><a href='https://www.linkedin.com/in/kamal-raj-b0a829218/' target='_blank'><img src={linkedin} /></a></li>
                    <li><a href='https://www.instagram.com/07_kamal_03' target='_blank'><img src={instagram} /></a></li>
                </ul>
                <p></p>
            </div>
            <div className='contact-form'>
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
                    <button type='submit'>Submit</button>
                </form>
            </div>
        </div>
    </>
    )
}
