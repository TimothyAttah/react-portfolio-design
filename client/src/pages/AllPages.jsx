import React, { useState } from 'react'
import { Header } from '../components/header/Header'
import { Nav } from '../components/nav/Nav'

export const AllPages = () => {
  const [ open, setOpen ] = useState( true );
  return (
		<div>
			{open && <Header open={open} setOpen={setOpen} />}
			{ !open && <Nav open={ open } setOpen={ setOpen } /> }
		</div>
	);
}
