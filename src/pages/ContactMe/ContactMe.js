import React, {useState} from 'react';
import Layout from '../../components/Layout';
import { SectionTitle } from '../../styles';
import { TextInput, TextArea, Label, SubmitButton } from './styles';

const ContactMe = ({ user }) => {
  const [name,  onNameChange] = useState('')
  const [email, onEmailChange] = useState('')
  const [message, onMessageChange] = useState('')
  const port = process.env.NODE_ENV === "production"? process.env.PORT : 3002
  
  const resetForm = () => {
    this.setState({name: '', email: '', message: ''})
  }
  const handleSubmit = (event) => {
    event.preventDefault();

    fetch((port) + '/send', {
        method: "POST",
        body: JSON.stringify({name: name, email: email, message: message}),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      }).then(
      (response) => (response.json())
        ).then((response)=> {
      if (response.status === 'success') {
        alert("Message Sent.");
        resetForm()
      } else if(response.status === 'fail') {
        alert("Message failed to send.")
      }
    })
  };


  return (
    <Layout user={user}>
      <div >
        <SectionTitle>Contact Me</SectionTitle>
        <form id="contact-form" onSubmit={event => handleSubmit(event)} method="POST" style={{width:'50%', minWidth: '250px'}}>
          <div className="form-group">
            <Label htmlFor="name">Name</Label>
            <TextInput type="text" className="form-control" id="name" value={name} onChange={event => onNameChange(event.target.value)} />
          </div>
          <div className="form-group">
            <Label htmlFor="exampleInputEmail1">Email address</Label>
            <TextInput type="email" className="form-control" id="email" aria-describedby="emailHelp" value={email} onChange={event => onEmailChange(event.target.value)} />
          </div>
          <div className="form-group">
            <Label htmlFor="message">Message</Label>
            <TextArea className="form-control" rows="5" id="message" value={message} onChange={event => onMessageChange(event.target.value)} />
          </div>
          <SubmitButton type="submit" className="btn btn-primary"><span style={{margin: 'auto'}}>Submit</span></SubmitButton>
        </form>
      </div>
    </Layout>
  );
};

export default ContactMe;