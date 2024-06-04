import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../assets/css/main.css';
import Header from './Header';
import appImg from './../assets/img/mobileApps.png';
import feelingImg from './../assets/img/effectOfFeelings.png';
import logo from './../assets/img/logo.png';


function Footer() {
    return (
        <>
            <footer id="footer" class="footer position-relative">

                <div class="container footer-top">
                    <div class="row gy-4">
                        <div class="col-lg-8 col-md-6 footer-about">
                            <a href="index.html" class="logo d-flex align-items-center">
                                <img src={logo} alt="" />
                                <span class="sitename">MeloWave</span>
                            </a>
                            <div class="footer-contact pt-3">
                                <p>SLIIT Malabe Campus, </p>
                                <p>New Kandy Rd, Malabe 10115</p>
                                <p class="mt-3"><strong>Phone:</strong> <span>+94 11 754 4801</span></p>
                                <p><strong>Email:</strong> <span>info@sliit.com</span></p>
                            </div>
                            <div class="social-links d-flex mt-4">
                                <a href=""><i class="bi bi-twitter"></i></a>
                                <a href=""><i class="bi bi-facebook"></i></a>
                                <a href=""><i class="bi bi-instagram"></i></a>
                                <a href=""><i class="bi bi-linkedin"></i></a>
                            </div>
                        </div>

                        <div class="col-lg-2 col-md-3 footer-links">
                            <h4>Useful Links</h4>
                            <ul>
                                <li><a href="/">Home</a></li>
                                <li><a href="#about">About</a></li>
                                <li><a href="/docs">Downloads</a></li>
                                <li><a href="#ls">Literiture Survey</a></li>
                                <li><a href="#contact">Contact Us</a></li>
                            </ul>
                        </div>

                        <div class="col-lg-2 col-md-3 footer-links">
                            <h4>Our Goals..</h4>
                            <ul>
                                <li><a href="#">Introduce the Research</a></li>
                                <li><a href="#">Documentations</a></li>
                                <li><a href="#">Acadamic based</a></li>
                                <li><a href="#">Marketing</a></li>
                                <li><a href="#">Acknowledgement</a></li>
                            </ul>
                        </div>

                        {/* <div class="col-lg-2 col-md-3 footer-links">
                            <img src={logo} alt="" />
                        </div> */}
                    </div>
                </div>

                <div class="container copyright text-center">
                    <p>© <span>Copyright</span> <strong class="px-1 sitename">MeloWave</strong><span>All Rights Reserved</span></p>
                    <div class="credits">

                        Designed by <b>TMP - 2024 - 23 - 065</b>
                    </div>
                </div>

            </footer >
        </>
    );
}

export default Footer;
