import React, { useState } from 'react';
import styled from 'styled-components';
import { GitHub, Facebook, LinkedIn } from '@material-ui/icons';
import { Container, Wrapper, SectionTitle } from '../../styles/globalStyles';
import ProfilePic from '../../images/photo-2.png'
import PDF from '../../timothyattah.pdf'
import { Button } from '../../components/buttons';
import { Link } from 'react-router-dom';
import { Skills } from '../../components/skills/Skills';
import { Experience } from '../../components/experience/Experience';
import { Education } from '../../components/education/Education';

export const AboutSection = styled.section`
  padding: 80px 0 0;
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
  a {
    margin: 30px 20px 0 0;
  }
`;

export const AboutSocialLinks = styled.div`
	margin-top: 20px;
	text-align: center;
	display: flex;
	align-items: center;
	justify-content: center;

	a {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 40px;
		width: 40px;
		font-size: 1rem;
		text-align: center;
		line-height: 40px;
		color: var(--text-black-600);
		margin: 0 4px;
		border-radius: 50%;
		transition: all 0.3s ease;
		::after {
			border-radius: 50%;
		}
    :hover{
      color: var(--skin-color);
    }
		.MuiSvgIcon-root {
			display: flex;
			align-items: center;
      justify-content: center;
		}
	}
`;

export const AboutTabs = styled.div`
	padding: 60px 15px 50px;
	flex: 0 0 100%;
	max-width: 100%;
	text-align: center;
	.active {
		color: var(--skin-color);
	}
`;

export const AboutTabsItem = styled.span`
  display: inline-block;
  margin: 0 5px 10px;
  cursor: pointer;
  padding: 5px 10px;
  border-radius: 30px;
  transition: all 0.3s ease;
  font-size: 1rem;
  color: var(--text-black-600);
  font-weight: 500;
  text-transform: capitalize;
  :hover:not(.active){
    opacity: 0.6;
  }

 `;

export const AboutTabContent = styled.div`
	flex: 0 0 100%;
	max-width: 100%;
`;


export const About = () => {
	// useEffect( () => {
	// 	const aboutSection = document.querySelector('.about-section'),
	// 		tabsContainer = document.querySelector('.about-tabs');

	// 	tabsContainer.addEventListener( 'click', ( event ) => {
	// 		if ( event.target.classList.contains( 'tab-item' ) &&
	// 			!event.target.classList.contains( 'active' ) ) {
	// 			const target = event.target.getAttribute( 'data-target' );
	// 			// deactivate existing active 'tab-item'
	// 			tabsContainer
	// 				.querySelector( '.active' )
	// 				.classList.remove( 'outer-shadow', 'active' );
	// 			// activate new  'tab-item'
	// 			event.target.classList.add( 'active', 'outer-shadow' );
	// 			// deactivate existing active 'tab-content'
	// 			aboutSection
	// 				.querySelector( '.tab-content.active' )
	// 				.classList.remove( 'active' );
	// 			// activate new  'tab-content'
	// 			aboutSection.querySelector( target ).classList.add( 'active' );
	// 		}
	// 	} )
	// }, [] );



const [skills, setSkills] = useState(true)
const [experience, setExperience] = useState(false)
const [education, setEducation] = useState(false)

	const handleSkills = () => {
		setSkills( true )
		setEducation( false )
		setExperience( false )
	}
	const handleExperience = () => {
		setSkills( false )
		setEducation( false )
		setExperience( true )
	}
	const handleEducation = () => {
		setSkills( false )
		setEducation( true)
		setExperience( false )
	}



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
						<AboutSocialLinks>
							<Link
								to='www.facebook.com/timothyattah'
								className='outer-shadow hover-in-shadow'
								target='_blank'
							>
								<Facebook />
							</Link>
							<Link
								to='www.github.com/timothyattah'
								className='outer-shadow hover-in-shadow'
								target='_blank'
							>
								<GitHub />
							</Link>
							<Link
								to='www/linkedin.com/timothyattah'
								className='outer-shadow hover-in-shadow'
								target='_blank'
							>
								<LinkedIn />
							</Link>
						</AboutSocialLinks>
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
						<Button props={PDF} target='_blank'>
							{' '}
							Download CV
						</Button>
						<Button props='/contact'> Hire Me</Button>
					</AboutInfo>
				</Wrapper>
			</Container>
			{/* ABOUT TABS START */}

			<Wrapper>
				<AboutTabs>
					<AboutTabsItem
						className={`${skills && 'outer-shadow active'}`}
						onClick={handleSkills}
					>
						skills
					</AboutTabsItem>
					<AboutTabsItem
						onClick={handleExperience}
						className={`${experience && 'outer-shadow active' }`}
					>
						experience
					</AboutTabsItem>
					<AboutTabsItem
						onClick={handleEducation}
						className={`${education && 'outer-shadow active'}`}
					>
						education
					</AboutTabsItem>
				</AboutTabs>
			</Wrapper>

				{skills && (
					<AboutTabContent>
						<Skills />
					</AboutTabContent>
				)}
				{experience && (
					<AboutTabContent>
						<Experience />
					</AboutTabContent>
				)}
				{education && (
					<AboutTabContent>
						<Education />
					</AboutTabContent>
				)}
		</AboutSection>
	);
}
