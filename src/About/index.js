import {Helmet} from "react-helmet";
import hero from './images/hero.png'
import handshake from './images/handshake.png'

const About = () => {
	return (
		<>
		<Helmet>
	        <title>Swift Education | About Page</title>
	        <meta name="description" content="Swift Education about page" />
	    </Helmet>

			<div className="grid grid-cols-2 gap-4 px-10 py-20 lg:py-20 lg:px-60">
				<div className="my-auto">
					<h1 className="text-6xl text-blue-900 font-bold mb-10 ">Looking to find and hire great talent?</h1>
					<p className="text-xl">Our aim is to provide best-in-class recruitment tools, processes, and automation
					in one complete solution</p>
				</div>
				<div>
					<img width="80%" src={hero} alt="external-vision-economy-flatart-icons-flat-flatarticons-1"/>
				</div>
			</div>

			<div className="grid grid-cols-2 gap-4 px-10 py-20 lg:py-36 lg:px-36 bg-gray-200">
				<div className="text-center">
					<img className="mx-auto mb-10" width="84" height="84" src="https://img.icons8.com/external-flatart-icons-flat-flatarticons/84/external-vision-economy-flatart-icons-flat-flatarticons-1.png" alt="external-vision-economy-flatart-icons-flat-flatarticons-1"/>
					<p className="font-bold text-lg mb-10 uppercase">our vision</p>
					<h1 className="text-5xl font-bold w-2/3 mx-auto leading-10">A world where there is no barrier between talent and opportunity</h1>
				</div>
				<div className="text-center">
					<img className="mx-auto mb-10" width="84" height="84" src="https://img.icons8.com/external-flatart-icons-flat-flatarticons/64/external-vision-economy-flatart-icons-flat-flatarticons-1.png" alt="external-vision-economy-flatart-icons-flat-flatarticons-1"/>
					<p className="font-bold text-lg mb-10 uppercase">our mission</p>
					<h1 className="text-5xl font-bold w-2/3 mx-auto leading-10">to make it easy for employers to find the right person for every job</h1>
				</div>
			</div>

			<div className="grid grid-cols-2 gap-4 px-10 py-20 lg:py-36 lg:px-96 bg-white">
				<div className="">
					<img width="40%" src={handshake} alt="external-vision-economy-flatart-icons-flat-flatarticons-1"/>
				</div>
				<div>
					<h1 className="text-blue-900 mb-10 text-6xl">Join us</h1>
					<p className="text-xl mb-10">enough about us. We're more interested in you. Talent sourcing in our blood, so if you're bright,
					bold and after more than a job, get in touch. We look forward to meeting you.</p>
					<button className="
					text-white
					bg-blue-600
					py-3
					px-10
					rounded-md
					hover:bg-blue-500
					transition-bg">contact us</button>
				</div>
			</div>
		</>
	)
}

export default About