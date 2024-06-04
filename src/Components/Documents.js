import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../assets/css/main.css';
import logo from './../assets/img/logo.png';
import Footer from './Footer';
import Header from './Header';


// common documents

import finalReport from '../assets/Docs/finalReport.pdf';
import researchPaper from '../assets/Docs/researchPaper.pdf';
import taf from '../assets/Docs/taf.pdf';
import pp1 from '../assets/Docs/pp1.pdf';
import pp2 from '../assets/Docs/pp2.pdf';
import finalPresentation from '../assets/Docs/finalPresentation.pdf';

// final reports

import hansifr from '../assets/Docs/finalReports/hansi.pdf';
import kalpanafr from '../assets/Docs/finalReports/kalpana.pdf';
import malshanfr from '../assets/Docs/finalReports/malshan.pdf';
import sahanfr from '../assets/Docs/finalReports/sahan.pdf';

// project proposals

import hansipp from '../assets/Docs/proposals/hansi.pdf';
import kalpanapp from '../assets/Docs/proposals/kalpana.pdf';
import malshanpp from '../assets/Docs/proposals/malshan.pdf';
import sahanpp from '../assets/Docs/proposals/sahan.pdf';

// Status 01

import hansis1 from '../assets/Docs/status1/hansi.pdf';
import kalpanas1 from '../assets/Docs/status1/kalpana.pdf';
import malshans1 from '../assets/Docs/status1/malshan.pdf';
import sahans1 from '../assets/Docs/status1/sahan.pdf';

// Status 02

import hansis2 from '../assets/Docs/status2/hansi.pdf';
import kalpanas2 from '../assets/Docs/status2/kalpana.pdf';
import malshans2 from '../assets/Docs/status2/malshan.pdf';
import sahans2 from '../assets/Docs/status2/sahan.pdf';


function Documents() {
    return (
        <>
            <Header />

            <br /><br /><br />


            <section id="services" class="services section">

                <div class="container section-title" data-aos="fade-up">
                    <h2>Common Documents </h2>
                </div>

                <div class="container">

                    <div class="row g-5 justify-content-center mb-3">

                        <div class="col-lg-4" data-aos="fade-up" data-aos-delay="100">
                            <div class="service-item item-cyan position-relative">
                                <i class="bi bi-files icon"></i>
                                <div>
                                    <h3>Topic Assessment Document</h3>
                                    <a href={taf} class="read-more stretched-link">Download<i class="bi bi-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4" data-aos="fade-up" data-aos-delay="100">
                            <div class="service-item item-cyan position-relative">
                                <i class="bi bi-files icon"></i>
                                <div>
                                    <h3>Progress Presentation 01</h3>
                                    <p><superscript><b>*</b></superscript>Presentation Slides<superscript><b>*</b></superscript></p>
                                    <a href={pp1} class="read-more stretched-link">Download<i class="bi bi-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4" data-aos="fade-up" data-aos-delay="100">
                            <div class="service-item item-cyan position-relative">
                                <i class="bi bi-files icon"></i>
                                <div>
                                    <h3>Progress Presentation 02</h3>
                                    <p><superscript><b>*</b></superscript>Presentation Slides<superscript><b>*</b></superscript></p>
                                    <a href={pp2} class="read-more stretched-link">Download<i class="bi bi-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4" data-aos="fade-up" data-aos-delay="100">
                            <div class="service-item item-cyan position-relative">
                                <i class="bi bi-files icon"></i>
                                <div>
                                    <h3>Research Paper</h3>
                                    <a href={researchPaper} class="read-more stretched-link">Download<i class="bi bi-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4" data-aos="fade-up" data-aos-delay="100">
                            <div class="service-item item-cyan position-relative">
                                <i class="bi bi-files icon"></i>
                                <div>
                                    <h3>Final Theases</h3>
                                    <a href={finalReport} class="read-more stretched-link">Download<i class="bi bi-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4" data-aos="fade-up" data-aos-delay="100">
                            <div class="service-item item-cyan position-relative">
                                <i class="bi bi-files icon"></i>
                                <div>
                                    <h3>Final Presentation</h3>
                                    <a href={finalPresentation} class="read-more stretched-link">Download<i class="bi bi-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>

                    </div>

                    <br /><br />


                    <div class="container section-title" data-aos="fade-up">
                        <h2>Individual Documents</h2>
                        <p>Individual Project Proposal Documents</p>
                    </div>

                    <div class="row g-5 justify-content-center">

                        <div class="col-lg-3" data-aos="fade-up" data-aos-delay="100">
                            <div class="service-item item-orange position-relative">
                                <i class="bi bi-files icon"></i>
                                <div>
                                    <h3>IT20665616</h3>
                                    <p>Sumanasekara H.P.</p>
                                    <a href={hansipp} class="read-more stretched-link">Download <i class="bi bi-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-3" data-aos="fade-up" data-aos-delay="100">
                            <div class="service-item item-orange position-relative">
                                <i class="bi bi-files icon"></i>
                                <div>
                                    <h3>IT20667078</h3>
                                    <p>Dhananjaya W.K.S.</p>
                                    <a href={sahanpp} class="read-more stretched-link">Download <i class="bi bi-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-3" data-aos="fade-up" data-aos-delay="100">
                            <div class="service-item item-orange position-relative">
                                <i class="bi bi-files icon"></i>
                                <div>
                                    <h3>IT20665852</h3>
                                    <p>Gunasekara <br />C.M.</p>
                                    <a href={malshanpp} class="read-more stretched-link">Download <i class="bi bi-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-3" data-aos="fade-up" data-aos-delay="100">
                            <div class="service-item item-orange position-relative">
                                <i class="bi bi-files icon"></i>
                                <div>
                                    <h3>IT20610652</h3>
                                    <p>Fernando <br/> M.P.T.K.</p>
                                    <a href={kalpanapp} class="read-more stretched-link">Download <i class="bi bi-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>

                    </div>

                    <br /><br />

                    <div class="container section-title" data-aos="fade-up">
                        <p>Status Document 01</p>
                    </div>

                    <div class="row g-5 justify-content-center">

                        <div class="col-lg-3" data-aos="fade-up" data-aos-delay="100">
                            <div class="service-item item-teal position-relative">
                                <i class="bi bi-files icon"></i>
                                <div>
                                    <h3>IT20665616</h3>
                                    <p>Sumanasekara H.P.</p>
                                    <a href={hansis1} class="read-more stretched-link">Download <i class="bi bi-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-3" data-aos="fade-up" data-aos-delay="100">
                            <div class="service-item item-teal position-relative">
                                <i class="bi bi-files icon"></i>
                                <div>
                                    <h3>IT20667078</h3>
                                    <p>Dhananjaya W.K.S.</p>
                                    <a href={sahans1} class="read-more stretched-link">Download <i class="bi bi-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-3" data-aos="fade-up" data-aos-delay="100">
                            <div class="service-item item-teal position-relative">
                                <i class="bi bi-files icon"></i>
                                <div>
                                    <h3>IT20665852</h3>
                                    <p>Gunasekara <br />C.M.</p>
                                    <a href={malshans1} class="read-more stretched-link">Download <i class="bi bi-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-3" data-aos="fade-up" data-aos-delay="100">
                            <div class="service-item item-teal position-relative">
                                <i class="bi bi-files icon"></i>
                                <div>
                                    <h3>IT20610652</h3>
                                    <p>Fernando <br/> M.P.T.K.</p>
                                    <a href={kalpanas1} class="read-more stretched-link">Download <i class="bi bi-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>

                    </div>

                    <br /><br />


                    <div class="container section-title" data-aos="fade-up">
                        <p>Status Document 02</p>
                    </div>

                    <div class="row g-5 justify-content-center">

                        <div class="col-lg-3" data-aos="fade-up" data-aos-delay="100">
                            <div class="service-item item-indigo position-relative">
                                <i class="bi bi-files icon"></i>
                                <div>
                                    <h3>IT20665616</h3>
                                    <p>Sumanasekara H.P.</p>
                                    <a href={hansis2} class="read-more stretched-link">Download <i class="bi bi-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-3" data-aos="fade-up" data-aos-delay="100">
                            <div class="service-item item-indigo position-relative">
                                <i class="bi bi-files icon"></i>
                                <div>
                                    <h3>IT20667078</h3>
                                    <p>Dhananjaya W.K.S.</p>
                                    <a href={sahans2} class="read-more stretched-link">Download <i class="bi bi-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-3" data-aos="fade-up" data-aos-delay="100">
                            <div class="service-item item-indigo position-relative">
                                <i class="bi bi-files icon"></i>
                                <div>
                                    <h3>IT20665852</h3>
                                    <p>Gunasekara <br />C.M.</p>
                                    <a href={malshans2} class="read-more stretched-link">Download <i class="bi bi-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-3" data-aos="fade-up" data-aos-delay="100">
                            <div class="service-item item-indigo position-relative">
                                <i class="bi bi-files icon"></i>
                                <div>
                                    <h3>IT20610652</h3>
                                    <p>Fernando <br/> M.P.T.K.</p>
                                    <a href={kalpanas2} class="read-more stretched-link">Download <i class="bi bi-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>

                    </div>

                    <br /><br /><br />



                    <br /><br />

                    <div class="container section-title" data-aos="fade-up">
                        <p>Individual Final Reports</p>
                    </div>

                    <div class="row g-5 justify-content-center">

                        <div class="col-lg-3" data-aos="fade-up" data-aos-delay="100">
                            <div class="service-item item-pink position-relative">
                                <i class="bi bi-files icon"></i>
                                <div>
                                    <h3>IT20665616</h3>
                                    <p>Sumanasekara H.P.</p>
                                    <a href={hansifr} class="read-more stretched-link">Download <i class="bi bi-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-3" data-aos="fade-up" data-aos-delay="100">
                            <div class="service-item item-pink position-relative">
                                <i class="bi bi-files icon"></i>
                                <div>
                                    <h3>IT20667078</h3>
                                    <p>Dhananjaya W.K.S.</p>
                                    <a href={sahanfr} class="read-more stretched-link">Download <i class="bi bi-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-3" data-aos="fade-up" data-aos-delay="100">
                            <div class="service-item item-pink position-relative">
                                <i class="bi bi-files icon"></i>
                                <div>
                                    <h3>IT20665852</h3>
                                    <p>Gunasekara <br />C.M.</p>
                                    <a href={malshanfr} class="read-more stretched-link">Download <i class="bi bi-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-3" data-aos="fade-up" data-aos-delay="100">
                            <div class="service-item item-pink position-relative">
                                <i class="bi bi-files icon"></i>
                                <div>
                                    <h3>IT20610652</h3>
                                    <p>Fernando <br/> M.P.T.K.</p>
                                    <a href={kalpanafr} class="read-more stretched-link">Download <i class="bi bi-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div class="container individual-container">
                    <a href="/" class="back-button"><i class="bi bi-arrow-left"></i><span>Back</span></a>
                </div>

            </section>

            <Footer />

        </>
    );
}

export default Documents;
