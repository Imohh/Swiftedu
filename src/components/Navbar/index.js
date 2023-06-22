import React, {useState} from 'react'
// import logo from './images/nestle-logo.png'
import logo from './images/swift-logo.jpg'

const Navbar = () => {
	const [show, setShow] = useState(false)

	const toggleMobileMenu = () => {
	    setShow(!show);
	};

	return (
		<>
{/*transition: all 2s cubic-bezier(0.16, 1, 0.3, 1
	transform: rotate(225deg)*/}
			<nav className="mx-auto p-4 bg-green-900">
			    <div className="
			      mx-0
			      lg:container
			      lg:mx-auto
			      flex
			      items-center
			      justify-between
			    ">
			      <a href="/" className="
			        focus:outline-none
			        focus-visible:ring-4
			        ring-neutral-900
			        rounded-sm
			        ring-offset-4
			        ring-offset-green-900
			        lg:absolute
			        lg:left-1/2
			        lg:-translate-x-1/2
			        lg:top-5
			        z-50
			        hover:opacity-75
			        transition-opacity
			      " aria-label="Go to homepage">
			        <img src={logo} width="200" className="w-16 md:w-24 lg:w-28" alt="Home Smart Logo" />
			      </a>
			      <button id="menu" className="
			        lg:hidden
			        focus:outline-none
			        focus-visible:ring-4
			        ring-neutral-900
			        rounded-sm
			        ring-offset-4
			        ring-offset-green-900
			        text-white
			        hover:text-white-600
			        transition-colors
			        "
			        onClick={toggleMobileMenu}
			        aria-expanded="false"
			        aria-label="Open Menu">
			        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"
			          strokeWidth="2">
			          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
			        </svg>
			      </button>
			      <div role="menubar" 
			      className="
				    hidden
			        flex-col
			        gap-4
			        absolute
			        z-40
			        right-0
			        left-0
			        top-16
			        bg-green-900
			        shadow-xl
			        text-center
			        text-lg
			        p-6
			        items-center
			        lg:flex
			        lg:flex-row
			        lg:static
			        lg:shadow-none
			        lg:justify-between
			        lg:w-full
			        ">
			        <a role="menuitem" 
			        className="
			        py-1
			        px-6
			        focus:outline-none
			        focus-visible:ring-4
			        ring-neutral-900
			        rounded-sm
			        ring-offset-4
			        ring-offset-blue-900
			        hover:text-white-600
			        transition-colors
			        text-white
			        w-100
			        " href="/">Home</a>
			        <a role="menuitem" 
			        className="
			          py-1
			          px-6
			          focus:outline-none
			          focus-visible:ring-4
			          ring-neutral-900
			          rounded-sm
			          ring-offset-4
			          ring-offset-blue-900
			          hover:text-white-600
			          transition-colors
			          lg:mr-auto
			          text-white
			          " 
			          href="/about">
			          About
			        </a>
			        <a role="menuitem" className="
			          py-1
			          px-6
			          focus:outline-none
			          focus-visible:ring-4
			          ring-neutral-900
			          rounded-sm
			          ring-offset-4
			          ring-offset-blue-900
			          hover:text-white-600
			          transition-colors
			          text-white
			          " 
			          href="/">
			          Services
			        </a>
			        <a role="menuitem" 
			        className="
			          py-1
			          px-6
			          focus:outline-none
			          focus-visible:ring-4
			          ring-neutral-900
			          rounded-sm
			          ring-offset-4
			          ring-offset-blue-900
			          hover:text-white-600
			          transition-colors
			          text-white
			        " href="/contact">
			        Contact
			        </a>
			      </div>
			    </div>
			    {show && 
			    	<div className="lg:hidden shadow-lg" id="mobile-menu">
					    <div className="px-2 pt-2 pb-3 space-y-1">
					      <a href="/" className="text-white block px-3 py-2 rounded-md text-base font-medium">Home</a>
					      <a href="/about" className="text-white block px-3 py-2 rounded-md text-base font-medium">About us</a>
					      <a href="/" className="text-white block px-3 py-2 rounded-md text-base font-medium">Services</a>
					      <a href="/contact" className="text-white block px-3 py-2 rounded-md text-base font-medium">Contact</a>
					    </div>
					</div>
				}
			</nav>
		</>
	)
}

export default Navbar