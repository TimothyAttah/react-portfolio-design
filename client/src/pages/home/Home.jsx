import React from 'react';
import styled from 'styled-components';
import { Container, Wrapper } from '../../styles/globalStyles';

export const HomeSection = styled.section`

`;

export const Home = () => {
  return (
    <HomeSection>
      <Container>
        <Wrapper>
          <div className="home-text">
            <p>Hello</p>
            <h2>I'm Timothy Attah</h2>
            <h1>Web Designer & Developer</h1>
          </div>
          <div className="home-img"></div>
        </Wrapper>
      </Container>
    </HomeSection>
  )
}
