import React from 'react';
import styled from 'styled-components';
import { Close } from '@material-ui/icons';
import { NavLink } from 'react-router-dom';
import { NavLists } from '../Helper';

export const NavMenu = styled.nav`
  position: fixed;
  background-color: var(--bg-black-50);
  padding:0 15px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  /* z-index: -1;
  opacity: 0;
  visibility: hidden; */
  overflow-y: auto;
`;

export const CloseNavMenu = styled.div`
  width: 40px;
  height: 40px;
  display: block;
  font-size: 3rem;
  line-height: 35px;
  border-radius: 50%;
  text-align: center;
  position: absolute;
  right: 15px;
  top: 15px;
  cursor: pointer;
  color: var(--text-black-600);
  transition: all 0.3s ease;
  ::after{
    border-radius: 50%;
  }
`;

export const NavMenuInner = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  ul{
    padding: 15px;
    li{
      display: block;
      margin-bottom: 20px;
      text-align: center;
      :last-child{
        margin-bottom: 0;
      }
      a{
        display: inline-block;
        font-size: 1.8rem;
        font-weight: 600;
        color: var(--text-black-700);
        padding: 5px 30px;
        text-transform: capitalize;
        border-radius: 30px;
        transition: all 0.3s ease;
        ::after{
          border-radius: 30px;
        }
      }
    }
  }
`;

export const activeLink = {
  boxShadow: 'var(--inner-shadow)',
  color: 'var(--skin-color)'
}

export const CopyrightText = styled.p`
  position: absolute;
  top: 50%;
  font-size: 1rem;
  color: var(--text-black-600);
  transform: translateY(-50%) rotate(-90deg);
  left:-60px;
`;

export const Nav = ( { open, setOpen } ) => {
  const handleClick = () => {
    setOpen(!open)
  }
  return (
		<NavMenu>
			<CloseNavMenu onClick={handleClick} className='close-nav-menu outer-shadow hover-in-shadow'>
				<Close />
			</CloseNavMenu>
			<NavMenuInner className='nav-menu-inner'>
				<ul>
					{NavLists.map(item => (
						<li key={item.name}>
							<NavLink
								activeStyle={activeLink}
								to={item.path}
								target='_blank'
								className='outer-shadow hover-in-shadow'
							>
								{item.name}
							</NavLink>
						</li>
					))}
				</ul>
      </NavMenuInner>
      <CopyrightText>&copy; 2021 Timothy Attah</CopyrightText>
		</NavMenu>
	);
}
