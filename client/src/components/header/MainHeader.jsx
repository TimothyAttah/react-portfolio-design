import React, { useState } from 'react'
import { Header } from './Header'
import { Nav } from '../nav/Nav'

export const MainHeader = () => {
  const [open, setOpen] = useState(true);
	return (
		<div>
			{open && <Header open={open} setOpen={setOpen} />}
			{!open && <Nav open={open} setOpen={setOpen} />}
		</div>
	);
}
