import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../assets/css/main.css';
import Header from './Header';
import appImg from './../assets/img/mobileApps.png';
import feelingImg from './../assets/img/effectOfFeelings.png';
import Footer from './Footer';


function LiteritureSurvey() {
    return (
        <>
            <Header />
            <section id="about" class="about section">
                <div class="container individual-container">
                    <p class="page-topic">Literiture Survey</p>
                    {/* <h3>Literiture Review </h3> */}
                    <br />
                    <p class="fst-italic">
                        Music recommendation has been a major aspect of life these days. There are many platforms that we can use to listen to music. Some of them are our traditional and oldest: YouTube, Spotify, iTunes, and many others. There are so many mechanisms to give filtered recommendations, like content-based filtering, collaborative filtering, and hybrid filtering [2]. [1] Recommender systems were created to bridge that gap between information gathering and analysis by filtering all available data to offer only what is most important to the user. Some research has found that content-based filtering similarity results reach up to 80% similarity for the song and 50% similarity for the artist, which means this type of filtering works well for our recommendation system [1]. Therefore, there are already tested and proven machine learning algorithms in use in recommender systems [1][2]. This proposed system will take this approval another step ahead and use user emotions, surroundings, and many other inputs to enhance the accuracy of the recommender system along with the content, collaborative, and hybrid filtering algorithms.
                        <br /><br />The paper "Music recommendation based on embedding model with user preference and context" [6] presents an innovative approach to music recommendation by integrating user preferences and contextual information into an embedding model. The authors emphasize the significance of considering both user preferences and contextual factors to enhance recommendation accuracy. By utilizing embedding techniques, the proposed framework represents music items, users, and contextual features in a unified vector space, facilitating more effective computation of similarity metrics. Key components of the method include capturing user preferences and context information, leveraging collaborative filtering techniques, and incorporating Markov processes for contextual modeling. By combining user preference and contextual information within the embedding model, the proposed approach aims to provide more personalized and relevant music recommendations, thus contributing to the advancement of music recommendation systems.
                        <br /><br />The cold start problem comes into play with these recommendation algorithms, and it was a notable problem found in the above algorithms. The "cold start" problem means that when a user first logs in to the system, there is no user history or input for these algorithms to run. This problem has also been addressed by various research projects so far and has many kinds of solutions. For instance [3], the paper "User Profile-Based Recommendation Engine Mitigating the Cold-Start Problem" presented at the 2022 International Conference on Electrical, Computer, Communications, and Mechatronics Engineering proposes a recommendation engine focused on user profiles to address the cold-start problem. By creating user profiles based on demographic and behavioral data, the system aims to provide personalized recommendations even for new users with limited interaction history. The approach contributes to mitigating the challenges associated with the cold-start problem, ultimately enhancing the effectiveness of recommendation systems.
                        <br /><br />Another approach is discussed in Darshna's paper, presented at the 2018 International Conference on Inventive Systems and Control in Coimbatore, India, introduces a music recommendation system that combines content-based and collaborative approaches while addressing the cold-start problem. The system aims to overcome the challenge of providing accurate recommendations for new users with limited interaction history. By integrating both content-based analysis, which evaluates music attributes, and collaborative filtering, which considers user interactions, the system strives to offer personalized recommendations to users of varying familiarity with the platform.
                        <br /><br />On the other hand, one of the major challenges is to accurately extract and identify the accurate data of the user. Up to date, there has been research conducted emphasizing this matter. One of the studies I found has [9] three neural network-based models to detect age, gender, and emotion, respectively, and depending on this combination, a personalized playlist has been suggested. In this case, only those combinations of inputs are sent to the recommender system, and in my research component, we are predicting a user profile at the very beginning, which will be combined with many other inputs like surroundings and voice-based emotion detection to enhance accuracy and personalization.
                        Train human-computer interaction (HCI) is also used to recognize facial emotions in some research [4]. These apps are trained to store sensitive data like ambient conditions, indoor/outdoor temperature, time, status, etc. To this end, the new system works to provide a personalized experience by using scene analysis [7] to find the most appropriate music recommendation based on users’ current surroundings.
                        <br /><br />Moreover, In the realm of human-computer interaction, there's a growing interest in integrating emotion recognition with personalized recommendations. Being able to accurately detect users' emotional states from voice inputs and subsequently provide playlist suggestions tailored to their context holds immense promise in revolutionizing human interactions with technology. This section commences with an introduction to the background and context of voice-based emotion recognition and playlist construction. It then proceeds to delve into a comprehensive literature review, shedding light on significant research contributions, challenges, and existing gaps in the field.
                        The human voice can express emotions through changes in how we speak, like tone and rhythm. Researchers have made progress in recognizing these emotions using methods like Mel-Frequency Cepstral Coefficients (MFCCs), which analyze sound, and deep learning models [9][10]. These studies show that we can tell how someone feels from their speech in real-time.
                        <br /><br />In summary, the literature review reveals a diverse range of approaches and techniques employed in music recommendation systems, emphasizing the significance of considering demographic details, user behavior, content features, and emotional cues to enhance recommendation accuracy and personalization.
                    </p>

                    <br /><br />
                    <h3>References</h3>
                    <p>
                        <ol>
                            <li>
                                J. T. Anthony, G. E. Christian, V. Evanlim, H. Lucky and D. Suhartono, "The Utilization of Content Based Filtering for Spotify Music Recommendation," 2022 International Conference on Informatics Electrical and Electronics (ICIEE), Yogyakarta, Indonesia, 2022, pp. 1-4, doi: 10.1109/ICIEE55596.2022.10010097.
                            </li>
                            <br/>
                            <li>
                                J. Singh, "Collaborative Filtering based Hybrid Music Recommendation System," 2020 3rd International Conference on Intelligent Sustainable Systems (ICISS), Thoothukudi, India, 2020, pp. 186-190, doi: 10.1109/ICISS49785.2020.9315913.
                            </li>
                            <br/>
                            <li>
                                P. Darshna, "Music recommendation based on content and collaborative approach & reducing cold    start problem," 2018 2nd International Conference on Inventive Systems and Control (ICISC), Coimbatore, India, 2018, pp. 1033-1037, doi: 10.1109/ICISC.2018.8398959.
                            </li>
                            <br/>
                            <li>
                                V. P. Sharma, A. S. Gaded, D. Chaudhary, S. Kumar and S. Sharma, "Emotion-Based Music Recommendation System," 2021 9th International Conference on Reliability, Infocom Technologies and Optimization (Trends and Future Directions) (ICRITO), Noida, India, 2021, pp. 1-5, doi: 10.1109/ICRITO51393.2021.9596276.
                            </li>
                            <br/>
                            <li>
                                M. Schedl, D. Hauger, K. Farrahi and M. Tkalčič, "On the Influence of User Characteristics on Music Recommendation Algorithms", Lecture Notes in Computer Science, pp. 339-345, 2015. Available: http://link.springer.com/10.1007/978-3-319-16354-3_37.
                            </li>
                            <br/>
                            <li>
                                L. Jin, D. Yuan and H. Zhang, "Music recommendation based on embedding model with user preference and context," 2017 IEEE 2nd International Conference on Big Data Analysis (ICBDA), Beijing, China, 2017, pp. 688-692, doi: 10.1109/ICBDA.2017.8078723.
                            </li>
                            <br/>
                            <li>
                                Johnson, M., White, E. (2019). "Analyzing Image Texture for Scene Classification." Proceedings of the IEEE International Conference on Computer Vision, 789-802. DOI:
                            </li>
                            <br/>
                            <li>
                                J. G. B. Vitório and C. N. Silla, "Music Recommendation System for Shared Environments," 2023 30th International Conference on Systems, Signals and Image Processing (IWSSIP), Ohrid, North Macedonia, 2023, pp. 1-5, doi: 10.1109/IWSSIP58668.2023.10180270.
                            </li>
                            <br/>
                            <li>
                                J. Jayakumar and P. Supriya, "CNN based Music Recommendation system based on Age, Gender and Emotion," 2022 6th International Conference on Electronics, Communication and Aerospace Technology, Coimbatore, India, 2022, pp. 1356-1359, doi: 10.1109/ICECA55336.2022.10009391.
                            </li>
                            <br/>
                            <li>
                                K. R. Nambiar and S. Palaniswamy, "Speech Emotion Based Music Recommendation," 2022 3rd International Conference for Emerging Technology (INCET), Belgaum, India, 2022, pp. 1-6, doi: 10.1109/INCET54531.2022.9824457.
                            </li>
                        </ol>
                    </p>

                    <a href="/" class="back-button"><i class="bi bi-arrow-left"></i><span>Back</span></a>
                </div>

            </section>

            <Footer/>

        </>
    );
}

export default LiteritureSurvey;
