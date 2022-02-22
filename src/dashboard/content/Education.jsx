import React, { Component } from "react";
import { getFirestore, doc, updateDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import app from "../../config/fire";
import {
	getStorage,
	ref,
	uploadBytesResumable,
	getDownloadURL,
} from "firebase/storage";
const storage = getStorage(app);
const auth = getAuth(app);
const db = getFirestore(app);
class Education extends Component {
	constructor(props) {
		super(props);

		this.state = {
			selectedFile: null,
			certURL: null,
			uploaded: false,
		};
	}

	SubmitData = async (e) => {
		e.preventDefault();
		const theRef = doc(db, "users", auth.currentUser.email);

		await updateDoc(theRef, {
			education: {
				completed: true,
				degree: e.target.degree.value,
				dept: e.target.dept.value,
				endYear: e.target.end.value,
				grade: e.target.grade.value,
				school: e.target.school.value,
				startYear: e.target.start.value,
				certUrl: this.state.certURL,
				uploaded: false,
			},
		})
			.then(() => {})
			.catch((error) => {
				alert(error.code);
			});
	};

	FileSelectHandler = (e) => {
		this.setState({
			selectedFile: e.target.files[0],
		});
	};

	SubmitUploadedFile = (e) => {
		e.preventDefault();
		if (this.state.selectedFile === null) {
			alert("Please select an image");
		} else {
			if (
				this.state.selectedFile.type === "image/png" ||
				this.state.selectedFile.type === "image/jpeg"
			) {
				const storageRef = ref(
					storage,
					"Certificates/" +
						auth.currentUser.email +
						"_" +
						this.state.selectedFile.name
				);
				const uploadTask = uploadBytesResumable(
					storageRef,
					this.state.selectedFile
				);
				uploadTask.on(
					"state_changed",
					(snapshot) => {
						const progress = Math.floor(
							(snapshot.bytesTransferred / snapshot.totalBytes) * 100
						);
						document.getElementById("progress").innerHTML = progress + "%";
					},
					(error) => {
						alert(error.code);
					},
					() => {
						getDownloadURL(uploadTask.snapshot.ref)
							.then((downloadURL) => {
								this.setState({
									certURL: downloadURL,
									uploaded: true,
								});
							})
							.catch((error) => {
								alert(error.code);
							});
					}
				);
			} else {
				alert("Please select an image");
			}
		}
	};

	render() {
		const year = [];

		for (var index = 2021; index >= 1960; index--) {
			if (index === 2021) {
				year.push(
					<option key={index} defaultValue={index}>
						{index}
					</option>
				);
			} else {
				year.push(
					<option key={index} value={index}>
						{index}
					</option>
				);
			}
		}
		return (
			<div className="education-container">
				<h1>EDUCATION</h1>
				<div className="form-container">
					<form onSubmit={this.SubmitData}>
						<div
							className={this.state.uploaded === false ? "cert-upload" : "hide"}
						>
							<label htmlFor="">
								Upload Certificate: &nbsp;
								<input
									onChange={this.FileSelectHandler}
									required
									type="file"
									name="upload"
									className="upload"
								/>
							</label>
							<div className="btn-container">
								<input
									onClick={this.SubmitUploadedFile}
									value="upload"
									type="submit"
									className="btn-submit"
								/>
								<p id="progress"></p>
							</div>
						</div>
						<div className="school-dept">
							<input
								type="text"
								required
								name="school"
								className="form-control school"
								placeholder="School of Recent Degree"
							/>
							<input
								type="text"
								required
								name="dept"
								className="form-control dept"
								placeholder="Department of Study"
							/>
						</div>
						<div className="school-dept">
							<select
								name="degree"
								required
								className="form-control start"
								id=""
							>
								<option value="">- Degree -</option>
								<option defaultValue="P.Hd">P.Hd</option>
								<option value="M.Sc">M.Sc</option>
								<option value="BA">BA</option>
								<option value="B.Sc">B.Sc</option>
								<option value="B.Ed">B.Ed</option>
								<option value="B.Tech">B.Tech</option>
								<option value="NCE">NCE</option>
								<option value="ND">ND</option>
							</select>
							<select
								name="grade"
								required
								className="form-control start"
								id=""
							>
								<option value="">- Select Class of Degree -</option>
								<option defaultValue="First Class">First Class</option>
								<option value="Distinction">Distinction</option>
								<option value="Second Class Upper">
									Second Class Upper Division
								</option>
								<option value="Second Class Lower">
									Second Class Lower Division
								</option>
								<option value="Third Class">Third Class Division</option>
								<option value="Pass">Pass</option>
							</select>
						</div>

						<div className="year">
							<select
								name="start"
								required
								className="form-control start"
								id=""
							>
								<option value="">Year of Admission</option>
								{year}
							</select>

							<select name="end" required className="form-control end" id="">
								<option value="">Year of Graduation</option>
								{year}
							</select>
						</div>

						<div className="btn-container">
							<input type="submit" className="btn-submit" />
						</div>
					</form>
				</div>
			</div>
		);
	}
}

export default Education;
