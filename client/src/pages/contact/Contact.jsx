import React from 'react'
import { Wrapper, Container, SectionTitle } from '../../styles/globalStyles';
import styled from 'styled-components';
import { Email, Home, Phone } from '@material-ui/icons';

export const ContactSection = styled.div`
  padding: 80px 0 80px;
  min-height: 100vh;
`;

export const ContactItem = styled.div`
  flex: 0 0 33.33%;
  max-width: 33.33%;
  padding: 15px;
  display: flex;
`;
export const ContactItemInner = styled.div`
  padding: 30px 15px;
  text-align: center;
  border-radius: 5px;
  width: 100%;
  .MuiSvgIcon-root{
    font-size: 1.8rem;
    color: var(--skin-color);
  }
  span{
    display: block;
    font-size: 1rem;
    font-weight: 600;
    color: var(--text-black-700);
    margin: 15px 0 10px;
    text-transform: capitalize;
  }
  p{
    font-size: 1rem;
    color: var(--text-black-600);
    line-height: 26px;
   margin: 0;
    word-break: break-word;
  }
`;
export const ContactForm = styled.div`
	flex: 0 0 100%;
	max-width: 100%;
  margin-top: 50px;
	.w-50 {
    padding: 0 15px;
    flex: 0 0 50%;
    max-width: 50%;
	}
`;

export const Form = styled.form`

`;
export const InputGroup = styled.div`
	margin: 0 0 25px;
	transition: all 0.3s ease;
	border-radius: 30px;
	::after {
		border-radius: 30px;
	}
	.input-control {
		height: 45px;
		display: block;
		width: 100%;
		border-radius: 30px;
		border: none;
		background-color: transparent;
		font-size: 1rem;
		padding: 0 15px;
		color: var(--text-black-700);
	}
	textarea.input-control {
		height: 185px;
		padding-top: 15px;
    resize: none;
	}
`;
export const SubmitBtn = styled.div`
  flex: 0 0 100%;
  max-width: 100%;
  text-align: right;
  padding: 0 15px;
	button {
		padding: 10px 25px;
		font-size: 1rem;
		font-weight: 500;
		color: var(--skin-color);
		background-color: transparent;
		line-height: 1.5;
		cursor: pointer;
		border-radius: 30px;
		transition: all 0.3s ease;
		display: inline-block;
		::after {
			border-radius: 30px;
		}
	}
`;

export const Contact = () => {
  return (
		<ContactSection>
			<Container>
				<Wrapper>
					<SectionTitle className='section-title'>
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
