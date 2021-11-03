import React from 'react'
import { Wrapper, Container, SectionTitle } from '../../styles/globalStyles';
import { Email, Home, Phone } from '@material-ui/icons';

import {
	ContactItemInner,
	ContactForm,
	ContactItem,
	ContactSection,
	Form,
	InputGroup,
	SubmitBtn
} from './ContactStyles';

export const Contact = () => {
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
							<p>35 Kaara street off Osolo way, Ajao Estate Lagos, Nigeria</p>
						</ContactItemInner>
					</ContactItem>
				</Wrapper>
				<Wrapper>
					<ContactForm>
						<Form>
							<Wrapper>
								<div className='w-50'>
									<InputGroup className='input-group outer-shadow hover-in-shadow'>
										<input
											type='text'
											placeholder='Name'
											className='input-control'
										/>
									</InputGroup>
									<InputGroup className='input-group outer-shadow hover-in-shadow'>
										<input
											type='email'
											placeholder='Email'
											className='input-control'
										/>
									</InputGroup>
									<InputGroup className='input-group outer-shadow hover-in-shadow'>
										<input
											type='text'
											placeholder='Subject'
											className='input-control'
										/>
									</InputGroup>
								</div>
								<div className='w-50'>
									<InputGroup className='input-group outer-shadow hover-in-shadow'>
										<textarea
											placeholder='Message...'
											className='input-control'
										></textarea>
									</InputGroup>
								</div>
              </Wrapper>
              <Wrapper>
                <SubmitBtn>
                  <button className="outer-shadow hover-in-shadow">Send Message</button>
                </SubmitBtn>
              </Wrapper>
						</Form>
					</ContactForm>
				</Wrapper>
			</Container>
		</ContactSection>
	);
}
