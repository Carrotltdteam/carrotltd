import React from "react";
import logo from "../../resources/images/logo.png";
import {
	FaComments,
	FaPhone,
	FaInstagram,
	FaFacebook,
	FaTwitter,
	FaLinkedinIn,
	FaYoutube,
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { NavLink } from "react-router-dom";
function Footer() {
	return (
		<div className="footer-container">
			<div className="footer-top">
				<div className="footer-top-left">
					<div className="img">
						<img src={logo} alt="left-icon" />
					</div>
					<br />
					<p className="left-text">
						Carrot focuses on connecting potential learners with skilled tutors.
						Our interest is to break from the norm of formal education by
						providing tutors for basically anything a client may wish to learn
					</p>
				</div>

				<div className="footer-top-middle">
					<h2>Reach Out To Us</h2>
					<div className="contact-info">
						<span>
							<FaPhone />
						</span>
						<a href="tel:+2347030050354">&nbsp;&nbsp;+234-703-005-0354</a>
					</div>
					<div className="contact-info">
						<span>
							<FaPhone />
						</span>
						<a href="tel:+447405805483">&nbsp;&nbsp;+447-405-805-483</a>
					</div>
					<div className="contact-info">
						<span>
							<FiMail />
						</span>
						<a href="mailto:carrotltdteam@gmail.com">
							&nbsp;&nbsp;carrotltdteam@gmail.com
						</a>
					</div>
					<div className="contact-info">
						<span>
							<FaComments />
						</span>
						<a
							target="_blank"
							rel="noreferrer"
							href=" https://wa.me/2347030050354"
						>
							&nbsp;&nbsp;Chat on Whatsapp
						</a>
					</div>
					<div className="contact-info">
						<span>
							<FaComments />
						</span>
						<a href="/">&nbsp;&nbsp;Chat on Messenger</a>
					</div>
				</div>

				<div className="footer-top-right">
					<h2>Subscribe To Our Newsletter</h2>
					<br />
					<form>
						<div className="form-content">
							<input type="text" />
							<button>Subscribe</button>
						</div>
					</form>
					<div className="social">
						<div>
							<a
								target={"_blank"}
								rel="noreferrer"
								href="https://web.facebook.com/carrotlimited"
							>
								<FaFacebook />
							</a>
						</div>

						<div>
							<a
								target={"_blank"}
								rel="noreferrer"
								href="https://www.instagram.com/carrotlimited/"
							>
								<FaInstagram />
							</a>
						</div>

						<NavLink to="#">
							<FaLinkedinIn />
						</NavLink>
						<NavLink to="#">
							<FaTwitter />
						</NavLink>
						<NavLink to="#">
							<FaYoutube />
						</NavLink>
					</div>
					<div className="policy">
						<NavLink to="/privacy">Privacy Policy</NavLink>
					</div>
				</div>
			</div>
			<div className="hr"></div>

			<div className="footer-bottom">
				<div className="copy">
					&copy; 2021. Carrot Tutors. All Right Reserved
				</div>
				<div className="Developed">
					Developed by <span> Hi-Dev Solutions</span>
				</div>
			</div>
		</div>
	);
}

export default Footer;
