import React, { Component } from "react";
import logo from "../../resources/images/logo.png";
import { NavLink } from "react-router-dom";
import { FaAlignJustify, FaWhatsapp } from "react-icons/fa";
import { FiArrowUpCircle } from "react-icons/fi";
import Fade from "react-reveal/Fade";
import Tada from "react-reveal/Tada";
class Header extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isOpen: true,
			scrolled: false,
			toTop: false,
		};
	}

	componentDidMount() {
		window.addEventListener("scroll", this.setScroll);
		window.addEventListener("scroll", this.SetToTop);
	}

	componentWillUnmount() {
		window.removeEventListener("scroll", this.setScroll);
		window.removeEventListener("scroll", this.SetToTop);
	}
	setScroll = () => {
		const offset = window.scrollY;
		if (offset > 35) {
			this.setState({ scrolled: true });
		} else {
			this.setState({ scrolled: false });
		}
	};

	SetToTop = () => {
		const offset = document.documentElement.scrollTop;
		if (offset > 300) {
			this.setState({ toTop: true });
		} else if (offset <= 300) {
			this.setState({ toTop: false });
		}
	};

	ScrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	handleToggle = () => {
		const xOffset = window.innerWidth;
		if (xOffset <= 800) {
			this.setState({ isOpen: !this.state.isOpen });
		}
	};
	render() {
		return (
			<>
				<header
					className={this.state.scrolled ? "header-container" : "scrolled"}
				>
					<nav className={this.state.isOpen ? "hidden" : "nav-link-container"}>
						<div className="logo">
							<NavLink to="/">
								<img className="img-logo" src={logo} alt="logo" />
							</NavLink>
						</div>
						<div className="mobile">
							<FaAlignJustify
								onClick={this.handleToggle}
								className="nav-icon"
							/>
						</div>
						<Fade>
							<div className="links">
								<NavLink
									to="/about"
									onClick={this.handleToggle}
									id={this.props.active === "about" ? "active" : null}
									className="nav_link"
									href="#"
								>
									About us
								</NavLink>
								<NavLink
									to="/category"
									onClick={this.handleToggle}
									id={this.props.active === "category" ? "active" : null}
									className="nav_link"
									href="#"
								>
									Category
								</NavLink>
								<NavLink
									to="/contact"
									onClick={this.handleToggle}
									id={this.props.active === "contact" ? "active" : null}
									className="nav_link"
									href="#"
								>
									Contact us
								</NavLink>
								<NavLink
									to="/signup"
									onClick={this.handleToggle}
									id={this.props.active === "join" ? "active" : null}
									className="nav_link"
									href="#"
								>
									Join Carrot
								</NavLink>
								<NavLink
									to="/signin"
									onClick={this.handleToggle}
									className="nav_link_log"
									href="#"
								>
									Login
								</NavLink>
							</div>
						</Fade>
					</nav>
					<Fade duration={1000} cascade when={this.state.toTop}>
						<div className={this.state.toTop ? "uparrow show" : "uparrow hide"}>
							<FiArrowUpCircle onClick={this.ScrollToTop} />
						</div>
					</Fade>

					<div className="whatsapp">
						<Tada duration={2500} cascade forever>
							<a
								target="_blank"
								rel="noreferrer"
								href=" https://wa.me/2347030050354"
							>
								<FaWhatsapp />
							</a>
						</Tada>
					</div>
				</header>
			</>
		);
	}
}

export default Header;
