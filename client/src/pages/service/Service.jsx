import React from 'react';
import styled from 'styled-components';
import {  Code, LaptopChromebook, PhoneAndroidOutlined, People } from '@material-ui/icons';

import { Wrapper, Container, SectionTitle } from '../../styles/globalStyles';

export const ServiceSection = styled.section`
  padding: 80px 0 80px;
  min-height: 100vh;
`;
export const ServiceItem = styled.section`
	flex: 0 0 50%; //0 0 33.33% 0 0 50%
	max-width: 50%;
	padding: 15px;
	display: flex;
	flex-wrap: wrap;
	@media (max-width: 540px) {
		flex: 0 0 100%; //0 0 33.33% 0 0 100%
		max-width: 100%;
		width: 100%;
	}
`;
export const ServiceItemInner = styled.section`
	padding: 50px 15px;
	border-radius: 5px;
	text-align: center;
	width: 100%;
	:hover {
		cursor: pointer;
		.icon {
			color: var(--skin-color);
			box-shadow: var(--inner-shadow-0);
			::after {
				box-shadow: var(--outer-shadow);
			}
		}
	}

	.icon {
		height: 60px;
		width: 60px;
		text-align: center;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 50%;
		transition: all 0.3s ease;
		margin: 0 auto 30px;
		color: var(--text-black-700);
		position: relative;
		::after {
			content: '';
			position: absolute;
			left: 0;
			top: 0;
			width: 100%;
			height: 100%;
			border-radius: 50%;
			transition: all 0.3s ease;
		}
		:hover {
			box-shadow: var(--inner-shadow-0);
		}
		.MuiSvgIcon-root {
			font-size: 2rem;
			line-height: 60px;

			transition: all 0.3s ease;
		}
	}
	h3 {
		font-size: 1.8rem;
		font-weight: 600;
		color: var(--text-black-700);
		margin: 0 0 10px;
		text-transform: capitalize;
	}
	p {
		font-size: 1.2rem;
		color: var(--text-black-600);
		margin: 0;
		line-height: 28px;
	}
`;
// export const ServiceSection = styled.section`

// `;

export const Service = () => {
  return (
		<ServiceSection>
			<Container>
				<Wrapper>
					<SectionTitle className='section-title'>
						<h2 data-heading='Services'>What i do</h2>
					</SectionTitle>
				</Wrapper>
				<Wrapper>
					<ServiceItem className='service-item'>
						<ServiceItemInner className='service-item-inner outer-shadow'>
							<div class='icon inner-shadow'>
								<PhoneAndroidOutlined />
							</div>
							<h3>Responsive design</h3>
							<p>
								A good web design is easy to use, aesthetically pleasing, and
								suits the users and brand of the website. Many webpages are
								designed with a focus on simplicity so that no extraneous
								information and functionality that might distract or confuse
								users appears.
								<b>And that is What I Offer</b>
							</p>
						</ServiceItemInner>
					</ServiceItem>
					<ServiceItem className='service-item'>
						<ServiceItemInner className='service-item-inner outer-shadow'>
							<div class='icon inner-shadow'>
								<LaptopChromebook />
							</div>
							<h3>Web design</h3>
							<p>
								One the key ingredients to a successful product is the creation
								of effective, efficient, and visually pleasing displays.
								Removing as many potential points of users frustration as
								possible is a critical consideration.
							</p>
						</ServiceItemInner>
					</ServiceItem>
					<ServiceItem className='service-item'>
						<ServiceItemInner className='service-item-inner outer-shadow'>
							<div class='icon inner-shadow'>
								<Code />
							</div>
							<h3>clean code</h3>
							<p>
								Programming is the art of telling another human what one wants
								the computer to do. By writing clean code, then I am helping my
								future self and my co-workers. I am reducing the cost of
								maintenance of the application I am writing. I am making it
								easier to estimate the time needed for new features. I am making
								it easier to fix bugs. Essentially I am making the life easier
								for everyone involved in the project.
							</p>
						</ServiceItemInner>
					</ServiceItem>
					<ServiceItem className='service-item'>
						<ServiceItemInner className='service-item-inner outer-shadow'>
							<div class='icon inner-shadow'>
								<People />
							</div>
							<h3>Great support</h3>
							<p>
								It is literally true that you can succeed best and quickest by
								helping others to succeed. You can't achieve anything entirely
								by yourself. Theres's a support system that is a basic
								requirement of human existence. A little support can go a very
								long way in someone's life. Listen to their ideas. Go to their
								events. Share their posts. Celebrate in their victories and
								remind them of their importance after their failures.
								<b>And that is all I am about.</b>
							</p>
						</ServiceItemInner>
					</ServiceItem>
				</Wrapper>
			</Container>
		</ServiceSection>
	);
}
