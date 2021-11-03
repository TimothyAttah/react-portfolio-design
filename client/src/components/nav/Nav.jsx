import React from 'react';
import { Close } from '@material-ui/icons';
import { NavLink } from 'react-router-dom';
import { NavLists } from '../Helper';
import {
	NavMenu,
	NavMenuInner,
	NavMenuWrapper,
	activeLink,
	CloseNavMenu,
	CopyrightText,
} from './NavStyles';

export const Nav = ({ open, setOpen }) => {
	const handleClick = () => {
		setTimeout(() => {
			setOpen(!open);
		}, 300);
	};
	return (
		<NavMenu>
			<NavMenuWrapper>
				<NavMenuInner>
					<ul>
						{NavLists.map(item => (
							<li key={item.name}>
								<NavLink
									activeStyle={activeLink}
									to={item.path}
									className='outer-shadow hover-in-shadow'
								>
									{item.name}
								</NavLink>
							</li>
						))}
					</ul>
				</NavMenuInner>
				<CloseNavMenu
					onClick={handleClick}
					className=' outer-shadow hover-in-shadow'
				>
					<Close />
				</CloseNavMenu>
			</NavMenuWrapper>
			<CopyrightText>&copy; 2021 Timothy Attah</CopyrightText>
		</NavMenu>
	);
};
