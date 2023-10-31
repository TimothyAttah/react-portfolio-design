import React from 'react';
import { Wrapper, Container, SectionTitle } from '../../styles/globalStyles';
import { Email, Home, Phone } from '@material-ui/icons';
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';

import {
  ContactItemInner,
  ContactForm,
  ContactItem,
  ContactSection,
  Form,
  InputGroup,
  SubmitBtn,
} from './ContactStyles';
import { useState } from 'react';

const Result = () => {
  return (
    <h3>Your message has been successfully sent. I will contact you soon.</h3>
  );
};

export const Contact = () => {
  const [result, showResult] = useState(true);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_dnl2eqd',
        'template_7ec2pal',
        e.target,
        'user_XLI6JUsxKhaq9PWPaKuMv',
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        },
      );
    e.target.reset();
    toast.success(`Your message has been successfully sent.
			I will contact you soon.`);
    showResult(true);
  };

  setTimeout(() => {
    showResult(false);
  }, 5000);

  return (
    <ContactSection>
      <Container>
        <Wrapper>
          <SectionTitle>
            <h2 data-heading='Contact'>Get in touch</h2>
          </SectionTitle>
        </Wrapper>
        <Wrapper>
          <ContactItem>
            <ContactItemInner className='outer-shadow'>
              <Phone />
              <span>Phone</span>
              <p>+(234) 810 319 4335</p>
            </ContactItemInner>
          </ContactItem>
          <ContactItem>
            <ContactItemInner className='outer-shadow'>
              <Email />
              <span>Email</span>
              <p>timothyattah733@gmail.com</p>
            </ContactItemInner>
          </ContactItem>
          <ContactItem>
            <ContactItemInner className='outer-shadow'>
              <Home />
              <span>Address</span>
              <p>
                2 White House Street, Olokonla Bustop, Ajah, Lagos, Nigeria.
              </p>
            </ContactItemInner>
          </ContactItem>
        </Wrapper>
        <Wrapper>
          <ContactForm>
            <Form onSubmit={sendEmail}>
              <Wrapper>
                <div className='w-50'>
                  <InputGroup className='input-group outer-shadow hover-in-shadow'>
                    <input
                      type='text'
                      name='name'
                      placeholder='Name'
                      className='input-control'
                    />
                  </InputGroup>
                  <InputGroup className='input-group outer-shadow hover-in-shadow'>
                    <input
                      type='email'
                      name='email'
                      placeholder='Email'
                      className='input-control'
                    />
                  </InputGroup>
                  <InputGroup className='input-group outer-shadow hover-in-shadow'>
                    <input
                      type='text'
                      name='subject'
                      placeholder='Subject'
                      className='input-control'
                    />
                  </InputGroup>
                </div>
                <div className='w-50'>
                  <InputGroup className='input-group outer-shadow hover-in-shadow'>
                    <textarea
                      name='message'
                      placeholder='Message...'
                      className='input-control'
                    ></textarea>
                  </InputGroup>
                </div>
              </Wrapper>
              <Wrapper>
                <SubmitBtn>
                  <button className='outer-shadow hover-in-shadow'>
                    Send Message
                  </button>
                </SubmitBtn>
                <div>{result ? <Result /> : null}</div>
              </Wrapper>
            </Form>
          </ContactForm>
        </Wrapper>
      </Container>
    </ContactSection>
  );
};
