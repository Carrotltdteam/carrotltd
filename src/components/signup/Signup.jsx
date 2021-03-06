import React, { PureComponent } from "react";
import Fade from "react-reveal/Fade";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import app from "../../config/fire";
import { NavLink } from "react-router-dom";
import {
	getAuth,
	createUserWithEmailAndPassword,
	updateProfile,
} from "firebase/auth";
import { getFirestore, setDoc, doc } from "firebase/firestore";
const auth = getAuth(app);
const db = getFirestore(app);
class Signup extends PureComponent {
	constructor(props) {
		super(props);

		this.state = {
			accountType: 0,
			loggedIn: false,
			isLoading: false,
		};
	}

	DataStoreHire = async (e) => {
		const type = "Hire";
		await setDoc(doc(db, "users", e.target.email.value), {
			contact: {
				name: e.target.name.value,
				phone: e.target.phone.value,
				email: e.target.email.value,
				accountType: type,
				completed: true,
			},
			basic: {
				completed: false,
			},
			plan: {
				name: "Starter",
				price: 3400,
			},
		});
	};
	DataStoreBecome = async (e) => {
		const type = "Become";
		await setDoc(doc(db, "users", e.target.email.value), {
			approved: false,
			contact: {
				name: e.target.name.value,
				phone: e.target.phone.value,
				email: e.target.email.value,
				accountType: type,
				completed: true,
			},
			basic: {
				completed: false,
			},
			education: {
				completed: false,
			},
			licence: {
				completed: false,
			},
			bankReferee: {
				completed: false,
			},
			availability: {
				completed: false,
			},
			subject: {
				completed: false,
			},
		});
	};

	SignUp = async (e) => {
		e.preventDefault();
		this.setState({ isLoading: !this.state.isLoading });

		var type;
		if (this.state.accountType === 0) {
			type = "Hire";

			createUserWithEmailAndPassword(
				auth,
				e.target.email.value,
				e.target.password.value
			)
				.then((userCredential) => {
					const user = userCredential.user;
					updateProfile(user, {
						displayName: type,
					})
						.then(this.DataStoreHire(e))
						.catch((error) => {
							alert(error.code);
						});
				})
				.catch((error) => {
					this.setState({ isLoading: false });
					alert(error.code);
				});
		} else {
			type = "Become";

			createUserWithEmailAndPassword(
				auth,
				e.target.email.value,
				e.target.password.value
			)
				.then((userCredential) => {
					const user = userCredential.user;
					updateProfile(user, {
						displayName: type,
					})
						.then(this.DataStoreBecome(e))
						.catch((error) => {
							alert(error.code);
						});
				})
				.catch((error) => {
					this.setState({ isLoading: false });
					alert(error.code);
				});
		}
	};

	SetAccountType(type) {
		const t = type;
		this.setState({
			accountType: t,
		});
	}
	render() {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});

		return (
			<>
				<Header active="join" />
				<Fade duration={1500}>
					<div className="signup-container">
						<div className="signup">
							<div className="signup-form">
								<div className="text">
									<h1>Join Carrot as a Tutor or to hire a Tutor</h1>
									<p>
										Get started! Give us your personal details to request a home
										tutor and deduce your tuition.
									</p>
									<p style={{ color: "red" }}>
										If you want to become a Tutor, Please select the "Become a
										Tutor" button before submission.
									</p>
								</div>
								<form onSubmit={this.SignUp}>
									<div className="name">
										<input
											type="text"
											name="name"
											placeholder="Your Full Name"
											className="firstname form-control"
											required
										/>

										<input
											type="tel"
											name="phone"
											placeholder="Your phone number"
											className="phone form-control"
											maxLength="11"
											required
										/>
									</div>
									<div className="email-number">
										<input
											type="email"
											name="email"
											placeholder="Your email address"
											className="email form-control"
											required
										/>

										<input
											type="password"
											name="password"
											placeholder="Pasword"
											className="password form-control"
											required
										/>
									</div>

									<div className="signup-type">
										<div
											onClick={() => this.SetAccountType(0)}
											name="Hire"
											className={
												this.state.accountType === 0 ? "bb active" : "bb"
											}
										>
											Hire a Tutor
										</div>

										<div
											onClick={() => this.SetAccountType(1)}
											name="Become"
											className={
												this.state.accountType === 1 ? "bb active" : "bb"
											}
										>
											Become a Tutor
										</div>
									</div>
									<div className="btn-container">
										<button className="btn-signup">Sign Up</button>{" "}
										{this.state.isLoading ? (
											<span className="bot"></span>
										) : null}
									</div>

									<NavLink to="/signin" className="signin-link">
										{" "}
										Sign In Here
									</NavLink>
								</form>
							</div>
						</div>
					</div>
				</Fade>
				<Footer />
			</>
		);
	}
}

export default Signup;
