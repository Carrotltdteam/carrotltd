import React from "react";
import upper from "../../../resources/images/upper.jpg";
import upper6 from "../../../resources/images/upper6.jpg";
import upper7 from "../../../resources/images/upper7.jpg";
import upper8 from "../../../resources/images/upper8.jpg";
import upper9 from "../../../resources/images/upper9.jpg";
import j from "../../../resources/images/junior.jpg";
import j2 from "../../../resources/images/junior2.jpg";
import Fade from "react-reveal/Fade";
function ProfExam() {
	window.scrollTo({
		top: 0,
		behavior: "smooth",
	});
	return (
		<Fade duration={2000}>
			<div className="cat-container">
				<div className="cat-content">
					<div className="cat-button">
						<h2>professional exams</h2>
					</div>
					<div className="cat-body">
						<div className="card">
							<div className="image">
								<img src={upper9} alt="cat-caption" />
							</div>
							<h2>ICSAN</h2>
							<p>
								Get a Professional ICSAN tutor and you would never go wrong
								hiring from Educere.
							</p>
						</div>

						<div className="card">
							<div className="image">
								<img src={j} alt="cat-caption" />
							</div>
							<h2>Statistics</h2>
							<p>
								Memorizing formulas can be tasking. Hire our statistics home
								tutors to give you the secret to solving statistics and help you
								regain your confidence
							</p>
						</div>

						<div className="card">
							<div className="image">
								<img src={j2} alt="cat-caption" />
							</div>
							<h2>GMAT Quantitative Tutor</h2>
							<p>
								Hire a professional and experienced GMAT Quantitative Tutor to
								help you prepare for your upcoming exams.
							</p>
						</div>

						<div className="card">
							<div className="image">
								<img src={upper} alt="cat-caption" />
							</div>
							<h2>GRE Verbal Tutor</h2>
							<p>
								Hire an experienced and good GRE Verbal Tutor to help you
								prepare for GRE exams.
							</p>
						</div>

						<div className="card">
							<div className="image">
								<img src={upper8} alt="cat-caption" />
							</div>
							<h2>GRE Quantitative Tutor</h2>
							<p>
								Hire an expert to help you prepare for your GRE Quantitative
								exams.
							</p>
						</div>

						<div className="card">
							<div className="image">
								<img src={upper7} alt="cat-caption" />
							</div>
							<h2>ICAN Tutor</h2>
							<p>
								Hire an experienced ICAN Tutor to help you in preparing for your
								exams.
							</p>
						</div>

						<div className="card">
							<div className="image">
								<img src={j2} alt="cat-caption" />
							</div>
							<h2>ACCA Tutor</h2>
							<p>
								Are you currently preparing for ACCA? No need to worry, all you
								just need is to get a Professional ACCA tutor from Educere.
							</p>
						</div>

						<div className="card">
							<div className="image">
								<img src={j} alt="cat-caption" />
							</div>
							<h2>GMAT Verbal Tutor</h2>
							<p>
								Hire an experienced and good GMAT Verbal Tutor to help you in
								GMAT.
							</p>
						</div>

						<div className="card">
							<div className="image">
								<img src={upper6} alt="cat-caption" />
							</div>
							<h2>SHL</h2>
							<p>
								Hire an experienced SHL Tutor to help you in preparing for your
								exams.
							</p>
						</div>
					</div>
				</div>
			</div>
		</Fade>
	);
}

export default ProfExam;
