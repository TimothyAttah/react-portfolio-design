import React from 'react';
import styled from 'styled-components';
import { Container, Wrapper, SectionTitle } from '../../styles/globalStyles';
import ProfilePic from '../../images/photo-2.png'

export const AboutSection = styled.section`
  padding: 80px 0 80px;
  min-height: 100vh;
`;

export const AboutImg = styled.div`
	flex: 0 0 40%;
	max-width: 40%;
	padding: 0 15px;
	.img-box {
		padding: 15px;
		border-radius: 5px;
		img {
			width: 100%;
			border: 10px solid transparent;
			border-radius: 5px;
		}
	}
`;
export const AboutInfo = styled.div`
	flex: 0 0 60%;
	max-width: 60%;
	padding: 0 15px;
  p{
    font-size: 1rem;
    line-height: 26px;
    margin-bottom: 15px;
    color: var(--text-black-600);
  }
  span{
    font-weight: 600;
  }
`;


// export const AboutInfo = styled.div``;
// export const AboutInfo = styled.div``;

export const About = () => {
  return (
		<AboutSection>
			<Container>
				<Wrapper>
					<SectionTitle className='section-title'>
						<h2 data-heading='main info'>About Me</h2>
					</SectionTitle>
				</Wrapper>
				<Wrapper>
					<AboutImg className='about-img'>
						<div className='img-box inner-shadow'>
							<img
								src={ProfilePic}
								alt='Profile-pic'
								className='outer-shadow'
							/>
						</div>
					</AboutImg>
					<AboutInfo className='about-info'>
						<p>
							<span>Hi! my name is Timothy Attah. I am a Web Developer, </span>
							and i specialize in efficient React App and HTML and CSS, that
							just works across all platforms and browsers. I'm passionate about
							creating and developing web interfaces. I have many years of
							experience in this area of work with multiple quality projects.
						</p>
						<p>
							I care deeply about building interfaces that are usable and
							pleasant for the most number of people possible. I am an
							accomplished coder and programmer, and I enjoy using my skills to
							contribute to the exciting administrative technology and for
							educating other team members. And also as an individual, with my
							positive attitude and tireless energy I encourage others to work
							hard and succeed. In my free time, I like to watch movies, anime
							and listen to music.
						</p>
					</AboutInfo>
				</Wrapper>
			</Container>
		</AboutSection>
	);
}
