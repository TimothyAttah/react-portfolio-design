import React from 'react';
import styled from 'styled-components';
import { Container, Wrapper, SectionTitle } from '../../styles/globalStyles';

export const AboutSection = styled.section`
  padding: 80px 0 80px;
  min-height: 100vh;
`;

export const About = () => {
  return (
    <AboutSection>
      <Container>
        <Wrapper>
          <SectionTitle className="section-title">
            <h2 data-heading="main info">About Me</h2>
          </SectionTitle>
        </Wrapper>
     </Container>
    </AboutSection>
  )
}
