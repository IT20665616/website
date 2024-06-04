import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../assets/css/main.css';
import logo from './../assets/img/logo.png';
import hansi from './../assets/img/hansi.jpg';
import malshan from './../assets/img/malshan.jpg';
import kalpana from './../assets/img/kalpana.jpg';
import thusithanjana from './../assets/img/thusithanjana.jpeg';
import darshana from './../assets/img/darshana.jpeg';
import sahan from './../assets/img/sahan.jpg';
import heroBg from './../assets/img/hero-bg-light.webp';
import appImg from './../assets/img/mobileApps.png';
import feelingImg from './../assets/img/effectOfFeelings.png';
import obj from './../assets/img/aim.png';
import feature1 from './../assets/img/features-1.jpg';
import colab from './../assets/img/colab.png';
import flutter from './../assets/img/flutter.png';
import kaggle from './../assets/img/kaggle.png';
import vsCode from './../assets/img/vsCode.jpeg';
import python from './../assets/img/python.webp';
import swagger from './../assets/img/swagger.png';
import firebase from './../assets/img/firebase.png';
import Footer from './Footer';



function Home() {
    return (
        <>
            <header id="header" class="header d-flex align-items-center fixed-top">
                <div class="container-fluid container-xl position-relative d-flex align-items-center">

                    <a href="/" class="logo d-flex align-items-center me-auto">
                        <img src={logo} alt="" />
                        <h1 class="sitename">MeloWave</h1>
                    </a>

                    <nav id="navmenu" class="navmenu">
                        <ul>
                            <li><a href="/" class="">Home</a></li>
                            <li><a href="#about">About</a></li>
                            {/* <li><a href="index.html#features">Milestones</a></li> */}
                            <li class="dropdown"><a href="#"><span>Downloads</span></a>
                            </li>
                            <li class="dropdown"><a href="#"><span>Project Scope</span> <i class="bi bi-chevron-down toggle-dropdown"></i></a>
                                <ul>
                                    <li><a href="#ls">Literiture Survey</a></li>
                                    <li><a href="#researchGap">Research Gap</a></li>
                                    <li><a href="#objectives">Research Objectives</a></li>
                                    <li><a href="#researchProblem">Research Problem</a></li>
                                    {/* <li><a href="#">Methodology</a></li> */}
                                    <li><a href="#tools">Tools and Technologies</a></li>
                                </ul>
                            </li>
                        </ul>
                        <i class="mobile-nav-toggle d-xl-none bi bi-list"></i>
                    </nav>

                    <a class="btn-getstarted" href="index.html#about">Contact Us</a>

                </div>
            </header>

            <section id="hero" class="hero section">
                <div class="hero-bg">
                    <img src={heroBg} alt="" />
                </div>
                <div class="container text-center">
                    <div class="d-flex flex-column justify-content-center align-items-center">
                        <h1 data-aos="fade-up" class="">Welcome to <span>MeloWave</span></h1>
                        <p data-aos="fade-up" data-aos-delay="100" class="">
                            Multi-Model Approach to Recommend Personalized Music Playlist
                            <br />
                        </p>
                        <div class="d-flex" data-aos="fade-up" data-aos-delay="200">
                            <a href="/docs" class="btn-get-started">Download Documents</a>
                            {/* <a href="https://www.youtube.com/watch?v=LXb3EKWsInQ" class="glightbox btn-watch-video d-flex align-items-center"><i class="bi bi-play-circle"></i><span>Watch Video</span></a> */}
                        </div>
                        {/* <img src={heroImg} class="img-fluid hero-img" alt="" data-aos="zoom-out" data-aos-delay="300"/> */}
                    </div>
                </div>

            </section>

            {/* ************************************************ */}

            <section id="about" class="features-details section">

                <div class="container">

                    <div class="row gy-4 justify-content-center features-item">
                        <div class="col-lg-3 d-flex align-items-center" data-aos="fade-up" data-aos-delay="200">
                            <div class="content">
                                <h3>Meet the Team</h3>
                                <p>Heartfelt gratitude is extended to each and every team member for their dedication, hard work, and unwavering commitment throughout the project. Th
                                    Additionally, sincere thanks are extended to our co-supervisor, Dr. Dharshana, for their continuous support, constructive suggestions, and encouragement. Their contributions have been crucial in steering the project in the right direction.
                                </p>
                            </div>
                        </div>

                        <div class="col-lg-4 d-flex align-items-center" data-aos="fade-up" data-aos-delay="200">
                            <div class="content">
                                <img src={thusithanjana} class="img-fluid" alt="" />
                                <br />
                                <h5>Mr. Thusithanjana Thilakarathna</h5>
                                <h3>- Supervisor -</h3>
                            </div>
                        </div>
                        <div class="col-lg-4 d-flex align-items-center" data-aos="fade-up" data-aos-delay="200">
                            <div class="content">
                                <img src={darshana} class="img-fluid" alt="" />
                                <br />
                                <h5>Dr. Dharshana Kasthurirathna</h5>
                                <h3>- Co - Supervisor -</h3>
                            </div>
                        </div>
                    </div>

                    <div class="row gy-4 justify-content-around features-item">

                        <div class="col-lg-3 d-flex align-items-center" data-aos="fade-up" data-aos-delay="200">
                            <div class="content">
                                <img src={hansi} class="img-fluid" alt="" />
                                <br />
                                <h5>Sumanasekara H.P.</h5>
                                <h3>IT20665616</h3>
                                {/* <h3>- Group Leader -</h3> */}
                            </div>
                        </div>
                        <div class="col-lg-3 d-flex align-items-center" data-aos="fade-up" data-aos-delay="200">
                            <div class="content">
                                <img src={malshan} class="img-fluid" alt="" />
                                <br />
                                <h5>Gunasekara C. M.</h5>
                                <h3>IT20665852</h3>
                            </div>
                        </div>
                        <div class="col-lg-3 d-flex align-items-center" data-aos="fade-up" data-aos-delay="200">
                            <div class="content">
                                <img src={sahan} class="img-fluid" alt="" />
                                <br />
                                <h5>Dhananjaya W.K.S.</h5>
                                <h3>IT20667078</h3>
                            </div>
                        </div>
                        <div class="col-lg-3 d-flex align-items-center" data-aos="fade-up" data-aos-delay="200">
                            <div class="content">
                                <img src={kalpana} class="img-fluid" alt="" />
                                <br />
                                <h5>Fernando M.P.T.K.</h5>
                                <h3>IT20610852</h3>
                            </div>
                        </div>
                    </div>


                </div>

            </section>


            {/* literature survey */}
            {/* ******************************************************************** */}

            <section id="ls" class="about section">
                <div class="container">
                    <div class="row gy-4">
                        <div class="col-lg-7 content" data-aos="fade-up" data-aos-delay="100">
                            <p class="who-we-are">Literiture Survey</p>
                            <h3>Music Recommendation and Personalization..</h3>
                            <br />
                            <p class="fst-italic">
                                The field of music recommendation has seen significant advancements with platforms like YouTube, Spotify, and iTunes utilizing various filtering techniques such as content-based, collaborative, and hybrid filtering to enhance user experience.
                                These recommender systems aim to bridge the gap between information overload and user preferences by filtering data to provide relevant content. Content-based filtering, for instance, has shown to achieve up to eighty percent song similarity and fifty percent artist similarity, proving its effectiveness.
                                The proposed system seeks to advance these methodologies by incorporating additional inputs such as user emotions, surroundings, and other contextual factors to improve recommendation accuracy.
                                This approach also addresses the cold start problem, a common issue in recommendation systems, by leveraging techniques like matrix factorization, micro-services, and integrating various user data inputs, including spatial information and user profiles derived from image processing and voice-based emotion detection.

                                <br /><br />
                                Furthermore, the proposed system emphasizes the use of neural networks for age, gender, and emotion detection from user selfies, combining these insights with other contextual data to enhance personalization. Research has shown that human voice, with its nuanced acoustic characteristics, is a powerful indicator of emotions. Advances in voice-based emotion recognition, utilizing techniques such as Mel-Frequency Cepstral Coefficients (MFCCs) and deep learning models, demonstrate the potential for real-time emotional state detection. However, integrating these technologies seamlessly for real-time engagement remains a challenge. The proposed system aims to address this by developing an intuitive user interface for voice input, creating algorithms for emotionally coherent playlists, and ensuring the playlists reflect the user's emotional experiences while maintaining user preferences. This holistic approach promises to offer a more tailored and emotionally satisfying music experience.
                            </p>

                            <a href="/ls" class="read-more"><span>Read More</span><i class="bi bi-arrow-right"></i></a>
                        </div>
                        <div class="col-lg-5 about-images" data-aos="fade-up" data-aos-delay="200">
                            <div class="row gy-4">
                                <div class="col-lg-6 m-5 p-5">
                                    <div class="row gy-4">
                                        <div class="col-lg-12 mb-5">
                                            <img src={appImg} class="img-fluid" alt="" />
                                        </div>
                                        <div class="col-lg-12">
                                            <img src={feelingImg} class="img-fluid" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* ************************************************ */}


            <section id="researchGap" class="services section">
                <div class="container section-title" data-aos="fade-up">
                    <h2>Reasearch Gap</h2>
                </div>

                <div class="container">
                    <div class="row g-5">
                        <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                            <div class="service-item item-cyan position-relative">
                                <i class="bi bi-person-check-fill icon"></i>
                                <div>
                                    <h3>Predict user profile using a selfie.</h3>
                                    <p>
                                        Predicting user profiles using selfies involves utilizing advanced image processing techniques
                                        and machine learning algorithms to analyze facial characteristics and other visual
                                        cues captured in a selfie. By extracting information from the selfie, such as age and gender the model can generate insights into the user's profile.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-6" data-aos="fade-up" data-aos-delay="200">
                            <div class="service-item item-orange position-relative">
                                <i class="bi bi-cloud-drizzle-fill icon"></i>
                                <div>
                                    <h3>Predict user’s current outside weather.</h3>
                                    <p>
                                        Predicting the user's current outdoor weather involves employing machine learning
                                        models trained on environmental data and contextual information to estimate weather
                                        conditions at the user's location. These predictions enable personalized recommendations and
                                        services that adapt to the user's immediate environment, enhancing their overall experience.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-6" data-aos="fade-up" data-aos-delay="300">
                            <div class="service-item item-teal position-relative">
                                <i class="bi bi-mic-fill icon"></i>
                                <div>
                                    <h3>Detect user’s emotion using a voice clip.</h3>
                                    <p>
                                        Detecting a user's emotion through a voice clip involves analyzing
                                        acoustic features such as pitch, intensity, and speech patterns using machine learning
                                        algorithms. By training models on labeled emotion datasets, the system can accurately
                                        classify emotions conveyed in speech, enabling personalized interactions and content recommendations.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-6" data-aos="fade-up" data-aos-delay="400">
                            <div class="service-item item-red position-relative">
                                <i class="bi bi-arrows-angle-contract icon"></i>
                                <div>
                                    <h3>Assessing the effect on user’s emption from the recommended playlist.</h3>
                                    <p>
                                        Assessing the impact of recommended playlists on user emotions involves
                                        monitoring post-listening emotional expressions through video analysis. By analyzing
                                        users' facial expressions and body language, the system can identify emotional reactions
                                        such as joy, relaxation, or excitement.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* ************************************************************ */}


            <section id="objectives" class="more-features section">
                <div class="container">
                    <div class="row justify-content-around gy-4">
                        <div class="col-lg-6 d-flex flex-column justify-content-center order-2 order-lg-1" data-aos="fade-up" data-aos-delay="100">
                            <h3>Research Objectives</h3>
                            <p>
                                The primary objective of this recommender system is to enhance user
                                experience by delivering personalized music playlists tailored to
                                individual preferences and emotions. This entails improving user-friendliness
                                and recommendation accuracy through a series of challenging steps, including
                                capturing high-quality selfies, analyzing facial details, assessing environmental
                                cues, and utilizing voice commands to identify user emotions.
                            </p>
                            <div class="row">
                                <div class="col-lg-12 icon-box d-flex">
                                    <i class="bi bi-person flex-shrink-0"></i>
                                    <div>
                                        <h4>1.  Predicting a user profile using a selfie</h4>
                                    </div>
                                </div>
                                <div class="col-lg-12 icon-box d-flex">
                                    <i class="bi bi-brightness-high flex-shrink-0"></i>
                                    <div>
                                        <h4>2.	Predicting indoor/outdoor and the current weather by using a photo.</h4>
                                    </div>
                                </div>

                                <div class="col-lg-12 icon-box d-flex">
                                    <i class="bi bi-mic flex-shrink-0"></i>
                                    <div>
                                        <h4>3.	Predicting user emotions by a voice emotion.</h4>
                                    </div>
                                </div>

                                <div class="col-lg-12 icon-box d-flex">
                                    <i class="bi bi-patch-check flex-shrink-0"></i>
                                    <div>
                                        <h4>4.	Assessing user’s post emotions.</h4>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="features-image col-lg-5 order-1 order-lg-2" data-aos="fade-up" data-aos-delay="200">
                            {/* <img src={obj} alt="" /> */}
                        </div>
                    </div>
                </div>
            </section>


            {/* ***************************************************** */}

            <section id="researchProblem" class="features-details section">
                <div class="container">
                    <div class="row gy-4 justify-content-between features-item">
                        <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                            <img src={feature1} class="img-fluid" alt="" />
                        </div>
                        <div class="col-lg-5 d-flex align-items-center" data-aos="fade-up" data-aos-delay="200">
                            <div class="content">
                                <h3>Research Problem</h3>
                                <p>
                                    The research problem at hand is to explore the development of music recommendation systems that transcend
                                    conventional approaches by seamlessly integrating real-time environmental factors, user preferences, and
                                    post-listening emotional states. This entails leveraging cutting-edge technologies such as deep learning,
                                    computer vision, and audio classification to create personalized recommendations tailored to individual moods,
                                    surroundings, and emotional responses. This research seeks to bridge
                                    the gap between existing methods and user-centric needs, paving the way for a new generation of music recommendation
                                    systems that not only understand users' music tastes but also adapt to their unique contexts in real-time, thereby
                                    enriching user engagement and satisfaction with music streaming applications.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* ************************************************** */}



            <section id="tools" class="clients section ">
                <div class="container section-title" data-aos="fade-up">
                    <h2>Tools and Technologies</h2>
                    <div class="row gy-4">
                        <div class="col-xl-2 col-md-3 col-6 client-logo">
                            <img src={colab} class="img-fluid" alt="" />
                        </div>

                        <div class="col-xl-2 col-md-3 col-6 client-logo">
                            <img src={python} class="img-fluid" alt="" />
                        </div>

                        <div class="col-xl-2 col-md-3 col-6 client-logo">
                            <img src={kaggle} class="img-fluid" alt="" />
                        </div>

                        <div class="col-xl-2 col-md-3 col-6 client-logo">
                            <img src={flutter} class="img-fluid" alt="" />
                        </div>

                        <div class="col-xl-2 col-md-3 col-6 client-logo">
                            <img src={swagger} class="img-fluid" alt="" />
                        </div>

                        <div class="col-xl-2 col-md-3 col-6 client-logo">
                            <img src={firebase} class="img-fluid" alt="" />
                        </div>
                    </div>
                </div>
            </section>


            {/* ********************************************** */}

            <section id="contact" class="contact section">

                <div class="container section-title" data-aos="fade-up">
                    <h2>Contact</h2>
                    <p>Do not hesitate to contact us for any further inquiry....</p>
                </div>

                <div class="container" data-aos="fade-up" data-aos-delay="100">

                    <div class="row gy-4">

                        <div class="col-lg-6">
                            <div class="info-item d-flex flex-column justify-content-center align-items-center" data-aos="fade-up" data-aos-delay="200">
                                <i class="bi bi-geo-alt"></i>
                                <h3>Address</h3>
                                <p>SLIIT Malabe Campus, New Kandy Rd, Malabe 10115</p>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-6">
                            <div class="info-item d-flex flex-column justify-content-center align-items-center" data-aos="fade-up" data-aos-delay="300">
                                <i class="bi bi-telephone"></i>
                                <h3>Call Us</h3>
                                <p>+94 11 754 4801</p>
                                <p>+94 11 241 3901</p>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-6">
                            <div class="info-item d-flex flex-column justify-content-center align-items-center" data-aos="fade-up" data-aos-delay="400">
                                <i class="bi bi-envelope"></i>
                                <h3>Email Us</h3>
                                <p>info@sliit.lk</p>
                            </div>
                        </div>

                    </div>

                    <div class="row gy-4 mt-1">
                        <div class="col-lg-6" data-aos="fade-up" data-aos-delay="300">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1985.291003589333!2d79.95734291610257!3d6.914763295000634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae250b18d23b8db%3A0xf82db470a0c7d2ec!2sSri%20Lanka%20Institute%20of%20Information%20Technology%20(SLIIT)!5e0!3m2!1sen!2slk!4v1684491203873!5m2!1sen!2slk" frameborder="0" style={{ border: 0, width: '100%', height: '400px' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>

                        <div class="col-lg-6">
                            <form action="forms/contact.php" method="post" class="php-email-form" data-aos="fade-up" data-aos-delay="400">
                                <div class="row gy-4">

                                    <div class="col-md-6">
                                        <input type="text" name="name" class="form-control" placeholder="Your Name" required="" />
                                    </div>

                                    <div class="col-md-6 ">
                                        <input type="email" class="form-control" name="email" placeholder="Your Email" required="" />
                                    </div>

                                    <div class="col-md-12">
                                        <input type="text" class="form-control" name="subject" placeholder="Subject" required="" />
                                    </div>

                                    <div class="col-md-12">
                                        <textarea class="form-control" name="message" rows="6" placeholder="Message" required=""></textarea>
                                    </div>

                                    <div class="col-md-12 text-center">
                                        <div class="loading">Loading</div>
                                        <div class="error-message"></div>
                                        <div class="sent-message">Your message has been sent. Thank you!</div>

                                        <button type="submit">Send Message</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>


            {/* ************************************** */}

            <Footer />


        </>
    );
}

export default Home;
