import React from "react";
import j from "../../../resources/images/junior.jpg";
import j2 from "../../../resources/images/junior2.jpg";
import j3 from "../../../resources/images/junior3.jpg";
import j4 from "../../../resources/images/junior4.jpg";
import upper from "../../../resources/images/upper.jpg";

import Fade from "react-reveal/Fade";
function JuniorSec() {
	window.scrollTo({
		top: 0,
		behavior: "smooth",
	});
	return (
		<Fade duration={2000}>
			<div className="cat-container">
				<div className="cat-content">
					<div className="cat-button">
						<h2>junior secondary</h2>
					</div>
					<div className="cat-body">
						<div className="card">
							<div className="image">
								<img src={j} alt="cat-caption" />
							</div>
							<h2>Junior Secondary Math Tutor</h2>
							<p>
								Hire a professional and experienced junior secondary maths tutor
								today.
							</p>
						</div>

						<div className="card">
							<div className="image">
								<img src={upper} alt="cat-caption" />
							</div>
							<h2>Junior Secondary English Tutor</h2>
							<p>
								Hire a professional Junior Secondary English Tutor to help you
								out in English today
							</p>
						</div>

						<div className="card">
							<div className="image">
								<img src={j2} alt="cat-caption" />
							</div>
							<h2>Junior Secondary Science Tutor</h2>
							<p>
								Hire an experienced tutor that would help in Integrated science,
								basic technology, agricultural science today.
							</p>
						</div>

						<div className="card">
							<div className="image">
								<img src={j3} alt="cat-caption" />
							</div>
							<h2>Junior Secondary Commercial Tutor</h2>
							<p>
								Hire an experienced and professional tutor that would help out
								in civic education, business studies, social studies and
								bookkeeping
							</p>
						</div>

						<div className="card">
							<div className="image">
								<img src={j4} alt="cat-caption" />
							</div>
							<h2>British Junior Secondary Math Tutor</h2>
							<p>
								Hire an experienced British Junior Secondary Math Tutor to teach
								you with the British curriculum.
							</p>
						</div>

						<div className="card">
							<div className="image">
								<img src={upper} alt="cat-caption" />
							</div>
							<h2>American Junior Secondary Math Tutor</h2>
							<p>
								Hire an experienced American Junior Secondary Math Tutor to
								teach you with the American curriculum.
							</p>
						</div>

						<div className="card">
							<div className="image">
								<img src={j3} alt="cat-caption" />
							</div>
							<h2>British Junior Secondary English Tutor</h2>
							<p>
								Hire tutors that are proficient in English Grammar, Lexis and
								Structure and vocabulary using the British curriculum
							</p>
						</div>

						<div className="card">
							<div className="image">
								<img src={j} alt="cat-caption" />
							</div>
							<h2>British Junior Secondary Science Tutor</h2>
							<p>
								Hire an experienced tutor that would help in British Integrated
								science, computer technology, and agricultural science today.
							</p>
						</div>

						<div className="card">
							<div className="image">
								<img src={j2} alt="cat-caption" />
							</div>
							<h2>American Junior Secondary Science Tutor</h2>
							<p>
								Hire an experienced tutor that would help in American Integrated
								science, computer technology, and agricultural science today.
							</p>
						</div>

						<div className="card">
							<div className="image">
								<img src={j4} alt="cat-caption" />
							</div>
							<h2>British Junior Secondary History Tutor</h2>
							<p>
								Hire an experienced tutor that would help in British history,
								basic history terms and methodology.
							</p>
						</div>

						<div className="card">
							<div className="image">
								<img src={upper} alt="cat-caption" />
							</div>
							<h2>American Junior Secondary History Tutor</h2>
							<p>
								Hire an experienced tutor that would help in American history,
								and basic history terms and methodology.
							</p>
						</div>
					</div>
				</div>
			</div>
		</Fade>
	);
}

export default JuniorSec;
