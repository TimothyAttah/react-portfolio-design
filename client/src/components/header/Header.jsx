import React from 'react';
import styled from 'styled-components';
import { Menu } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { Container, Wrapper } from '../../styles/globalStyles';

export const HeaderContainer = styled.header`
	padding: 20px 15px;
	position: absolute;
	width: 100%;
	top: 0;
	left: 0;
	z-index: 99;
`;

export const HeaderLogo = styled.div`
	a {
		display: inline-block;
		text-align: center;
		line-height: 36px;
		height: 40px;
		width: 40px;
		font-size: 1.5rem;
		color: var(--skin-color);
		border-radius: 50%;
		border: 2px solid var(--skin-color);
		font-weight: 600;
		text-transform: uppercase;
	}
`;
export const HeaderMenuBtn = styled.div`
	height: 40px;
	width: 40px;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 50%;
	transition: all 0.3s ease-in;
	color: var(--bg-black-900);
	::after {
		border-radius: 50%;
	}
`;

export const Header = ({ open, setOpen }) => {
	const handleClick = () => {
		setTimeout(() => {
			setOpen(!open);
		}, 300);
	};
	return (
		<HeaderContainer>
			<Container>
				<Wrapper primary>
					<HeaderLogo>
						<Link to='/'>T</Link>
					</HeaderLogo>
					<HeaderMenuBtn
						onClick={handleClick}
						className='  outer-shadow hover-in-shadow'
					>
						<Menu />
					</HeaderMenuBtn>
				</Wrapper>
			</Container>
		</HeaderContainer>
	);
};
