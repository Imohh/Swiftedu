import logo from '../Navbar/images/nestle-logo.png'
import hero from './images/hero.png'
import section1 from './images/section-1.webp'
import arrowright from './images/arrow-right.png'
import background from './images/background.jpg'
import Footer from '../Footer'

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
					lg:text-left
					lg:text-6xl 
					sm:text-4xl 
					sm:text-center
					font-bold 
					py-14
					text-white
					">Recruiting made simple: attract and retain talent</h1>
					<p className="
					lg:text-xl
					sm:text-lg
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
						py-3
						px-10
						rounded-md
						hover:bg-blue-500
						transition-bg
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
				<div className="sm:text-center lg:text-left my-auto">
					<p className="text-blue-500 uppercase font-semibold mb-5 text-lg">strategic enhancement</p>
					<h2 className="w-90 text-5xl font-semibold mb-10">Fill more vacancies in a shorter time.</h2>
					<p className="text-gray-400 text-xl">Swift Education is the strategic enhancement to your applicant tracking system. Consolidate your recruitment
					activities on one single platform and build talent pools for long term success in recruitment.</p>
				</div>

				<div className="mx-auto ">
					<img src={section1} width="100%" alt="strategic enhancement" />
				</div>
			</div>

			{/*SECTION*/}
			<div className="grid grid-1 text-center py-20 px-40 bg-cover bg-center" style={{ backgroundImage: `url(${background})` }}>
				<div>
					<p className="text-white mb-10 text-xl">Would you like to see the Swift Education Platform in action?</p>
					<button className="
					text-white
					bg-blue-600
					py-3
					px-10
					rounded-md
					hover:bg-blue-500
					transition-bg
					">Request a Demo</button>
				</div>
			</div>

			{/*SECTION*/}
			<div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-4 bg-white lg:px-20 lg:py-40 sm:px-10 sm:py-20">
				<div className="">
					<p className="text-blue-500 uppercase font-semibold mb-5 text-lg sm:text-center lg:text-left">solution challenge</p>
					<h2 className="w-90 text-5xl font-semibold mb-10 sm:text-center lg:text-left">A solution for every recruitment challenge</h2>
					<div className="
					sm:flex
					sm:justify-center
					lg:float-left">
						<button className="
						flex 
						items-center
						jstify-between
						text-white
						bg-blue-600
						py-3
						px-10
						rounded-md
						hover:bg-blue-500
						transition-bg
						">See All <img className="ml-2" width="24" height="24" src={arrowright} alt="long-arrow-right"/>
						</button>
					</div>
				</div>
				<div className="">
					<div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-4">
						<div className="sm:text-center lg:text-left">
							<div className="
							sm:mt-10
							lg:mt-0
							sm:flex
							sm:justify-center
							lg:flex
							lg:justify-start">
								<img width="55" height="55" src="https://img.icons8.com/ios/55/louvre-pyramid.png" alt="louvre-pyramid"/>
							</div>
							<h2 className="mt-10 text-2xl capitalize font-bold">talent sourcing</h2>
							<p className="mt-5 text-gray-400">Swift Education is the strategic enhancement to your applicant tracking system. Consolidate your recruitment
								activities on one single platform and build talent pools for long term success in recruitment.</p>
						</div>

						<div className="sm:text-center lg:text-left">
							<div className="
							sm:mt-10
							lg:mt-0
							sm:flex
							sm:justify-center
							lg:flex
							lg:justify-start">
								<img width="55" height="55" src="https://img.icons8.com/ios/55/louvre-pyramid.png" alt="louvre-pyramid"/>
							</div>
							<h2 className="mt-10 text-2xl capitalize font-bold">internal mobility</h2>
							<p className="mt-5 text-gray-400">Swift Education is the strategic enhancement to your applicant tracking system. Consolidate your recruitment
								activities on one single platform and build talent pools for long term success in recruitment.</p>
						</div>
					</div>
				</div>
			</div>

			{/*SECTION*/}
			<div className="grid lg:grid-cols-1 sm:grid-cols-1 gap-4 bg-white lg:px-20 lg:py-40 sm:px-10 sm:py-20">
				<div className="bg-blue-500 lg:p-40 sm:p-20 rounded-lg shadow-lg">
					<div className="grid lg:grid-cols-2 sm:grid-cols-1">
						<div>
							<h2 className=" text-5xl text-white capitalize font-bold">Find the best talent and build relationship!</h2>
						</div>
						<div>
							<p className="text-lg mb-5 text-white lg:mt-0 sm:mt-5">The most complete talent relationship platform for talent sourcing, recruitment events and internal mobility.</p>
							<form>
								<div className="flex">
									<input type="text" className="
									rounded-l-md 
									py-2 
									px-4 
									border 
									border-gray-300 
									focus:outline-none 
									focus:ring-blue-500 
									focus:border-blue-500 
									flex-grow" placeholder="Your Email" />
									<button className="
									rounded-r-md 
									bg-blue-900 
									text-white 
									py-2 
									px-4 
									ml-2
									hover:bg-blue-800
									transition-bg">Get a Demo</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
			<Footer/>
		</>
	)
}

export default Homepage