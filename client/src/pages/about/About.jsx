import React, { useState } from 'react';
import { GitHub, Facebook, LinkedIn } from '@material-ui/icons';

import PDF from '../../Timothy-cv.pdf';
import { Container, Wrapper, SectionTitle } from '../../styles/globalStyles';
import ProfilePic from '../../images/photo-2.png';
import { Button } from '../../components/buttons';
import { Skills } from '../../components/skills/Skills';
import { Experience } from '../../components/experience/Experience';
import { Education } from '../../components/education/Education';
import {
  AboutSocialLinks,
  AboutImg,
  AboutSection,
  AboutInfo,
  AboutTabContent,
  AboutTabs,
  AboutTabsItem,
} from './AboutStyles';

export const About = () => {
  const [skills, setSkills] = useState(true);
  const [experience, setExperience] = useState(false);
  const [education, setEducation] = useState(false);

  const handleSkills = () => {
    setSkills(true);
    setEducation(false);
    setExperience(false);
  };
  const handleExperience = () => {
    setSkills(false);
    setEducation(false);
    setExperience(true);
  };
  const handleEducation = () => {
    setSkills(false);
    setEducation(true);
    setExperience(false);
  };

  return (
    <AboutSection>
      <Container>
        <Wrapper>
          <SectionTitle>
            <h2 data-heading='main info'>About Me</h2>
          </SectionTitle>
        </Wrapper>
        <Wrapper>
          <AboutImg>
            <div className='img-box inner-shadow'>
              <img
                src={ProfilePic}
                alt='Profile-pic'
                className='outer-shadow'
              />
            </div>
            <AboutSocialLinks>
              <a
                href='https://www.facebook.com/timothy.attah2'
                target='_blank'
                rel='noopener noreferrer'
                className='outer-shadow hover-in-shadow'
              >
                <Facebook />
              </a>
              <a
                href='https://www.github.com/timothyattah'
                className='outer-shadow hover-in-shadow'
                target='_blank'
                rel='noopener noreferrer'
              >
                <GitHub />
              </a>
              <a
                href='https://www.linkedin.com/in/timothy-attah-447077158'
                className='outer-shadow hover-in-shadow'
                target='_blank'
                rel='noopener noreferrer'
              >
                <LinkedIn />
              </a>
            </AboutSocialLinks>
          </AboutImg>
          <AboutInfo>
            <p>
              <span>Hi! my name is Timothy Attah. I am a Web Developer, </span>
              and i specialize in efficient React App and HTML and CSS, that
              just works across all platforms and browsers. I'm passionate about
              creating and developing web interfaces. I have experience in this
              area of work with multiple quality projects.
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
              Download CV
            </Button>
            <Button props='/contact'> Hire Me</Button>
          </AboutInfo>
        </Wrapper>
      </Container>

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
            className={`${experience && 'outer-shadow active'}`}
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
};
