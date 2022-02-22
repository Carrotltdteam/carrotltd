import React from "react";
import upper from "../../../resources/images/upper.jpg";
import upper6 from "../../../resources/images/upper6.jpg";
import upper7 from "../../../resources/images/upper7.jpg";
import upper8 from "../../../resources/images/upper8.jpg";
import upper9 from "../../../resources/images/upper9.jpg";
import j from "../../../resources/images/junior.jpg";
import j2 from "../../../resources/images/junior2.jpg";

import Fade from "react-reveal/Fade";
function Waec() {
	window.scrollTo({
		top: 0,
		behavior: "smooth",
	});
	return (
		<Fade duration={2000}>
			<div className="cat-container">
				<div className="cat-content">
					<div className="cat-button">
						<h2>waec</h2>
					</div>
					<div className="cat-body">
						<div className="card">
							<div className="image">
								<img src={j} alt="cat-caption" />
							</div>
							<h2>WAEC Math Tutor</h2>
							<p>
								Hire an experienced and professional WAEC mathematics tutor to
								help you prepare for your upcoming exams.
							</p>
						</div>

						<div className="card">
							<div className="image">
								<img src={upper7} alt="cat-caption" />
							</div>
							<h2>WAEC English Tutor</h2>
							<p>
								Hire a Professional English Language Tutor to help you with exam
								preparations.
							</p>
						</div>

						<div className="card">
							<div className="image">
								<img src={upper9} alt="cat-caption" />
							</div>
							<h2>WAEC Physics Tutor</h2>
							<p>
								Hire an experienced Waec Physics tutor to help you in passing
								your exams.
							</p>
						</div>

						<div className="card">
							<div className="image">
								<img src={j2} alt="cat-caption" />
							</div>
							<h2>WAEC Further Maths Tutor</h2>
							<p>
								Hire an experienced Waec Further Maths Tutor to help with exams
								preparations.
							</p>
						</div>

						<div className="card">
							<div className="image">
								<img src={upper6} alt="cat-caption" />
							</div>
							<h2>WAEC Chemistry Tutor</h2>
							<p>
								Hire a professional and experienced Waec Chemistry Tutor to help
								you with your exams.
							</p>
						</div>

						<div className="card">
							<div className="image">
								<img src={j2} alt="cat-caption" />
							</div>
							<h2>WAEC Biology Tutor</h2>
							<p>
								Hire an experienced Waec Biology Tutor to help you prepare for
								your upcoming exams.
							</p>
						</div>

						<div className="card">
							<div className="image">
								<img src={j} alt="cat-caption" />
							</div>
							<h2>WAEC Government Tutor</h2>
							<p>
								Hire a good tutor to help you prepare for your government exams.
							</p>
						</div>

						<div className="card">
							<div className="image">
								<img src={upper9} alt="cat-caption" />
							</div>
							<h2>WAEC Accounting Tutor</h2>
							<p>
								Hire a professional and experienced accounting tutor to help you
								in your waec exams.
							</p>
						</div>

						<div className="card">
							<div className="image">
								<img src={upper} alt="cat-caption" />
							</div>
							<h2>WAEC Commerce Tutor</h2>
							<p>
								Hire a tutor experienced in teaching Government, Commerce,
								History, Economics and Sociology to help you prepare for your
								upcoming WAEC exams.
							</p>
						</div>

						<div className="card">
							<div className="image">
								<img src={upper8} alt="cat-caption" />
							</div>
							<h2>WAEC Agric Tutor</h2>
							<p>
								Hire a good agric science tutor to help you prepare for your
								upcoming exams.
							</p>
						</div>

						<div className="card">
							<div className="image">
								<img src={upper6} alt="cat-caption" />
							</div>
							<h2>WAEC Literature in English Tutor</h2>
							<p>
								Hire a good Literature in English tutor to help you prepare for
								your upcoming exams.
							</p>
						</div>
					</div>
				</div>
			</div>
		</Fade>
	);
}

export default Waec;
