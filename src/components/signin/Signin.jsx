import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import { NavLink } from "react-router-dom";
import {
	getAuth,
	setPersistence,
	signInWithEmailAndPassword,
	browserSessionPersistence,
} from "firebase/auth";
const auth = getAuth();
class Signin extends Component {
	constructor(props) {
		super(props);

		this.state = {
			loggedIn: false,
			isLoading: false,
		};
	}

	SignIn = (e) => {
		e.preventDefault();
		this.setState({ isLoading: !this.state.isLoading });
		if (e.target.email.value === "carrotltdteam@gmail.com") {
			alert("Unauthorized User");
			e.target.email.value = "";
			e.target.password.value = "";
			this.setState({ isLoading: false });
			return;
		}
		setPersistence(auth, browserSessionPersistence)
			.then(() => {
				// Signed in
				return signInWithEmailAndPassword(
					auth,
					e.target.email.value,
					e.target.password.value
				);
				// ...
			})
			.catch((error) => {
				this.setState({ isLoading: false });
				alert(error.code);
			});
	};

	render() {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});

		return (
			<>
				<Header />
				<Fade duration={1500}>
					<div className="signin-container">
						<div className="signin">
							<div className="signin-form">
								<div className="text">
									<h1>Login to Your Carrot Account</h1>
								</div>
								<form onSubmit={this.SignIn}>
									<div className="email-number">
										<input
											type="email"
											name="email"
											placeholder="Email address"
											className="email form-control"
											required
										/>

										<input
											type="password"
											name="password"
											placeholder="Password"
											className="password form-control"
											required
										/>
									</div>
									<div className="btn-container">
										<button className="btn-signin">Login</button>{" "}
										{this.state.isLoading ? (
											<span className="bot"></span>
										) : null}
									</div>

									<div className="other-links">
										<NavLink to="/reset" className="reset-link">
											Forgotten Password?
										</NavLink>
										<NavLink to="/signup" className="signup-link">
											{" "}
											Sign Up Here
										</NavLink>
									</div>
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

export default Signin;
