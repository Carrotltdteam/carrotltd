import React from "react";
import upper from "../../../resources/images/upper.jpg";
import upper6 from "../../../resources/images/upper6.jpg";
import upper7 from "../../../resources/images/upper7.jpg";
import upper8 from "../../../resources/images/upper8.jpg";
import upper9 from "../../../resources/images/upper9.jpg";
import j from "../../../resources/images/junior.jpg";
import j2 from "../../../resources/images/junior2.jpg";
import geo from "../../../resources/images/geo.jpg";
import Fade from "react-reveal/Fade";
function Igcse() {
	window.scrollTo({
		top: 0,
		behavior: "smooth",
	});
	return (
		<Fade duration={2000}>
			<div className="cat-container">
				<div className="cat-content">
					<div className="cat-button">
						<h2>igcse</h2>
					</div>
					<div className="cat-body">
						<div className="card">
							<div className="image">
								<img src={upper} alt="cat-caption" />
							</div>
							<h2>IGCSE Maths Tutor</h2>
							<p>
								Get a professional and experienced IGCSE maths home tutor today
								to help you in excel in your exams.
							</p>
						</div>

						<div className="card">
							<div className="image">
								<img src={upper6} alt="cat-caption" />
							</div>
							<h2>IGCSE English Language Tutor</h2>
							<p>
								Hire a professional and proficient IGCSE English Language Tutor
								today.
							</p>
						</div>

						<div className="card">
							<div className="image">
								<img src={upper7} alt="cat-caption" />
							</div>
							<h2>IGCSE Biology Tutor</h2>
							<p>
								Hire a home tutor that is experienced in teaching IGCSE Biology.
							</p>
						</div>

						<div className="card">
							<div className="image">
								<img src={upper8} alt="cat-caption" />
							</div>
							<h2>IGCSE Chemistry Tutor</h2>
							<p>
								Hire a professional and experienced IGCSE Chemistry tutor to
								help you prepare for your upcoming exams.
							</p>
						</div>

						<div className="card">
							<div className="image">
								<img src={upper9} alt="cat-caption" />
							</div>
							<h2>IGCSE Physics Tutor</h2>
							<p>
								Hire an experienced IGCSE Physics Tutor to help you prepare for
								your upcoming exams.
							</p>
						</div>

						<div className="card">
							<div className="image">
								<img src={j} alt="cat-caption" />
							</div>
							<h2>IGCSE History Tutor</h2>
							<p>
								Hire an experienced IGCSE History Tutor to help you prepare for
								your upcoming exams.
							</p>
						</div>

						<div className="card">
							<div className="image">
								<img src={j2} alt="cat-caption" />
							</div>
							<h2>IGCSE Account Tutor</h2>
							<p>
								Hire an experienced IGCSE Account Tutor to help you prepare for
								your upcoming exams.
							</p>
						</div>

						<div className="card">
							<div className="image">
								<img src={upper} alt="cat-caption" />
							</div>
							<h2>IGCSE Economics Tutor</h2>
							<p>
								Hire an experienced IGCSE Economics Tutor to help you prepare
								for your upcoming exams.
							</p>
						</div>

						<div className="card">
							<div className="image">
								<img src={geo} alt="cat-caption" />
							</div>
							<h2>IGCSE Geography Tutorr</h2>
							<p>
								Hire a good and proficient IGCSE Geography Tutor to help you
								prepare for your upcoming IGCSE exams.
							</p>
						</div>
					</div>
				</div>
			</div>
		</Fade>
	);
}

export default Igcse;
