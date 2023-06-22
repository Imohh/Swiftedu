import {Helmet} from "react-helmet";
import logo from '../Navbar/images/nestle-logo.png'
import hero from './images/hero.png'
import tools from './images/tools.jpg'
import vacancy from './images/vacancy.jpg'
import section1 from './images/section-1.webp'
import arrowright from './images/arrow-right.png'
import background from './images/background.jpg'
import comma from './images/comma.png'
import tots from './images/tots-n-cots.png'
import leventis from './images/leventis.png'
import nobelova from './images/nobelova.png'
import rosemore from './images/rosemore.png'
import soteria from './images/soteria.jpg'

const Homepage = () => {
	return (
		<>
		<Helmet>
	        <title>Welcome to Swift Education | Hire the best talent today!</title>
	        <meta name="description" content="Swift Education about page" />
	    </Helmet>

		{/*HERO SECTION*/}
			<div className="
			grid 
			lg:grid-cols-2 
			sm:grid-cols-1
			gap-4
			px-5 
			lg:py-2
			lg:px-20
			sm:py-10
			sm:px-10
			bg-blue-900">
				<div className="my-auto wow fadeInLeft">
					<h1 className="
					text-3xl
					md:text-6xl
					lg:text-6xl
					lg:text-left
					lg:text-6xl 
					sm:text-4xl 
					sm:text-center
					font-bold 
					py-14
					text-white
					text-center lg:text-left md:text-left
					">Recruiting made simple: attract and retain talent</h1>
					<p className="
					lg:text-xl
					sm:text-lg
					lg:text-left
					sm:text-center
					mb-12
					text-white
					text-center lg:text-left md:text-left
					">The most complete talent relationship platform for talent sourcing that takes your
					recruiting into the digital age</p>
					<div className="
					flex
					justify-center
					lg:float-left
					mb-10
					lg:mb-0
					md:mb-0
					sm:mb-0">
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
				<div className=" mx-auto my-auto sm:mt-20
				wow fadeInRight">
					<img width="80%" className="mx-auto" src={hero} alt="hero"/>
				</div>
				<div className="grid grid-cols-2 mt-4 mb-20 wow fadeInLeft">
					<div className="flex items-center border-solid border-r border-gray-200">
					  <h1 className="mr-2 text-white text-4xl sm:text-6xl lg:text-6xl font-semibold">4.5</h1>
					  <p className="text-gray-400 text-lg sm:text-xl md:text-xl lg:text-xl">Value rated from Trustpilot</p>
					</div>
					<div className="flex items-center ml-4">
					  <h1 className="mr-2 text-white text-4xl sm:text-6xl lg:text-6xl font-semibold">8k</h1>
					  <p className="text-gray-400 text-lg sm:text-xl md:text-xl lg:text-xl">Value rated from Trustpilot</p>
					</div>
				</div>
			</div>
			{/*PARTNERS SECTION*/}
			<div className="p-10 md:p-20 lg:p-20 bg-gray-200">
				<p className="wow fadeInUp text-center pb-12 text-gray-400 text-xl font-bold">Swift Education is an award winning platform trusted by leading employer companies and schools</p>
				
				<div className="flex gap-4 justify-center px-0 lg:px-36 sm:text-center">
					<div className="wow bounceIn">
						<img src={tots} width="200"  className="w-48 md:w-64 lg:w-36" alt="duolingo-logo"/>
					</div>
					<div className="wow bounceIn">
						<img src={leventis} width="200" className="w-48 md:w-64 lg:w-72" alt="Home Smart Logo" />
					</div>
					<div className="wow bounceIn">
						<img src={nobelova} width="200" className="w-48 md:w-64 lg:w-72" alt="Home Smart Logo" />
					</div>
					<div className="wow bounceIn">
						<img src={rosemore} width="200" className="w-48 md:w-64 lg:w-72" alt="Home Smart Logo" />
					</div>
					<div className="wow bounceIn">
						<img src={soteria} width="200" className="w-48 md:w-64 lg:w-72" alt="Home Smart Logo" />
					</div>
				</div>
			</div>

			{/*SECTION*/}
			<div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-4 bg-white px-5 py-10 lg:px-20 lg:py-40 sm:px-10 sm:py-20">
				<div className="sm:text-center lg:text-left my-auto 
				wow fadeInUp"
				 data-wow-delay="0.2s">
					<p className="text-blue-500 uppercase font-semibold mb-5 text-base md:text-lg lg:text-lg text-center lg:text-left md:text-left">strategic enhancement</p>
					<h2 className="
					wow bounceIn
					w-90 text-3xl font-semibold md:text-5xl lg:text-5xl font-semibold mb-10 text-center lg:text-left md:text-left"
					data-wow-delay="0.2s"
					>
						Fill more vacancies in a shorter time.
					</h2>
					<p className="
					text-gray-400 text-base md:text-lg lg:text-xl text-center lg:text-left md:text-left">Swift Education is the strategic enhancement to your applicant tracking system. Consolidate your recruitment
					activities on one single platform and build talent pools for long term success in recruitment.</p>
				</div>

				<div className="mx-auto wow fadeInUp"
				 data-wow-delay="0.2s">
					<img src={vacancy} width="100%" alt="strategic enhancement" />
				</div>
			</div>

			{/*SECTION*/}
			<div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-4 bg-gray-200 px-5 py-10 lg:px-20 lg:py-0 sm:px-10 sm:py-0">
				<div className="mx-auto order-2 lg:order-1 wow fadeInUp">
					<img src={tools} width="100%" alt="strategic enhancement" />
				</div>
				
				<div className="sm:text-center py-10 lg:py-0 md:py-0 lg:text-left my-auto order-1 lg:order-2 sm:px-0 lg:px-10 wow fadeInUp">
					<p className="text-blue-500 uppercase font-semibold mb-5 text-base md:text-lg lg:text-lg text-center lg:text-left md:text-left">tools and systems</p>
					<h2 className="w-90 text-3xl font-semibold md:text-5xl lg:text-5xl font-semibold mb-10 text-center lg:text-left md:text-left">Recruiting tools and tracking systems</h2>
					<p className="text-gray-400 text-base md:text-lg lg:text-xl text-center lg:text-left md:text-left">Swift Education is fully integrated wth other recruiting tools and applicant tracking
					systems. With other recruiting tools and applicant tracking systems.</p>

					<div className="
					mt-10
					flex
					justify-center
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
						">
						discover all <img className="ml-2" width="24" height="24" src={arrowright} alt="long-arrow-right"/>
						</button>
					</div>
				</div>
			</div>

			{/*SECTION*/}
			<div className="grid grid-1 text-center px-5 py-16 md:py-20 md:px-40 lg:py-20 lg:px-40 bg-cover bg-center" style={{ backgroundImage: `url(${background})` }}>
				<div className="wow fadeInUp">
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
			<div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-4 bg-white px-5 py-10 lg:px-20 lg:py-40 sm:px-10 sm:py-20">
				<div className="wow fadeInLeft">
					<p className="ext-blue-500 uppercase font-semibold mb-5 text-base md:text-lg lg:text-lg text-center lg:text-left md:text-left">solution challenge</p>
					<h2 className="w-90 text-3xl font-semibold md:text-5xl lg:text-5xl font-semibold mb-10 text-center lg:text-left md:text-left">A solution for every recruitment challenge</h2>
					<div className="
					flex
					justify-center
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
				<div className="wow fadeInRight">
					<div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-4">
						<div className="sm:text-center lg:text-left">
							<div className="
							mt-10
							sm:mt-10
							lg:mt-0
							flex
							justify-center
							lg:flex
							lg:justify-start">
								<img width="55" height="55" src="https://img.icons8.com/ios/55/louvre-pyramid.png" alt="louvre-pyramid"/>
							</div>
							<h2 className="mt-10 text-2xl capitalize font-bold text-center lg:text-left md:text-left">talent sourcing</h2>
							<p className="mt-5 text-gray-400 text-center lg:text-left md:text-left">Swift Education is the strategic enhancement to your applicant tracking system. Consolidate your recruitment
								activities on one single platform and build talent pools for long term success in recruitment.</p>
						</div>

						<div className="sm:text-center lg:text-left">
							<div className="
							sm:mt-10
							lg:mt-0
							flex
							justify-center
							lg:flex
							lg:justify-start">
								<img width="55" height="55" src="https://img.icons8.com/ios/55/louvre-pyramid.png" alt="louvre-pyramid"/>
							</div>
							<h2 className="mt-10 text-2xl capitalize font-bold text-center lg:text-left md:text-left">internal mobility</h2>
							<p className="mt-5 text-gray-400 text-center lg:text-left md:text-left">Swift Education is the strategic enhancement to your applicant tracking system. Consolidate your recruitment
								activities on one single platform and build talent pools for long term success in recruitment.</p>
						</div>
					</div>
				</div>
			</div>

			{/* TESTIMONIAL SECTION*/}
			<div className="bg-gray-200 px-5 py-10 lg:px-20 lg:py-40 sm:px-10 sm:py-20">
				<h1 className="wow fadeInUp text-center text-4xl font-bold capitalize pb-10 mx-auto">What our clients think about us</h1>
				<div className="gap-4 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 bg-gray-200 lg:py-10 lg:px-36 sm:py-10">
					<div className="wow bounceIn bg-white p-10 w-full mx-auto shadow-lg">
						<div className="pb-5">
							<img className="float-left" width="40" height="40" src={comma} alt="comma" />
							<img width="40" height="40" src={comma} alt="comma" />
						</div>
						<p className="text-2xl pb-10">"I don't have to worry about getting new members of staff for my school. Swift Education handles it with ease"</p>
						<p className="text-xl font-semibold">Mrs. Chikwendu</p>
						<p className="text-gray-400">Owner of Tot n' Cots School</p>
					</div>
					<div className="wow bounceIn bg-white p-10 w-full mx-auto shadow-lg">
						<div className="pb-5">
							<img className="float-left" width="40" height="40" src={comma} alt="comma" />
							<img width="40" height="40" src={comma} alt="comma" />
						</div>
						<p className="text-2xl pb-10">"At first i was skeptical but after working with Swift Edu for over 2 years,
						i can confidently recommend them to people who need their services"</p>
						<p className="text-xl font-semibold">Mr. Emeka</p>
						<p className="text-gray-400">HR Leventis</p>
					</div>
					<div className="wow bounceIn bg-white p-10 w-full mx-auto shadow-lg">
						<div className="pb-5">
							<img className="float-left" width="40" height="40" src={comma} alt="comma" />
							<img width="40" height="40" src={comma} alt="comma" />
						</div>
						<p className="text-2xl pb-10">"Extremely professional and deliver on time"</p>
						<p className="text-xl font-semibold">Mrs. Temitope</p>
						<p className="text-gray-400">Marketer at Ocean View</p>
					</div>
				</div>
			</div>


			{/*SECTION*/}
			<div className="grid lg:grid-cols-1 sm:grid-cols-1 bg-white lg:px-20 lg:py-40 sm:px-10 sm:py-20">
				<div className="wow fadeInUp bg-blue-500 py-10 px-3 lg:px-30 lg:py-40 sm:p-20 md:rounded-lg lg:rounded-lg shadow-lg">
					<div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-0 gap-4 xl:gap-40">
						<h2 className="
							wow fadeInLeft
							text-3xl md:text-5xl lg:text-5xl text-white 
							font-bold text-center lg:text-left md:text-left">
							Find the best talent and build relationship!
						</h2>
						<div>
							<p className="
							wow fadeInRight
							mt-10 md:mt-0 mb-5 lg:mt-0 sm:mt-5
							text-white text-lg text-center lg:text-left md:text-left">
							The most complete talent relationship platform for talent sourcing, recruitment events and internal mobility.</p>
							<form className="flex justify-center lg:flex-none lg:justify-between">
								<div className="lg:flex wow fadeInRight">
									<input type="text" className="
									lg:rounded-l-md 
									lg:py-2 
									lg:px-4 
									md:py-2 
									md:px-4 
									mb-5
									lg:mb-0
									border 
									border-gray-300 
									focus:outline-none 
									focus:ring-blue-500 
									focus:border-blue-500 
									flex-grow" placeholder="Your Email" />
									<div className="flex justify-center">
									<button className="
									lg:rounded-r-md 
									bg-blue-900 
									text-white 
									py-2 
									px-4 
									ml-0
									lg:ml-2
									hover:bg-blue-800
									transition-bg">Get a Demo</button>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Homepage