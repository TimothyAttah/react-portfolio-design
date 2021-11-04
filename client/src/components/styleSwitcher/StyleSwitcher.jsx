/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { Brightness4, Brightness7, Settings } from '@material-ui/icons';

import {
	StyleSwitcherContainer,
	ColorsWrapper,
	StyleSwitcherWrapper,
	Colors,
	IconWrapper,
	StyleToggler
} from './StyleSwitcherStyles';

export const StyleSwitcher = () => {
  const [ open, setOpen ] = useState( false );
  const [ night, setNight ] = useState( true );
	const alternateStyle = document.querySelectorAll( '.alternate-style' );

	const setActiveStyle = ( color ) => {
		localStorage.setItem( 'color', color )
		changeColorTheme();
	}
	const changeColorTheme = () => {
		alternateStyle.forEach(style => {
			if (localStorage.getItem('color') === style.getAttribute('title')) {
				style.removeAttribute('disabled');
			} else {
				style.setAttribute('disabled', 'true');
			}
			setOpen(false);
		});
	};
	 const handleNightDay = () => {
			setNight(!night);
			document.body.classList.toggle('dark');
			if (document.body.classList.contains('dark')) {
				localStorage.setItem('theme', 'dark');
			} else {
				localStorage.setItem('theme', 'light');
			}
		};
		const changeColor = () => {
			if (localStorage.getItem('theme') !== null) {
				if (localStorage.getItem('theme') === 'light') {
					document.body.classList.remove('dark');
				} else {
					document.body.classList.add('dark');
				}
			}
		};
	
	
	useEffect( () => {
		if ( localStorage.getItem( 'color' ) !== null ) {
			changeColorTheme();
		}
		changeColor()
	} ,[]);

  const handleOpen = () => {
    setTimeout( () => {
      setOpen(!open)
    },300)
  }

  useEffect( () => {
    window.addEventListener( 'scroll', () => {
      setOpen(false)
    } )
  }, [] )

  return (
    <StyleSwitcherContainer>
			<StyleSwitcherWrapper>
				{open && (
					<ColorsWrapper className='outer-shadow'>
						<h4>Theme Colors</h4>
						<Colors>
							<span
								className='color-1'
								onClick={() => setActiveStyle('color-1')}
							></span>
							<span
								className='color-2'
								onClick={() => setActiveStyle('color-2')}
							></span>
							<span
								className='color-3'
								onClick={() => setActiveStyle('color-3')}
							></span>
							<span
								className='color-4'
								onClick={() => setActiveStyle('color-4')}
							></span>
							<span
								className='color-5'
								onClick={() => setActiveStyle('color-5')}
							></span>
						</Colors>
					</ColorsWrapper>
				)}
				<IconWrapper>
					<StyleToggler
						onClick={handleOpen}
						className='outer-shadow hover-in-shadow'
					>
						<Settings />
					</StyleToggler>
					<StyleToggler
            primary
            onClick={handleNightDay}
						className='outer-shadow hover-in-shadow'
          >
            {night ? <Brightness4 /> : <Brightness7 />}
					</StyleToggler>
				</IconWrapper>
			</StyleSwitcherWrapper>
		</StyleSwitcherContainer>
	);
}
