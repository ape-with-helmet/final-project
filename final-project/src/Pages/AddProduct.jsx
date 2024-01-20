//import { get } from "mongoose";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState, useRef } from "react";
import axios from 'axios'
//import { useNavigate } from "react-router-dom";
import './Profilepage.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoadingBar from 'react-top-loading-bar'

const auth = localStorage.getItem('loginData');

function AddProduct() {
    const [admin, setAdmin] = useState(false);

    useEffect(() => {
        submit();
    }, [])
    let submit = async () => {
        try {
            const response = await axios.post("http://localhost:8080/userFind", {
                auth
            })
            console.log("first")
            setAdmin(response.data.admin)
        } catch (error) {
            console.log(error);
        }
    };
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
											<h3 class="mb-4">Enter the new product details22233</h3>
											<form method="POST" id="contactForm" name="contactForm" class="contactForm">
												<div class="row">
													<div class="col-md-12">
														<div class="form-group">
															<input type="text" class="form-control" name="name" id="name" placeholder="Name" data-temp-mail-org="0" onChange={(e) => {  }} />
														</div>
													</div>
													<div class="col-md-12">
														<div class="form-group">
															<input type="email" class="form-control" name="email" id="email" placeholder="Email ID" data-temp-mail-org="0" onChange={(e) => {  }} />
														</div>
													</div>
													<div class="col-md-12">
														<div class="form-group">
															<input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" data-temp-mail-org="0" onChange={(e) => {  }} />
														</div>
													</div>
													<div class="col-md-12">
														<div class="form-group">
															<textarea name="message" class="form-control" id="message" cols="30" rows="6" placeholder="Message" onChange={(e) => {  }}></textarea>
														</div>
													</div>
													<div class="col-md-12">
														<div class="form-group">
															<button class="btn btn-primary" type="submit">Send Message</button>
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

export default AddProduct