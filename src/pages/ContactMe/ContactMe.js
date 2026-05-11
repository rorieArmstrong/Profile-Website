import React, { useState } from 'react';
import Layout from '../../components/Layout';
import { SectionTitle } from '../../styles';
import {
  FormContainer,
  FormGroup,
  FormFooter,
  Label,
  TextInput,
  TextArea,
  SubmitButton,
  StatusMessage,
} from './styles';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3002/';

const ContactMe = ({ user }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);
  const [validationError, setValidationError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    setValidationError(null);

    if (!name.trim()) return setValidationError('Please enter your name.');
    if (!EMAIL_RE.test(email)) return setValidationError('Please enter a valid email address.');
    if (!message.trim()) return setValidationError('Please enter a message.');

    setLoading(true);
    setStatus(null);

    fetch(API_URL + 'send', {
      method: 'POST',
      body: JSON.stringify({ name, email, message }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(res => {
        if (res.status === 'success') {
          setStatus('success');
          setName('');
          setEmail('');
          setMessage('');
        } else {
          setStatus('error');
        }
      })
      .catch(() => setStatus('error'))
      .finally(() => setLoading(false));
  };

  return (
    <Layout user={user}>
      <div>
        <SectionTitle>Contact Me</SectionTitle>
        <FormContainer id="contact-form" onSubmit={handleSubmit} method="POST">
          <FormGroup>
            <Label htmlFor="name">Name</Label>
            <TextInput
              type="text"
              id="name"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="email">Email address</Label>
            <TextInput
              type="email"
              id="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="message">Message</Label>
            <TextArea
              id="message"
              rows="5"
              value={message}
              onChange={e => setMessage(e.target.value)}
            />
          </FormGroup>
          <FormFooter>
            <SubmitButton type="submit" disabled={loading}>
              {loading ? 'Sending…' : 'Submit'}
            </SubmitButton>
            {validationError && <StatusMessage>{validationError}</StatusMessage>}
            {status === 'success' && (
              <StatusMessage $success>Message sent successfully.</StatusMessage>
            )}
            {status === 'error' && (
              <StatusMessage>Something went wrong — please try again.</StatusMessage>
            )}
          </FormFooter>
        </FormContainer>
      </div>
    </Layout>
  );
};

export default ContactMe;
