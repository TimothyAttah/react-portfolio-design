import React from 'react';
import styled from 'styled-components';
import { Container, Wrapper } from '../../styles/globalStyles';
import ProfilePic from '../../images/photo-1.png'
import { Button } from '../../components/buttons';
import { Effects } from '../../components/Effects';



export const HomeSection = styled.section`
  .full-screen{
    padding: 50px 0;
    min-height: 100vh;
  }
`;
export const HomeText = styled.div`
  flex: 0 0 50%;
  max-width: 50%;
  padding: 0 15px;
  p{
    color: var(--text-black-300);
    font-size: 1.2rem;
    text-transform: capitalize;
    margin: 0;
  }
  h2{
    font-size: 3.2rem;
    font-weight: 700;
    color: var(--text-black-900);
    margin: 0;
  }
  h1{
    font-size: 1.4rem;
    font-weight: 500;
    color: var(--text-black-700);
    margin: 0;
    text-transform: capitalize;
  }
  a {
    margin-top: 30px;
  }
`;
export const HomeImg = styled.div`
	flex: 0 0 50%;
	max-width: 50%;
	padding: 0 15px;
	.img-box {
		max-width: 450px;
		display: block;
		margin: auto;
		border-radius: 50%;
    padding: 15px;
		img {
			width: 100%;
			border-radius: 50%;
      border: 10px solid transparent;
		}
	}
`;
export const HomeImgBox = styled.div`
  border: 2px solid blue;
`;

export const Home = () => {
  return (
    <HomeSection>
      <Effects />
			<Container>
				<Wrapper alignItems className='full-screen'>
					<HomeText className='home-text'>
						<p>Hello</p>
						<h2>I'm Timothy Attah</h2>
            <h1>Web Designer & Developer</h1>
            <Button props='/about'>More About Me</Button>
					</HomeText>
					<HomeImg className='home-img'>
						<div className='img-box inner-shadow'>
							<img src={ProfilePic} alt='profile-pic' className="outer-shadow" />
						</div>
					</HomeImg>
				</Wrapper>
			</Container>
		</HomeSection>
	);
}
