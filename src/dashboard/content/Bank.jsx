import React, { Component } from "react";
import { getFirestore, doc, updateDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import app from "../../config/fire";
const auth = getAuth(app);
const db = getFirestore(app);
class Bank extends Component {
	SubmitData = async (e) => {
		e.preventDefault();
		const theRef = doc(db, "users", auth.currentUser.email);

		await updateDoc(theRef, {
			bankReferee: {
				accountNumber: e.target.accountnumber.value,
				bankName: e.target.bankname.value,
				accountName: e.target.accountname.value,
				bankType: e.target.banktype.value,
				completed: true,
				refAddress: e.target.refaddress.value,
				refEmail: e.target.refemail.value,
				refName: e.target.refname.value,
				refOccupation: e.target.refoccu.value,
				refPhone: e.target.refphone.value,
				refRelationship: e.target.refrelate.value,
				amount: e.target.amount.value,
			},
		})
			.then(() => {})
			.catch((error) => {
				alert(error.code);
			});
	};

	render() {
		return (
			<div className="bank-container">
				<h1>BANK AND REFEREE DETAILS</h1>
				<div className="form-container">
					<form onSubmit={this.SubmitData}>
						<div className="account">
							<div className="name-number">
								<input
									type="text"
									className="form-control accountname"
									required
									name="accountname"
									placeholder="Account Name"
								/>
								<input
									type="text"
									className="form-control accountnumber"
									required
									name="accountnumber"
									placeholder="Account Number"
								/>
							</div>
							<div className="type-name">
								<select
									name="banktype"
									className="form-control banktype"
									required
									id=""
								>
									<option value="">Select Account Type</option>
									<option defaultValue="Savings">Savings</option>
									<option value="Current">Current</option>
								</select>
								<select
									name="bankname"
									className="form-control bankname"
									id=""
									required
								>
									<option value="">Select Bank Name</option>
									<option defaultValue="Wema Bank">Wema Bank</option>
									<option value="First Bank">First Bank</option>
									<option value="Eco Bank">Eco Bank</option>
									<option value="Access Bank">Access Bank</option>
									<option value="Polaris Bank">Polaris Bank</option>
									<option value="Sterling Bank">Sterling Bank</option>
									<option value="GT Bank">GT Bank</option>
								</select>
							</div>
							<div className="amount">
								<input
									type="text"
									className="form-control accountname"
									name="amount"
									required
									placeholder="Pay Per Hour"
								/>
							</div>
						</div>
						<hr />
						<div className="referee">
							<div className="name-email">
								<input
									type="text"
									className="form-control refname"
									required
									name="refname"
									placeholder="Referee Name"
								/>
								<input
									type="email"
									className="form-control refemail"
									required
									name="refemail"
									placeholder="Referee Email Address"
								/>
							</div>
							<div className="phone-address">
								<input
									type="tel"
									className="form-control refphone"
									maxLength={11}
									required
									name="refphone"
									placeholder="Referee Phone Number"
								/>
								<input
									type="text"
									className="form-control refaddress"
									required
									name="refaddress"
									placeholder="Referee Home Address"
								/>
							</div>
							<div className="relate-occu">
								<input
									type="text"
									className="form-control refrelate"
									required
									name="refrelate"
									placeholder="Relationship With Referee"
								/>
								<input
									type="text"
									className="form-control refoccu"
									required
									name="refoccu"
									placeholder="Referee Occupation"
								/>
							</div>
						</div>
						<div className="submit-button">
							<input type="submit" className="btn-submit" value="Submit" />
						</div>
					</form>
				</div>
			</div>
		);
	}
}

export default Bank;
