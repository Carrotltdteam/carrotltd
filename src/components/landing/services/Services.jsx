import React from "react";
import conversation from "../../../resources/images/conversation.png";
import hand from "../../../resources/images/hand.png";
import global from "../../../resources/images/global.png";
function Services() {
	return (
		<div className="services-container">
			<div className="container">
				<h1>Get Professional Service</h1>
				<p className="text">Choose only the best and professional options</p>
				<div className="services">
					<div className="card">
						<div className="card-img">
							<img src={hand} alt="card-imgage" />
						</div>
						<h2>Tell us where you need help.</h2>
						<p className="card-text">
							Connect with professionals in all subjects and skills you might
							want to learn.
						</p>
					</div>
					<div className="card">
						<div className="card-img">
							<img src={global} alt="card-imgage" />
						</div>
						<h2>Tutor Matching</h2>
						<p className="card-text">
							We provide you the perfect tutor to work with your requirements
							and qualifications.
						</p>
					</div>

					<div className="card">
						<div className="card-img">
							<img src={conversation} alt="card-imgage" />
						</div>
						<h2>Meet your Tutor</h2>
						<p className="card-text">
							Schedule a convenient time to meet your tutor and start your
							lessons.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Services;
