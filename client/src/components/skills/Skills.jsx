import React from 'react';
import styled from 'styled-components';
import { Wrapper } from '../../styles/globalStyles';
import { ArrowRightAltTwoTone } from '@material-ui/icons';

export const SkillItem = styled.div`
	width: 200px;
	display: flex;
	justify-content: center;
	padding: 15px 0;
	margin-bottom: 40px;
	position: relative;
	border-radius: 20px;
	color: var(--text-black-900);
	font-weight: 700;
	.MuiSvgIcon-root {
		position: absolute;
		left: 10px;
		color: var(--skin-color);
	}
`;

export const Skills = () => {
	return (
		<>
			<Wrapper primary alignItems className='skills__container'>
				<SkillItem className='outer-shadow'>
					<ArrowRightAltTwoTone />
					<p>Html</p>
				</SkillItem>
				<SkillItem className='outer-shadow'>
					<ArrowRightAltTwoTone />
					<p>Javascript</p>
				</SkillItem>

				<SkillItem className='outer-shadow'>
					<ArrowRightAltTwoTone />
					<p>React/Redux</p>
				</SkillItem>

				<SkillItem className='outer-shadow'>
					<ArrowRightAltTwoTone />
					<p>Git/GitHub</p>
				</SkillItem>

				<SkillItem className='outer-shadow'>
					<ArrowRightAltTwoTone />
					<p>NodeJs/Express</p>
				</SkillItem>

				<SkillItem className='outer-shadow'>
					<ArrowRightAltTwoTone />
					<p>MongoDB</p>
				</SkillItem>

				<SkillItem className='outer-shadow'>
					<ArrowRightAltTwoTone />
					<p>Postgres/SQL</p>
				</SkillItem>
			</Wrapper>
		</>
	);
};
