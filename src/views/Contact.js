import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

import logo from '../assets/images/Logo.png';

import Button from '../components/Button';
import MenuIcon from '../components/MenuIcon';
import TextInput from '../components/TextInput';

const Contact = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    const input = {
      fullName,
      email,
      message
    };
    console.log(input);
    console.log('Your message has been submitted!');
    setFullName('');
    setEmail('');
    setMessage('');
  };

  const isUnableToSubmit = !fullName || !email || !message;

  return (
    <div className="page contact">
      <header className="toolbar">
        <div className="toolbar-nav">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="link-icon fab fa-facebook-square" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="link-icon fab fa-twitter" />
          </a>
        </div>
        <Link to="/">
          <img src={logo} alt="Byrd MR" />
        </Link>
        <div className="toolbar-nav flex-end">
          <span>
            <MenuIcon />
          </span>
        </div>
      </header>
      <div className="page-content">
        <div className="contact-form">
          <TextInput
            label="Full name"
            name="fullName"
            onChange={e => setFullName(e.target.value)}
            placeholder="Enter your full name"
            value={fullName}
          />
          <TextInput
            label="Email"
            name="email"
            onChange={e => setEmail(e.target.value)}
            placeholder="Enter your email"
            type="email"
            value={email}
          />
          <TextInput
            isMultiline
            label="Message"
            name="message"
            onChange={e => setMessage(e.target.value)}
            placeholder="What are your plans?"
            value={message}
          />
          <Button
            disabled={isUnableToSubmit}
            label="Send Message"
            icon="fas fa-arrow-right"
            onClick={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
