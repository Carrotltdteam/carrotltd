import React from "react";
import upper5 from "../../../resources/images/upper5.jpg";
import upper11 from "../../../resources/images/upper11.jpg";
import Fade from "react-reveal/Fade";
function Sat() {
	window.scrollTo({
		top: 0,
		behavior: "smooth",
	});
	return (
		<Fade duration={2000}>
			<div className="cat-container">
				<div className="cat-content">
					<div className="cat-button">
						<h2>sat</h2>
					</div>
					<div className="cat-body">
						<div className="card">
							<div className="image">
								<img src={upper5} alt="cat-caption" />
							</div>
							<h2>SAT Maths Tutor</h2>
							<p>
								Hire a good and experienced SAT Maths home tutor to help you
								score above 680 in your upcoming SAT exams.
							</p>
						</div>

						<div className="card">
							<div className="image">
								<img src={upper11} alt="cat-caption" />
							</div>
							<h2>SAT English Tutor</h2>
							<p>
								Hire a professional and experienced SAT English language tutor
								to help you score above 680 in your exams.
							</p>
						</div>
					</div>
				</div>
			</div>
		</Fade>
	);
}

export default Sat;
