import logo from '../Navbar/images/nestle-logo.png'
import facebook from './images/facebook.png'
import instagram from './images/instagram.png'
import twitter from './images/twitter.png'

const Footer = () => {
	return (
		<>
			<div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-4 px-20 py-20 bg-blue-900">
				<div>
					<img src={logo} width="200" className="w-48 md:w-64 lg:w-72" alt="Home Smart Logo" />
					<p className="text-gray-400 font-semibold">The most complete recruitment agency for talent sorcing, recruitment events and internal mobility.</p>

				</div>
				<div>
					<h3 className="capitalize text-white text-2xl font-bold">solutions</h3>
					<ul>
						<li className="capitalize mt-3 text-gray-400 font-semibold"><a href="">talent sourcing</a></li>
						<li className="capitalize mt-3 text-gray-400 font-semibold"><a href="">employee referrals</a></li>
						<li className="capitalize mt-3 text-gray-400 font-semibold"><a href="">alumni programs</a></li>
						<li className="capitalize mt-3 text-gray-400 font-semibold"><a href="">internal mobility</a></li>
					</ul>
					<div className="flex mt-10">
						<a href="">
						  <div className="p-3 bg-blue-500 mr-2 h-10 w-10 rounded-3xl">
						    <img width="20" src={facebook} alt="facebook" />
						  </div>
						</a>
						<a href="">
						  <div className="p-3 bg-blue-500 mr-2 h-10 w-10 rounded-3xl">
						    <img width="20" src={instagram} alt="instagram" />
						  </div>
					  	</a>
						<a href="">
						  <div className="p-3 bg-blue-500 mr-2 h-10 w-10 rounded-3xl">
					    	<img width="20" src={twitter} alt="twitter" />
						  </div>
					  	</a>
					</div>
				</div>
				<div>
					<h3 className="capitalize text-white text-2xl font-bold">resources</h3>
					<ul>
						<li className="capitalize mt-3 text-gray-400 font-semibold"><a href="">recruitment market</a></li>
						<li className="capitalize mt-3 text-gray-400 font-semibold"><a href="">video gallery</a></li>
						<li className="capitalize mt-3 text-gray-400 font-semibold"><a href="">webiners & events</a></li>
						<li className="capitalize mt-3 text-gray-400 font-semibold"><a href="">success stories</a></li>
					</ul>
				</div>
				<div>
					<h3 className="capitalize text-white text-2xl font-bold">company</h3>
					<ul>
						<li className="capitalize mt-3 text-gray-400 font-semibold"><a href="">contact us</a></li>
						<li className="capitalize mt-3 text-gray-400 font-semibold"><a href="">careers</a></li>
						<li className="capitalize mt-3 text-gray-400 font-semibold"><a href="">privacy policy</a></li>
						<li className="capitalize mt-3 text-gray-400 font-semibold"><a href="">legal</a></li>
					</ul>
				</div>

			</div>
			<div className="text-center p-5 bg-blue-900 border-t border-solid border-gray-500">
				<p className="text-white text-lg">All rights reserved. @Swift Education</p>
			</div>
		</>
	)
}

export default Footer