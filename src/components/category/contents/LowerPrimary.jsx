import React from "react";
import upper15 from "../../../resources/images/upper15.jpg";
import upper13 from "../../../resources/images/upper13.jpg";
import upper14 from "../../../resources/images/upper14.jpg";
import Fade from "react-reveal/Fade";
function LowerPrimary() {
	window.scrollTo({
		top: 0,
		behavior: "smooth",
	});
	return (
		<Fade duration={2000}>
			<div className="cat-container">
				<div className="cat-content">
					<div className="cat-button">
						<h2>lower primary</h2>
					</div>
					<div className="cat-body">
						<div className="card">
							<div className="image">
								<img src={upper15} alt="cat-caption" />
							</div>
							<h2>Pre-Primary &amp; Lower Primary Tutor</h2>
							<p>
								Hire experienced tutors in phonics, maths, handwriting and
								tutors that would help in homework support.
							</p>
						</div>

						<div className="card">
							<div className="image">
								<img src={upper13} alt="cat-caption" />
							</div>
							<h2>Upper Nursery</h2>
							<p>
								Hire experienced tutors in phonics, maths, handwriting and
								tutors that would help in homework support.
							</p>
						</div>
						<div className="card">
							<div className="image">
								<img src={upper14} alt="cat-caption" />
							</div>
							<h2>American Pre-Primary &amp; Lower Primary General Tutor</h2>
							<p>
								Hire professional home tutors that would teach you phonics,
								math, handwriting, reading, personal, social and emotional
								development with the American curriculum.
							</p>
						</div>
					</div>
				</div>
			</div>
		</Fade>
	);
}

export default LowerPrimary;
