import hero from './images/hero.png'
import logo from '../Navbar/images/nestle-logo.png'

const Homepage = () => {
	return (
		<>
		{/*HERO SECTION*/}
			<div className="
			grid 
			lg:grid-cols-2 
			sm:grid-cols-1
			gap-4
			lg:py-2
			lg:px-20
			sm:py-10
			sm:px-10
			bg-blue-900">
				<div>
					<h1 className="
					text-6xl
					lg:text-6xl 
					sm:text-6xl 
					lg:text-left
					sm:text-center
					font-bold 
					sm:text-lg 
					py-14
					text-white
					">Recruiting made simple: attract and retain talent</h1>
					<p className="
					text-xl
					lg:text-left
					sm:text-center
					mb-12
					text-white
					">The most complete talent relationship platform for talent sourcing that takes your
					recruiting into the digital age</p>
					<div className="
					sm:flex
					sm:justify-center
					lg:float-left">
						<button className="
						text-white
						bg-blue-600
						py-5
						px-10
						rounded-md
						">Request a Demo</button>
					</div>
				</div>
				<div className="mx-auto my-auto
				sm:mt-20">
					<img src={hero} alt="hero"/>
				</div>
				<div className="grid grid-cols-2 mt-4 mb-20">
					<div className="flex items-center border-solid border-r border-gray-200">
					  <h1 className="mr-2 text-white text-6xl font-semibold">4.5</h1>
					  <p className="text-gray-400 text-xl">Value rated from Trustpilot</p>
					</div>
					<div className="flex items-center ml-4">
					  <h1 className="mr-2 text-white text-6xl font-semibold">8k</h1>
					  <p className="text-gray-400 text-xl">Value rated from Trustpilot</p>
					</div>
				</div>
			</div>
			{/*PARTNERS SECTION*/}
			<div className="p-20 bg-gray-200">
				<p className="text-center pb-12 text-gray-400 text-xl">Swift Education is an award winning platform trusted by leading employer brands</p>
				<div className="grid lg:grid-cols-5 sm:grid-cols-3 sm:text-center gap-4">
					<div>
						<img src={logo} width="200" className="w-48 md:w-64 lg:w-72" alt="Home Smart Logo" />
					</div>
					<div>
						<img src={logo} width="200" className="w-48 md:w-64 lg:w-72" alt="Home Smart Logo" />
					</div>
					<div>
						<img src={logo} width="200" className="w-48 md:w-64 lg:w-72" alt="Home Smart Logo" />
					</div>
					<div>
						<img src={logo} width="200" className="w-48 md:w-64 lg:w-72" alt="Home Smart Logo" />
					</div>
					<div>
						<img src={logo} width="200" className="w-48 md:w-64 lg:w-72" alt="Home Smart Logo" />
					</div>
				</div>
			</div>

			{/*SECTION*/}
			<div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-4 bg-white lg:px-20 lg:py-40 sm:px-10 sm:py-20">
				<div className="sm:text-center lg:text-left">
					<p className="text-blue-500 uppercase font-semibold mb-5">strategic enhancement</p>
					<h2 className="text-4xl font-semibold mb-10">Fill more vacancies in a shorter time</h2>
					<p className="text-gray-400 text-xl">Swift Education is the strategic enhancement to your applicant tracking system. Consolidate your recruitment
					activities on one single platform and build talent pools for long term success in recruitment.</p>
				</div>

				<div>

				</div>
			</div>
		</>
	)
}

export default Homepage