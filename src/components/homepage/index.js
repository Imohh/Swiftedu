import hero from './images/hero.png'

const Homepage = () => {
	return (
		<>
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
						bg-blue-500
						p-5
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
					  <p className="text-gray-700">Value rated from Trustpilot</p>
					</div>
					<div className="flex items-center ml-4">
					  <h1 className="mr-2 text-white text-6xl font-semibold">8k</h1>
					  <p className="text-gray-700">Value rated from Trustpilot</p>
					</div>
				</div>
			</div>
		</>
	)
}

export default Homepage