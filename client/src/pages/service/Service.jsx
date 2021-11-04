import React from 'react';
import {	Code,	LaptopChromebook, PhoneAndroidOutlined,	People,} from '@material-ui/icons';

import { Wrapper, Container, SectionTitle } from '../../styles/globalStyles';
import { ServiceItem, ServiceSection, ServiceItemInner } from './ServiceStyles';

export const Service = () => {
	return (
		<ServiceSection>
			<Container>
				<Wrapper>
					<SectionTitle>
						<h2 data-heading='Services'>What i do</h2>
					</SectionTitle>
				</Wrapper>
				<Wrapper>
					<ServiceItem>
						<ServiceItemInner className='outer-shadow'>
							<div className='icon inner-shadow'>
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
							<div className='icon inner-shadow'>
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
					<ServiceItem>
						<ServiceItemInner className='outer-shadow'>
							<div className='icon inner-shadow'>
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
					<ServiceItem>
						<ServiceItemInner className='outer-shadow'>
							<div className='icon inner-shadow'>
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
};
