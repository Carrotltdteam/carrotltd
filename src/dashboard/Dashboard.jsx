import React, { Component } from "react";
import { getAuth } from "firebase/auth";
import { getFirestore, onSnapshot, doc } from "firebase/firestore";
import app from "../config/fire";
import Fade from "react-reveal/Fade";
import Profile from "./Profile";
import Home from "./Home";
import HiProfile from "./hire/HiProfile";
import HiHome from "./hire/HiHome";
const auth = getAuth(app);
const db = getFirestore(app);
class Dashboard extends Component {
	constructor(props) {
		super(props);

		this.state = {
			accountType: "",
			data: {},
			completed: false,
		};
	}

	componentDidMount() {
		this.GetDetails();
	}
	GetDetails = () => {
		onSnapshot(doc(db, "users", auth.currentUser.email), (doc) => {
			if (doc.data() != null) {
				const data = doc.data();
				if (data.contact.accountType === "Hire") {
					if (data.basic.completed) {
						this.setState({
							accountType: data.contact.accountType,
							data: doc.data(),
							completed: true,
						});
					} else {
						this.setState({
							accountType: data.contact.accountType,
							data: doc.data(),
							completed: false,
						});
					}
				} else {
					if (
						data.basic.completed &&
						data.availability.completed &&
						data.education.completed &&
						data.bankReferee.completed &&
						data.licence.completed &&
						data.subject.completed
					) {
						this.setState({
							accountType: data.contact.accountType,
							data: doc.data(),
							completed: true,
						});
					} else {
						this.setState({
							accountType: data.contact.accountType,
							data: doc.data(),
							completed: false,
						});
					}
				}
			} else {
				alert("Error Reload");
			}
		});
	};

	render() {
		return (
			<>
				<Fade>
					<div className="dashboard-container">
						{this.state.accountType === "Become" ? (
							<div className="become">
								{this.state.completed === false ? (
									<Profile data={this.state.data} />
								) : (
									<Home data={this.state.data} />
								)}
							</div>
						) : this.state.accountType === "Hire" ? (
							<div className="hire">
								{this.state.completed === false ? (
									<HiProfile data={this.state.data} />
								) : (
									<HiHome data={this.state.data} />
								)}
							</div>
						) : (
							<div id="loader"></div>
						)}
					</div>
				</Fade>
			</>
		);
	}
}

export default Dashboard;
