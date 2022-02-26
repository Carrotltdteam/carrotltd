import React, { Component } from "react";
import emailjs from "emailjs-com";
import Fade from "react-reveal/Fade";
import { getFirestore, doc, updateDoc, onSnapshot } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import app from "../../../config/fire";
const auth = getAuth(app);
const db = getFirestore(app);
class HiSubject extends Component {
	constructor(props) {
		super(props);

		this.state = {
			show: 1,
			subject: {},
			planPrice: 0,
			plan: null,
			contact: "",
		};
	}

	componentDidMount = async () => {
		onSnapshot(doc(db, "users", auth.currentUser.email), (doc) => {
			if (doc.data() != null) {
				this.setState({
					subject: doc.data().subject,
					planPrice: doc.data().plan.price,
					plan: doc.data().plan.name,
					contact: doc.data().contact.phone,
				});
			} else {
				alert("Error Reload Page");
			}
		});
	};
	SetSelect = (e) => {
		this.setState({
			show: e.target.value,
		});
	};

	SubmitData = async (e) => {
		e.preventDefault();

		const theRef = doc(db, "users", auth.currentUser.email);
		await updateDoc(theRef, {
			subject: {
				...this.state.subject,
				[e.target.name]: {
					group: e.target.group.value,
					class: e.target.class.value,
					subject_name: e.target.subject_name.value,
					hours: e.target.hours.value,
					perweek: e.target.perweek.value,
					duration: e.target.duration.value,
					plan: this.state.plan,
					completed: false,
				},
			},
		})
			.then(() => {
				emailjs
					.sendForm(
						"service_nihdzjh",
						"template_oa5mu7d",
						e.target,
						"user_MQhQ6YXm3I2JEqVCsmp5T"
					)
					.then((res) => {})
					.catch((error) => {
						alert(error.code);
					});
				document.getElementById([e.target.name]).style.display = "none";
				alert(
					"Subject Added Successful\nYou will be contacted with more details soon."
				);
			})
			.catch((error) => {
				alert(error.code);
			});
	};

	render() {
		const length = this.state.show;

		const items = [];
		for (var index = 1; index <= length; index++) {
			items.push(
				<Fade key={index} duration={1500}>
					<form
						id={`subject_` + index}
						name={`subject_` + index}
						onSubmit={this.SubmitData}
						className="subjects"
					>
						<h2>Subject {index}</h2>
						<input
							type="text"
							id="hide"
							name="email"
							defaultValue={auth.currentUser.email}
						/>
						<input
							type="text"
							id="hide"
							name="plan"
							defaultValue={this.state.plan}
						/>

						<input
							type="text"
							id="hide"
							name="contact"
							defaultValue={this.state.contact}
						/>
						<div className="group-class">
							<select required name="group" className="form-control">
								<option value="">Subject Group</option>
								<option defaultValue="Academic">Academic</option>
								<option value="Music">Music</option>
								<option value="Languages">Languages</option>
								<option value="Others">Others</option>
							</select>
							<select required name="class" className="form-control" id="">
								<option value="">Subject Class</option>
								<option defaultValue="Nursery">Nursery</option>
								<option value="Upper Primary">Upper Primary</option>
								<option value="Lower Primary">Lower Primary</option>
								<option value="Junior Secondary">Junior Secondary</option>
								<option value="Senior Secondary">Senior Secondary</option>
								<option value="WAEC">WAEC</option>
								<option value="JAMB/UTME">JAMB/UTME</option>
								<option value="SAT">SAT</option>
								<option value="TOEFL">TOEFL</option>
								<option value="IELTS">IELTS</option>
								<option value="GRE">GRE</option>
								<option value="Checkpoint Exam">Checkpoint Exam</option>
								<option value="A-Level">A-Level</option>
								<option value="Undergrauates">Undergrauates</option>
								<option value="IGCSE">IGCSE</option>
								<option value="OTHERS">OTHERS</option>
							</select>
						</div>
						<div className="group-class">
							<select required name="perweek" className="form-control">
								<option value="">Classes per Week</option>
								<option defaultValue="1">1</option>
								<option value="2">2</option>
								<option value="3">3</option>
								<option value="4">4</option>
								<option value="5">5</option>
								<option value="6">6</option>
								<option value="7">7</option>
							</select>
							<select required name="hours" className="form-control" id="">
								<option value="">Hours per Class</option>
								<option defaultValue="1">1 Hour</option>
								<option value="2">2 Hours</option>
								<option value="3">3 Hours</option>
								<option value="4">4 Hours</option>
								<option value="5">5 Hours</option>
								<option value="6">6 Hours</option>
							</select>
						</div>

						<div className="input-subject">
							<select required name="duration" className="form-control" id="">
								<option value="">Lession Duration</option>
								<option defaultValue="1">1 Week</option>
								<option value="2">2 Weeks</option>
								<option value="3">3 Weeks</option>
								<option value="4">1 Month</option>
							</select>

							<input
								required
								type="text"
								placeholder="Subject Name"
								name="subject_name"
								className="form-control subject-name"
							/>
						</div>

						<div className="btn-container">
							<input type="submit" value="Submit" className="btn-submit " />
						</div>
					</form>
				</Fade>
			);
		}
		return (
			<Fade duration={1500}>
				<div className="subject-container">
					<h1>SUBJECTS TO HIRE</h1>
					<div className="form-conatiner">
						<h3>
							If you have filled a subject number previous, Please do not fill
							it again. To hire for another subject, fill another subject
							number. Maximum of 4
						</h3>
						<div className="subject">
							<select
								required
								name="subject"
								onChange={this.SetSelect}
								className="form-control"
								id=""
							>
								<option value="">How Many Subject Do you Need</option>
								<option defaultValue="1">1</option>
								<option value="2">2</option>
								<option value="3">3</option>
								<option value="4">4</option>
							</select>
						</div>
						<div className="subjects">{items}</div>
						{/* <div className="btn-right">
                            <input onClick={this.MakeRequest} type="submit" value="Request" className="btn-submit" />
                        </div> */}
					</div>
				</div>
			</Fade>
		);
	}
}

export default HiSubject;
