import { React, useState } from 'react';
import '../../css/prefixed/Contact.css';
import axios from 'axios';

function Contact() {
    const [contactForm, setContactForm] = useState({
        fullname: "",
        email: "",
        message: ""
    });
    const [isFormSucces, setIsFormSucces] = useState(null);
    const { fullname, email, message } = contactForm;

    const onSubmit = async e => {
        e.preventDefault();
        resetForm();
        try {
            const newContact = {
                fullname,
                email,
                message
            }

            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            };

            const body = JSON.stringify(newContact);

            const res = await axios.post('/send', body, config);
            if (res.status === 400) {
                setIsFormSucces(false);
            } else {
                setIsFormSucces(true);
            }
        } catch (err) {
            console.log(err);
        }
    }

    const onChange = (e) => {
        setContactForm({ ...contactForm, [e.target.id]: e.target.value });

    }

    const Message = () => {
        if (isFormSucces) {
            return (<p className="message">Message sent successfully, Thank You !</p>);
        } else {
            return null;
        }
    }

    const resetForm = () => {
       
        setContactForm({
            fullname: "",
            email: "",
            message: ""
        });
    }

    return (
        <section id="contact">
            <h1 id="contact-title">Get in touch</h1>
            <h3 id="contact-caption">If you want to get in touch, talk to me about a project collaboration or just say hi,
            fill up the form below or send an email to <a href="mailto:contact@nicolasdenorme.fr" id="mailto">contact@nicolasdenorme.fr</a> and let's talk.</h3>
            <form action="" id="form" method="POST" onSubmit={e => onSubmit(e)}>
                <div className="form-container">
                    <label htmlFor="fullname">Fullname</label>
                    <input type="text" id="fullname" onChange={e => onChange(e)} value={fullname} placeholder="Your fullname" required/>
                </div>
                <div className="form-container">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" onChange={e => onChange(e)} value={email} placeholder="Your email" required/>
                </div>
                <div className="form-container">
                    <label htmlFor="message">Message</label>
                    <textarea name="" id="message" cols="30" rows="15" onChange={e => onChange(e)} value={message} placeholder="Your awesome message" required></textarea>
                </div>
                <Message />
                <button type="submit" id="submit">Send</button>
            </form>
        </section>
    )
}

export default Contact;