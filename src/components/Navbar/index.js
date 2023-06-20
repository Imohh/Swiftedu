import React, {useState} from 'react'
import logo from './images/nestle-logo.png'

const Navbar = () => {
	const [show, setShow] = useState(false)

	return (
		<>

			<nav className="mx-auto p-4 bg-blue-900">
			    <div className="
			      container
			      mx-auto
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
			        ring-offset-blue-900
			        lg:absolute
			        lg:left-1/2
			        lg:-translate-x-1/2
			        lg:top-5
			        z-50
			        hover:opacity-75
			        transition-opacity
			      " aria-label="Go to homepage">
			        <img src={logo} width="200" className="w-48 md:w-64 lg:w-72" alt="Home Smart Logo" />
			      </a>
			      <button id="menu" className="
			        lg:hidden
			        focus:outline-none
			        focus-visible:ring-4
			        ring-neutral-900
			        rounded-sm
			        ring-offset-4
			        ring-offset-blue-900
			        text-white
			        hover:text-white-600
			        transition-colors
			        " 
			        aria-expanded="false"
			        aria-label="Open Menu">
			        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"
			          stroke-width="2">
			          <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
			        </svg>
			      </button>
			      {show && <div role="menubar" 
			      className="
			        flex-col
			        gap-4
			        absolute
			        z-40
			        right-0
			        left-0
			        top-16
			        bg-blue-900
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
			          href="/">
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
			        " href="/">
			        Contact
			        </a>
			      </div>}
			    </div>
			</nav>
		</>
	)
}

export default Navbar