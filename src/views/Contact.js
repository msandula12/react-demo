import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

import logo from '../assets/images/Logo.png';

import Button from '../components/Button';
import MenuIcon from '../components/MenuIcon';
import TextInput from '../components/TextInput';

const Contact = () => {
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
        <div className="toolbar-nav">
          <span>
            <MenuIcon />
          </span>
        </div>
      </header>
      <div className="page-content">
        <div className="contact-form">
          <TextInput label="Full name" placeholder="Enter your full name" />
          <TextInput
            label="Email"
            placeholder="Enter your email"
            type="email"
          />
          <TextInput
            isMultiline
            label="Message"
            placeholder="What are your plans?"
          />
          <Button label="Send Message" icon="fas fa-arrow-right" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
