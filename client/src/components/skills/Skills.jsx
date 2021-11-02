import React from 'react';
import styled from 'styled-components';
import { Wrapper } from '../../styles/globalStyles';
import { ArrowRightAltTwoTone } from '@material-ui/icons';

export const SkillsContainer = styled.div`
	flex: 0 0 80%;
	max-width: 80%;
	width: 100%;
	margin: auto;
	display: flex;
	@media (max-width: 540px) {
		flex: 0 0 100%;
		max-width: 100%;
	}
`;

export const SkillItem = styled.div`
	width: 220px;
	height: 100px;
	display: flex;
	align-items: center;
	padding: 15px 0;
	margin: 0 10px;
	margin: auto;
	margin-bottom: 40px;
	position: relative;
	border-radius: 5px;
	font-size: 1.2rem;
	color: var(--text-black-900);
	font-weight: bold;
	transition: all 0.3s ease;
	:hover {
		box-shadow: var(--outer-shadow);
		cursor: pointer;
	}
	.MuiSvgIcon-root {
		position: absolute;
		left: 10px;
		color: var(--skin-color);
	}
	p {
		/* color: #e5e5e5; */
		margin-left: 60px;
		text-shadow: -3px -3px 3px #fff7, 3px 3px 3px #0003;
	}
	@media (max-width:540px){
		width: 240px;
		font-size: 1.5rem;
	}
	@media (max-width:380px){
		width: 280px;
		}
	@media (max-width:290px){
		width: 250px;
		}
`;

export const Skills = () => {
	return (
		<SkillsContainer className='active'>
			<Wrapper primary alignItems className='skills__container'>
				<SkillItem className='inner-shadow'>
					<ArrowRightAltTwoTone />
					<p>Html</p>
				</SkillItem>
				<SkillItem className='inner-shadow'>
					<ArrowRightAltTwoTone />
					<p>Javascript</p>
				</SkillItem>

				<SkillItem className='inner-shadow'>
					<ArrowRightAltTwoTone />
					<p>React/Redux</p>
				</SkillItem>

				<SkillItem className='inner-shadow'>
					<ArrowRightAltTwoTone />
					<p>Git/GitHub</p>
				</SkillItem>

				<SkillItem className='inner-shadow'>
					<ArrowRightAltTwoTone />
					<p>NodeJs/Express</p>
				</SkillItem>

				<SkillItem className='inner-shadow'>
					<ArrowRightAltTwoTone />
					<p>MongoDB</p>
				</SkillItem>

				<SkillItem className='inner-shadow'>
					<ArrowRightAltTwoTone />
					<p>Postgres/SQL</p>
				</SkillItem>
			</Wrapper>
		</SkillsContainer>
	);
};
