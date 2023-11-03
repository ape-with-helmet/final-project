import React, { useState, useEffect } from "react";
import './ContactPage.css'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLocation } from "react-router";

function ContactPage() {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scroll(0,0);
	}, [pathname]);


	const [name, setName] = useState("");
	const [subject, setSubject] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");


	let submit = async (e) => {
		e.preventDefault()
		try {

			// alert("Successfully sumbitted")
			await axios.post("http://localhost:8080/contactus", {
				name,
				subject,
				email,
				message
			})
			toast.success('Successfully sumbitted', {
				position: "bottom-center",
				autoClose: 3000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: false,
				draggable: true,
				progress: undefined,
				theme: "dark",
			})
		} catch (error) {
			console.log(error)
			toast.error('error', {
				position: "bottom-center",
				autoClose: 3000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: false,
				draggable: true,
				progress: undefined,
				theme: "dark",
			})
			//alert(error.message)	
		}
	}
	return (
		<>
			<section class="ftco-section">
				<div class="container">
					<div class="row justify-content-center">
						<div class="col-md-10">
							<div class="wrapper">
								<div class="row1 no-gutters">
									<div class="col-md-6">
										<div class="contact-wrap w-100 p-lg-5 p-4">
											<h3 class="mb-4">Send us a message </h3>
											<form method="POST" id="contactForm" name="contactForm" class="contactForm">
												<div class="row">
													<div class="col-md-12">
														<div class="form-group">
															<input type="text" class="form-control" name="name" id="name" placeholder="Name" data-temp-mail-org="0" onChange={(e) => { setName(e.target.value) }} />
														</div>
													</div>
													<div class="col-md-12">
														<div class="form-group">
															<input type="email" class="form-control" name="email" id="email" placeholder="Email ID" data-temp-mail-org="0" onChange={(e) => { setEmail(e.target.value) }} />
														</div>
													</div>
													<div class="col-md-12">
														<div class="form-group">
															<input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" data-temp-mail-org="0" onChange={(e) => { setSubject(e.target.value) }} />
														</div>
													</div>
													<div class="col-md-12">
														<div class="form-group">
															<textarea name="message" class="form-control" id="message" cols="30" rows="6" placeholder="Message" onChange={(e) => { setMessage(e.target.value) }}></textarea>
														</div>
													</div>
													<div class="col-md-12">
														<div class="form-group">
															<button class="btn btn-primary" type="submit" onClick={submit}>Send Message</button>
														</div>
													</div>
												</div>
											</form>
										</div>
									</div>
									<div class="col-md-6 d-flex align-items-stretch">
										<div class="info-wrap w-100 p-lg-5 p-4 ">
											<h3>Contact us</h3>
											<p class="mb-4">We're open for any suggestion or just to have a chat</p>
											<div class="dbox w-100 d-flex align-items-start">
												<div class="text pl-3">
													<p><span>Address:</span> Mangalore , Karnataka , India</p>
												</div>
											</div>
											<div class="dbox w-100 d-flex align-items-center">
												<div class="text pl-3">
													<p><span>Phone:</span> +91	98733 44668</p>
												</div>
											</div>
											<div class="dbox w-100 d-flex align-items-center">
												<div class="text pl-3">
													<p><span>Email:</span> xrxs@gmail.com</p>
												</div>
											</div>
											<div class="dbox w-100 d-flex align-items-center">
												<div class="text pl-3">
													<p><span>Website</span> xrxs.com</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<ToastContainer />
		</>

	)
}

export default ContactPage;
