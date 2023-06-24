import logo from '../Navbar/images/swift-logo.jpg'
import facebook from './images/facebook.png'
import instagram from './images/instagram.png'
import twitter from './images/twitter.png'

const Footer = () => {
	return (
		<>
			<div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-4 p-10 lg:px-20 lg:py-20 md:px-20 md:py-10 sm:py-20 sm:px-10 md:py-20 bg-green-900">
				<div>
					<div className="">
						<img src={logo} width="200" className="w-28 md:w-24 lg:w-28" alt="Home Smart Logo" />
					</div>
					<p className="text-gray-400 font-semibold text-left sm:text-left lg:text-left md:text-left sm:text-left">The most complete recruitment agency for talent suorcing, recruitment events and internal mobility.</p>

				</div>
				<div>
					<h3 className="capitalize text-white text-2xl font-bold text-left lg:text-left md:text-left sm:text-left lg:mt-0 sm:mt-o md:mt-0 mt-10">solutions</h3>
					<ul>
						<li className="capitalize mt-3 text-gray-400 font-semibold text-left lg:text-left md:text-left sm:text-left"><a href="">talent sourcing</a></li>
						<li className="capitalize mt-3 text-gray-400 font-semibold text-left lg:text-left md:text-left sm:text-left"><a href="">employee referrals</a></li>
						<li className="capitalize mt-3 text-gray-400 font-semibold text-left lg:text-left md:text-left sm:text-left"><a href="">alumni programs</a></li>
						<li className="capitalize mt-3 text-gray-400 font-semibold text-left lg:text-left md:text-left sm:text-left"><a href="">internal mobility</a></li>
					</ul>
					<div className="
					flex mt-2 md:mt-10 sm:mt-10 lg:mt-10
					">
						<a href="">
						  <div className="p-3 bg-green-500 mr-2 h-10 w-10 rounded-3xl">
						    <img width="20" src={facebook} alt="facebook" />
						  </div>
						</a>
						<a href="">
						  <div className="p-3 bg-green-500 mr-2 h-10 w-10 rounded-3xl">
						    <img width="20" src={instagram} alt="instagram" />
						  </div>
					  	</a>
						<a href="">
						  <div className="p-3 bg-green-500 mr-2 h-10 w-10 rounded-3xl">
					    	<img width="20" src={twitter} alt="twitter" />
						  </div>
					  	</a>
					</div>
				</div>
				<div>
					<h3 className="capitalize text-white text-2xl font-bold text-left lg:text-left md:text-left sm:text-left">resources</h3>
					<ul>
						<li className="capitalize mt-3 text-gray-400 font-semibold text-left lg:text-left md:text-left sm:text-left"><a href="">recruitment market</a></li>
						<li className="capitalize mt-3 text-gray-400 font-semibold text-left lg:text-left md:text-left sm:text-left"><a href="">video gallery</a></li>
						<li className="capitalize mt-3 text-gray-400 font-semibold text-left lg:text-left md:text-left sm:text-left"><a href="">webiners & events</a></li>
						<li className="capitalize mt-3 text-gray-400 font-semibold text-left lg:text-left md:text-left sm:text-left"><a href="">success stories</a></li>
					</ul>
				</div>
				<div>
					<h3 className="capitalize text-white text-2xl font-bold text-left lg:text-left md:text-left sm:text-left">company</h3>
					<ul>
						<li className="capitalize mt-3 text-gray-400 font-semibold text-left lg:text-left md:text-left sm:text-left"><a href="/contact">contact us</a></li>
						<li className="capitalize mt-3 text-gray-400 font-semibold text-left lg:text-left md:text-left sm:text-left"><a href="/about">about</a></li>
						<li className="capitalize mt-3 text-gray-400 font-semibold text-left lg:text-left md:text-left sm:text-left"><a href="">privacy policy</a></li>
						<li className="capitalize mt-3 text-gray-400 font-semibold text-left lg:text-left md:text-left sm:text-left"><a href="">legal</a></li>
					</ul>
				</div>

			</div>
			<div className="text-center p-5 bg-green-900 border-t border-solid border-gray-500">
				<p className="text-white text-base md:text-lg lg:text-lg">All rights reserved. © Swift Educational Consult</p>
				<p className="text-white text-base">Developed with ❤️ by <a href="https://instagram.com/oprime.ng">Oprime.ng</a></p>
			</div>
		</>
	)
}

export default Footer