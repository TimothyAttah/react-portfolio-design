import React from 'react'
import {  Link } from 'react-router-dom'

import styled from 'styled-components'

const LinkContainer = styled(Link)`
  padding: 10px 25px;
  font-size: 16px;
  font-weight: 500;
  color: var(--skin-color);
  background-color: transparent;
  line-height: 1.5;
  cursor: pointer;
  border-radius: 30px;
  transition: all 0.3s ease;
  display: inline-block;
  ::after{
    border-radius: 30px;
  }
`;

export const Button = ({children, props, target}) => {
  return (
    <LinkContainer to={props} target={target} className='outer-shadow hover-in-shadow'>
      {children}
    </LinkContainer>
  )
}
