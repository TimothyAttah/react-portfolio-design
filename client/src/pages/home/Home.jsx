import React from 'react';
import { Container, Wrapper } from '../../styles/globalStyles';
import ProfilePic from '../../images/photo-1.png'
import { Button } from '../../components/buttons';
import { Effects } from '../../components/Effects';
import {
	HomeImg,
	HomeSection,
	HomeText
} from './HomeStyles';

export const Home = () => {
  return (
    <HomeSection>
      <Effects />
			<Container>
				<Wrapper alignItems className='full-screen'>
					<HomeText>
						<p>Hello</p>
						<h2>I'm Timothy Attah</h2>
            <h1>Web Designer & Developer</h1>
            <Button props='/about'>More About Me</Button>
					</HomeText>
					<HomeImg>
						<div className='img-box inner-shadow'>
							<img src={ProfilePic} alt='profile-pic' className="outer-shadow" />
						</div>
					</HomeImg>
				</Wrapper>
			</Container>
		</HomeSection>
	);
}
