import React from 'react';
import styled from 'styled-components';
import { Close } from '@material-ui/icons';
import { Link, NavLink } from 'react-router-dom';
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

export const Nav = () => { 
  return (
    <NavMenu>
      <CloseNavMenu className="close-nav-menu outer-shadow hover-in-shadow"><Close /></CloseNavMenu>
      <NavMenuInner className="nav-menu-inner">
        <ul>
          { NavLists.map( item => (
          <li><NavLink to={item.path} target="_blank" className='inner-shadow active'>{item.name}</NavLink></li>
          ))}
          {/* <li><Link to='#' target="_blank" className='outer-shadow hover-in-shadow'>about</Link></li>
          <li><Link to='#' target="_blank" className='outer-shadow hover-in-shadow'>services</Link></li>
          <li><Link to='#' target="_blank" className='outer-shadow hover-in-shadow'>portfolio</Link></li>
          <li><Link to='#' target="_blank" className='outer-shadow hover-in-shadow'>testimonial</Link></li>
          <li><Link to='#' target="_blank" className='outer-shadow hover-in-shadow'>contact</Link></li> */}
        </ul>
      </NavMenuInner>
    </NavMenu>
  )
}
