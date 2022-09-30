import React, { useState } from 'react';

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Logo from '../../assets/logo/logo.png';
import NavLinks from './Navlinks';

function Navbar() {
	const [open, setOpen] = useState(false);
	return (
		<>
			<nav className="bg-primary lg:text-white text-black sticky top-0 w-full z-50">
				<div className="container mx-auto flex items-center font-medium justify-between">
					<div className="z-50 p-5 lg:w-auto w-full flex justify-between">
						<img src={Logo} alt="logo" className="lg:cursor-pointer h-10" />
						<div className="text-3xl lg:hidden" onClick={() => setOpen(!open)}>
							{open ? <CloseIcon className="text-white" /> : <MenuIcon className="text-white" />}
						</div>
					</div>
					<ul className="lg:flex hidden items-center gap-3 font-[Poppins]">
						<NavLinks />
					</ul>

					{/* Mobile nav */}
					<ul
						className={`
        lg:hidden bg-white fixed w-full  top-20 overflow-y-auto bottom-0 py-5 pl-4
        duration-500 ${open ? 'left-0' : 'left-[-100%]'}
        `}
					>
						<NavLinks />
					</ul>
				</div>
			</nav>
		</>
	);
}

export default Navbar;
