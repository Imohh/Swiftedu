import {Helmet} from "react-helmet";
import handwaving from './images/hand-waving.png'
import nigeriamap from './images/nigeria-map.webp'


const Contact = () => {
	return (
		<>
			<Helmet>
		        <title>Swift Education | Contact Page</title>
		        <meta name="description" content="Swift Education about page" />
		    </Helmet>
			<div className="text-center mx-auto p-20">
				<p className="text-blue-900 pb-5 text-lg font-semibold capitalize">contact us</p>
				<h1 className="text-3xl md:text-6xl lg:text-6xl pb-5 font-bold">Love to hear from you, get in touch</h1>
				<p className="text-md md:text-lg :lg:text-lg">We have an office and a team to attend to your needs from anywhere in the country</p>
			</div>

			<div className="mx-auto flex justify-center">
				<img width="30%" src={nigeriamap} alt="world map" />
			</div>

			<div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-10 pb-10 md:pt-20 md:pb-40 lg:pt-20 lg:pb-40">
				<div className="text-center pb-10 md:pb-0 lg:pb-0">
					<p className="text-lg capitalize font-semibold pb-5">support</p>
					<p className="text-gray-400 pb-2 lg:pb-5">Our friendly team is here to help</p>
					<p className="text-blue-900 font-semibold">support@swiftedu.com</p>
				</div>
				<div className="text-center pb-10 md:pb-0 lg:pb-0">
					<p className="text-lg capitalize font-semibold pb-5">sales</p>
					<p className="text-gray-400 pb-2 lg:pb-5">Questions or queries? Get in touch!</p>
					<p className="text-blue-900 font-semibold">sales@swiftedu.com</p>
				</div>
				<div className="text-center">
					<p className="text-lg capitalize font-semibold pb-5">phone</p>
					<p className="text-gray-400 pb-2 lg:pb-5">Mon-Fri from 8am -5pm</p>
					<p className="text-blue-900 font-semibold">08106450944</p>
				</div>
			</div>
		</>
	)
}

export default Contact