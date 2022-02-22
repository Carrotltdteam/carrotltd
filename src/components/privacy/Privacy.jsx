import React from "react";
import { NavLink } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Fade from "react-reveal/Fade";
function Privacy() {
	window.scrollTo({
		top: 0,
		behavior: "smooth",
	});
	return (
		<>
			<Header active="privacy" />
			<Fade duration={1500}>
				<div className="privacy-container">
					<div className="privacy-top">
						<div>
							<h1>PRIVACY</h1>
							<p>
								<NavLink to="/">Home</NavLink> &gt; <span>Privacy</span>{" "}
							</p>
						</div>
					</div>

					<div className="privacy-body">
						<div className="one">
							<h1>Hello from the Carrot team!</h1>
							<p>
								Thanks for taking the time to learn more about us. We are
								striving to make the best test prep service for your money.
							</p>
							<br />
							<p>
								The Carrot service (collectively, "Carrot", "the Site", or "the
								Service") is operated by Carrot. By accessing this Platforms,
								you are agreeing to be bound by these Platforms Terms and
								Conditions of Use, all applicable laws and regulations, and
								agree that you are responsible for compliance with any
								applicable local laws. If you do not agree with any of these
								terms, you are prohibited from using or accessing this site. The
								materials contained in this Platforms are protected by
								applicable copyright and trademark law.
							</p>
						</div>

						<div className="one">
							<h1>Registration Data: Account Security</h1>

							<p>
								If you subscribe to any of Carrot’s services, you will have an
								account and a password. Access to password protected portions of
								this Site is available for only so long as you have paid all
								required fees to Carrot. You are responsible for maintaining the
								confidentiality of your account and password and for restricting
								access to Carrot material to anyone other than yourself. You are
								responsible for all activities that occur under your account or
								password. Carrot reserves the right to refuse service, terminate
								accounts, remove or edit content, or cancel subscriptions in its
								sole discretion.
							</p>
						</div>

						<div className="one">
							<h1>Use License</h1>
							<p>
								Permission is granted to a terminable non-exclusive,
								non-transferable license to use Carrot’s Platforms for personal,
								non-commercial transitory viewing only. This is the grant of a
								license, not a transfer of title, and under this license you may
								not:
							</p>
							<ul>
								<li>modify or copy the materials</li>
								<li>
									use the materials for any commercial purpose, or for any
									public display (commercial or non-commercial)
								</li>
								<li>
									attempt to decompile or reverse engineer any software
									contained on Carrot’s Platforms
								</li>
								<li>
									remove any copyright or other proprietary notations from the
									materials or
								</li>
								<li>
									transfer the materials to another person or "mirror" the
									materials on any other server
								</li>
								<p>
									This license shall automatically terminate if you violate any
									of these restrictions and may be terminated by Carrot at any
									time.
								</p>
							</ul>
						</div>

						<div className="one">
							<h1>Trademarks</h1>
							<p>
								Carrot and other Company graphics, logos, designs, page headers,
								button icons, scripts and service names are registered
								trademarks, trademarks and/or as part of domain names, in
								connection with any product or service in any manner that is
								likely to cause confusion and may not be copied, imitated, or
								used, in whole or in part, without the prior written permission
								of the Company.
							</p>
						</div>

						<div className="one">
							<h1>Warranties &amp; Disclaimers</h1>
							<ul>
								<li>
									The materials on Carrot’s Platforms are provided "as is".
									Carrot makes no warranties, expressed or implied, and hereby
									disclaims and negates all other warranties, luding without
									limitation, implied warranties or conditions of
									merchantability, fitness for a particular purpose, or
									non-infringement of intellectual property or other violation
									of rights. Further, Carrot does not warrant or make any
									representations concerning the accuracy, likely results, or
									reliability of the use of the materials on its Internet
									Platforms or otherwise relating to such materials or on any
									sites linked to this site.
								</li>
								<li>
									Carrot and its subsidiaries, affiliates, officers, employees,
									agents, partners and licensors make no warranty that
									<ul>
										<li>the service will meet your requirements;</li>
										<li>
											the service will be uninterrupted, timely, secure or
											error-free;
										</li>
										<li>
											the results that may be obtained from the use of the
											service will be accurate or reliable;
										</li>
										<li>
											the quality of any products, services, information or
											other material purchased or obtained by you through the
											service will meet your expectations; and
										</li>
										<li>any errors in the software will be corrected.</li>
									</ul>
								</li>
								<li>
									The Service may be temporarily unavailable from time to time
									for maintenance or other reasons. Carrot assumes no
									responsibility for any error, omission, interruption,
									deletion, defect, delay in operation or transmission,
									communications line failure, theft or destruction or
									unauthorized access to, or alteration of, communications.
								</li>

								<li>
									Under no circumstances will Carrot be responsible for any loss
									or damage, to any User or personal injury or death, resulting
									from anyone’s use of the Site or the Service, any User Content
									or Third-Party Applications, Software or Content posted on or
									through the Site or the Service or transmitted to Users, or
									any interactions between users of the Site, whether online or
									offline.
								</li>
							</ul>
						</div>

						<div className="one">
							<h1>User Content</h1>
							<p>
								You understand that except for advertising programs offered by
								us on the Site, the Service and the Site are available for your
								personal, non-commercial use only. You represent, warrant and
								agree that no materials of any kind submitted through your
								account or otherwise posted, transmitted, or shared by you on or
								through the Service will violate or infringe upon the rights of
								any third party, luding copyright, trademark, privacy, publicity
								or other personal or proprietary rights; or contain libelous,
								defamatory or otherwise unlawful material.
							</p>
							<br />
							<p>
								You are solely responsible for the photos, profiles, messages,
								notes, text, information and other content that you upload,
								publish or display (hereinafter, "post") on or through the
								Service or the Site, or transmit to or share with other users
								(collectively the "User Content"). You may not post, transmit,
								or share User Content on the Site or Service that you did not
								create or that you do not have permission to post. You
								understand and agree that the Company may, but is not obligated
								to, review the Site and may delete or remove (without notice)
								any Site Content or User Content in its sole discretion, for any
								reason or no reason, luding without limitation User Content that
								in the sole judgment of the Company violates this Agreement or
								which might be offensive, illegal, or that might violate the
								rights, harm, or threaten the safety of users or others. You may
								remove your User Content from the Site at any time. If you
								choose to remove your User Content, the license granted above
								will automatically expire, however you acknowledge that the
								Company may retain archived copies of your User Content.
							</p>
						</div>

						<div className="one">
							<h1>User Conduct</h1>
							<p>
								You understand that the Site is available for your personal,
								non-commercial use only. You represent, warrant, and agree that
								no materials of any kind submitted through your account or
								otherwise posted, transmitted, or shared by you on or through
								the Service will violate or infringe upon the rights of any
								third party, luding copyright, trademark, privacy, publicity or
								other personal or proprietary rights; or contain libelous,
								defamatory or otherwise unlawful material.
							</p>
							<br />
							<p>
								In addition, you agree not to use the Site to: harvest or
								collect email addresses or other contact information of other
								users from the Site by electronic or other means for the
								purposes of sending unsolicited emails or other unsolicited
								communications; use the Site in any unlawful manner or in any
								other manner that could damage, disable, overburden or impair
								the Site; upload, post, transmit, share, store or otherwise make
								available any content that we deem to be harmful, threatening,
								unlawful, defamatory, infringing, abusive, inflammatory,
								harassing, vulgar, obscene, fraudulent, invasive of privacy or
								publicity rights, hateful, or racially, ethnically or otherwise
								objectionable; use automated scripts to collect information from
								or otherwise interact with the Site; register for more than one
								User account, register for a User account on behalf of an
								individual other than yourself, or register for a User account
								on behalf of any group or entity; impersonate any person or
								entity, or falsely state or otherwise misrepresent yourself,
								your age or your affiliation with any person or entity; upload,
								post, transmit, share or otherwise make available any
								unsolicited or unauthorized advertising, solicitations,
								promotional materials, "junk mail," "spam," "chain letters,"
								"pyramid schemes," or any other form of solicitation; upload,
								post, transmit, share, store or otherwise make publicly
								available on the Site any private information of any third
								party, luding, addresses, phone numbers, email addresses, Social
								Security numbers and credit card numbers; solicit passwords or
								personally identifying information for commercial or unlawful
								purposes; upload, post, transmit, share or otherwise make
								available any material that contains software viruses or any
								other computer code, files or programs designed to interrupt,
								destroy or limit the functionality of any computer software or
								hardware or telecommunications equipment; intimidate or harass
								any other user; upload, post, transmit, share, store or
								otherwise make available content that would constitute,
								encourage or provide instructions for a criminal offense,
								violate the rights of any party, or that would otherwise create
								liability or violate any local, state, national or international
								law; use or attempt to use another’s account, service or system
								without authorization from the Company, or create a false
								identity on the Site; upload, post, transmit, share, store or
								otherwise make available content that, in the sole judgment of
								Company, is objectionable or which restricts or inhibits any
								other person from using or enjoying the Site, or which may
								expose Company or its users to any harm or liability of any
								type.
							</p>
						</div>

						<div className="one">
							<h1>Limitation of Liability</h1>
							<p>
								In no event shall Carrot, be liable for any damages (luding,
								without limitation, damages for loss of data or profit, or due
								to business interruption,) arising out of the use or inability
								to use the materials on Carrot’s Internet site, even if Carrot
								or a Carrot authorized representative has been notified orally
								or in writing of the possibility of such damage.
							</p>
						</div>

						<div className="one">
							<h1>Revisions and Errata</h1>
							<p>
								The materials appearing on Carrot’s Platforms could lude
								technical, typographical, or photographic errors. Carrot does
								not warrant that any of the materials on its Platforms are
								accurate, complete, or current. Carrot, may make changes to the
								materials contained on its Platforms at any time without notice.
								Carrot does not, however, make any commitment to update the
								materials.
							</p>
						</div>

						<div className="one">
							<h1>Links</h1>
							<p>
								Carrot, has not reviewed all of the sites linked to its Internet
								Platforms and is not responsible for the contents of any such
								linked site. The lusion of any link does not imply endorsement
								by Carrot of the site. Use of any such linked Platforms is at
								the user’s own risk.
							</p>
						</div>

						<div className="one">
							<h1>Site Terms of Use Modifications</h1>
							<p>
								Carrot may revise these terms of use for its Platforms at any
								time without notice. By using this Platforms you are agreeing to
								be bound by the then current version of these Terms and
								Conditions of Use
							</p>
						</div>

						<div className="one">
							<h1>Governing Law</h1>
							<p>
								Any claim relating to Carrot ’s Platforms shall be governed by
								the laws of the State of Delaware without regard to its conflict
								of law provisions.
							</p>
						</div>

						<div className="one">
							<h1>Proprietary Rights</h1>
							<p>
								You acknowledge and agree that the Service and any necessary
								software used in connection with the Service contain proprietary
								and confidential information that are protected by applicable
								intellectual property and other laws. You further acknowledge
								and agree that content contained in information presented to you
								through the Service is protected by copyrights, trademarks,
								service marks, patents or other proprietary rights and laws.
							</p>
						</div>

						<div className="one">
							<h1>Indemnification</h1>
							<p>
								You agree to indemnify, defend and hold harmless Carrot, its
								officers, directors, employees, agents, other service providers,
								vendors or customers from and against all losses, expenses,
								damages and costs, luding reasonable attorneys? fees resulting
								from any violation of these Terms and Conditions of Use by you
								or any harm you may cause to anyone in connection with your use
								of the Service, luding, for the avoidance of doubt, your use, or
								the use by any of your affiliates, of the Service for
								competitive purposes.
							</p>
						</div>

						<div className="one">
							<h1>Entire Agreement</h1>
							<p>
								The Terms and Conditions of Use governs your use of the Service
								and constitutes the entire agreement between you and Carrot. It
								supersedes any prior agreements between you and Carrot.
								Additional terms and conditions may apply when you use the
								services of service providers and others. These additional terms
								will not reduce, diminish, or eliminate any rights Carrot
								possesses with respect to these Terms and Conditions of Use.
							</p>
						</div>

						<div className="one">
							<h1>Miscellaneous</h1>
							<p>
								Any failure by Carrot to exercise any rights or enforce any of
								the terms of these Terms and Conditions of Use shall not
								constitute a waiver of such rights or terms. If any provision of
								these Terms and Conditions of Use or its application in a
								particular circumstance is held to be invalid or unenforceable
								to any extent, the remainder of these Terms and Conditions of
								Use, or the application of such provision in other
								circumstances, shall not be affected thereby, and each provision
								hereof shall be valid and enforced to the fullest extent
								permitted by law.
							</p>
						</div>

						<div className="one">
							<h1>Subscription Period</h1>
							<p>
								You will be entitled to receive the Service only during the
								subscription period ("Subscription Period") specified by your
								payment confirmation.
							</p>
						</div>

						<div className="one">
							<h1>No Resale or Redistribution of the Service</h1>
							<p>
								You agree not to reproduce, duplicate, copy, sell, trade, resell
								or exploit for any commercial purposes, any portion of the
								Service use of the Service, or access to the Service.
							</p>
						</div>

						<div className="one">
							<h1>Waiver and Severability of Terms</h1>
							<p>
								The failure of Carrot to exercise or enforce any right or
								provision of the Terms and Conditions of Use shall not
								constitute a waiver of such right or provision. If any provision
								of the Terms and Conditions of Use is found by a court of
								competent jurisdiction to be invalid, the parties nevertheless
								agree that the court should endeavor to give effect to the
								parties’ intentions as reflected in the provision, and the other
								provisions of the Terms and Conditions of Use remain in full
								force and effect.
							</p>
						</div>

						<div className="one">
							<h1>Electronic Communications</h1>
							<p>
								When you visit this Platforms and when you communicate with us
								electronically, for example by sending us an email or ordering
								our products online, you consent to receive communications from
								us electronically. We will communicate awith you by email or by
								posting notices on this Platforms. You agree that all
								agreements, notices, disclosures, and other communications that
								we provide to you electronically satisfy any legal requirement
								that such communications be in writing.
							</p>
						</div>

						<div className="one">
							<h1>Privacy Policy</h1>
							<p>
								You consent to the collection, processing and storage by Carrot
								of your personal information in accordance with the terms of
								Carrot’s Privacy Policy, which is available at
								www.Carrot.com/privacy. You agree to comply with all applicable
								laws and regulations, and the terms of Carrot’s Privacy Policy,
								with respect to any access, use and/or submission by you of any
								personal information in connection with this platform.
							</p>
						</div>
					</div>
				</div>
			</Fade>
			<Footer />
		</>
	);
}

export default Privacy;
