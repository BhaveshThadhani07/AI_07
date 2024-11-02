<?php
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AINexus</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
</head>

<body>

    <?php include '../../partials/_navbar/navbar.php'; ?>

    <div class="container">
        <header>
            <h1>Resource Library</h1>
            <h5 class="py-3">Explore a curated list of useful videos, articles, courses, & tools to enhance your learning journey.</h5>
        </header>

        <!-- YOUTUBE -->
        <section id="youtube">
            <h2>YouTube</h2>
            <div class="card-container">
                <!-- Example of a resource card -->
                <!-- YOUTUBE -->
                <div class="card">
                    <!-- YT-videos -->
                    <div class="sub-card">
                        <!-- YT-videos-box -->
                        <div class="box">
                            <h5>Videos</h5>
                            <img src="../../assets/resource-library/down-arrow.svg" alt="" height="20px" width="20px">
                        </div>
                        <!-- YT-videos-content -->
                        <div class="content" style="display: none;">
                            <ol>
                                <!-- 1 -->
                                <li>
                                    <h6>MIT 6.S191: Introduction to Deep Learning (2023) - Full Lecture</h6>
                                </li>
                                <a href="https://www.youtube.com/watch?v=ErnWZxJovaM&list=PLtBw6njQRU-rwp5__7C0oIVt26ZgjG9NI&index=1" target="_blank" style="margin: 0;">https://www.youtube.com/watch?v=ErnWZxJovaM&list=PLtBw6njQRU-rwp5__7C0oIVt26ZgjG9NI&index=1</a>
                                <p> Duration: 1 hour 10 minutes</p>
                                <p>A full lecture from MIT’s popular deep learning course, covering the basics of neural networks, deep learning, and current trends in AI.</p>

                                <!-- 2 -->
                                <li>
                                    <h6>DeepMind's AlphaGo - The Movie</h6>
                                </li>
                                <a href="https://www.youtube.com/watch?v=WXuK6gekU1Y" target="_blank" style="margin: 0;">https://www.youtube.com/watch?v=WXuK6gekU1Ylist=PLtBw6njQRU-rwp5__7C0oIVt26ZgjG9NI&index=1</a>
                                <p> Duration: 1 hour 30 minutes</p>
                                <p> An insightful documentary about how DeepMind created AlphaGo, the first AI program to beat a world champion in the game of Go, and the impact of this achievement.</p>

                                <!-- 3 -->
                                <li>
                                    <h6>Artificial Intelligence Full Course in Hindi | Great Learning</h6>
                                </li>
                                <a href="https://www.youtube.com/watch?v=opgTF9Yf3Dk" target="_blank" style="margin: 0;">https://www.youtube.com/watch?v=opgTF9Yf3Dk</a>
                                <p> Duration: 1hr. 10min.s</p>
                                <p> A comprehensive AI course in Hindi, covering AI, machine learning, neural networks, and natural language processing for beginners.</p>

                                <!-- 4 -->
                                <li>
                                    <h6>Artificial Intelligence Course in Hindi | Simplilearn</h6>
                                </li>
                                <a href="https://www.youtube.com/watch?v=JonnQuQDThc" target="_blank" style="margin: 0;">https://www.youtube.com/watch?v=JonnQuQDThc</a>
                                <p> Duration: 10hours 50minutes</p>
                                <p> This course by Simplilearn introduces AI concepts, applications, and technologies, ideal for beginners who want a thorough understanding.</p>

                                <!-- 5 -->
                                <li>
                                    <h6>Deep Learning Full Course in Hindi | Edureka</h6>
                                </li>
                                <a href="https://www.youtube.com/watch?v=DooxDIRAkPA" target="_blank" style="margin: 0;">https://www.youtube.com/watch?v=DooxDIRAkPA</a>
                                <p> Duration: 4hours</p>
                                <p> Covers deep learning, neural networks, and popular frameworks like TensorFlow and Keras, all explained in Hindi.</p>
                            </ol>

                        </div>
                    </div>

                    <!-- YT-playlists -->
                    <div class="sub-card">
                        <!-- YT-videos-box -->
                        <div class="box">
                            <h5>Playlists</h5>
                            <img src="../../assets/resource-library/down-arrow.svg" alt="" height="20px" width="20px">
                        </div>
                        <!-- YT-videos-content -->
                        <div class="content" style="display: none;">
                            <ol>
                                <!-- 1 -->
                                <li>
                                    <h6>Deep Learning Specialization – Andrew Ng</h6>
                                </li>
                                <a href="https://www.youtube.com/playlist?list=PLkDaE6sCZn6Ec-XTbcX1uRg2_u4xOEky0" target="_blank" style="margin: 0;">https://www.youtube.com/playlist?list=PLkDaE6sCZn6Ec-XTbcX1uRg2_u4xOEky0</a>
                                <p> A comprehensive series covering everything from neural networks to convolutional networks.</p>

                                <!-- 2 -->
                                <li>
                                    <h6>Machine Learning Full Course – freeCodeCamp</h6>
                                </li>
                                <a href="https://www.youtube.com/playlist?list=PLWKjhJtqVAblStefaz_YOVpDWqcRScc2s" target="_blank" style="margin: 0;">https://www.youtube.com/playlist?list=PLWKjhJtqVAblStefaz_YOVpDWqcRScc2s</a>
                                <p> A full course on machine learning, including data science essentials.</p>

                                <!-- 3 -->
                                <li>
                                    <h6>Data Science & Machine Learning | Krish Naik</h6>
                                </li>
                                <a href="https://www.youtube.com/playlist?list=PLTDARY42LDV7WGmlzZtY-w9pemyPrKNUZ" target="_blank" style="margin: 0;">https://www.youtube.com/playlist?list=PLTDARY42LDV7WGmlzZtY-w9pemyPrKNUZ</a>
                                <p> Covers everything from data science fundamentals to machine learning algorithms.</p>

                                <!-- 4 -->
                                <li>
                                    <h6>Python for Data Science and Machine Learning – Dhaval Patel</h6>
                                </li>
                                <a href="https://www.youtube.com/playlist?list=PLeo1K3hjS3us_ELKYSj_Fth2tIEkdKXvV" target="_blank" style="margin: 0;">https://www.youtube.com/playlist?list=PLeo1K3hjS3us_ELKYSj_Fth2tIEkdKXvV</a>
                                <p> An introduction to data science, machine learning, and deep learning using Python.</p>

                                <!-- 5 -->
                                <li>
                                    <h6>Machine Learning Crash Course in Hindi – Edureka</h6>
                                </li>
                                <a href="https://www.youtube.com/playlist?list=PL9ooVrP1hQOHUfd-g8GUpKI3hHOwM_9Dn" target="_blank" style="margin: 0;">https://www.youtube.com/playlist?list=PL9ooVrP1hQOHUfd-g8GUpKI3hHOwM_9Dn</a>
                                <p> A beginner-friendly machine learning playlist that covers concepts like regression, classification, etc.
                                </p>
                            </ol>

                        </div>
                    </div>

                    <!-- YT-channels -->
                    <div class="sub-card">
                        <!-- YT-channels-box -->
                        <div class="box">
                            <h5>Channels</h5>
                            <img src="../../assets/resource-library/down-arrow.svg" alt="" height="20px" width="20px">
                        </div>
                        <!-- YT-channels-content -->
                        <div class="content" style="display: none;">
                            <ol>
                                <!-- 1 -->
                                <li>
                                    <h6>3Blue1Brown</h6>
                                </li>
                                <a href="https://www.youtube.com/@3blue1brown" target="_blank" style="margin: 0;">https://www.youtube.com/@3blue1brown</a>
                                <p> Known for intuitive and visually captivating explanations, 3Blue1Brown covers a wide range of topics in mathematics, including neural networks and machine learning foundations.</p>

                                <!-- 2 -->
                                <li>
                                    <h6>Two Minute Papers</h6>
                                </li>
                                <a href="https://www.youtube.com/@TwoMinutePapers" target="_blank" style="margin: 0;">https://www.youtube.com/@TwoMinutePapers</a>
                                <p> Provides concise summaries of recent AI research papers, making it easy to keep up with cutting-edge developments in AI.</p>

                                <!-- 3 -->
                                <li>
                                    <h6>CodeWithHarry</h6>
                                </li>
                                <a href="https://www.youtube.com/c/CodeWithHarry" target="_blank" style="margin: 0;">https://www.youtube.com/c/CodeWithHarry</a>
                                <p> Covers various programming and tech topics, including AI and machine learning. CodeWithHarry is known for his beginner-friendly explanations, making AI accessible to Hindi-speaking audiences.</p>

                                <!-- 4 -->
                                <li>
                                    <h6>Krish Naik</h6>
                                </li>
                                <a href="https://www.youtube.com/@krishnaik06" target="_blank" style="margin: 0;">https://www.youtube.com/@krishnaik06</a>
                                <p> Krish is a data scientist who provides in-depth tutorials on machine learning, AI, and data science in Hindi, with practical examples and explanations.</p>

                                <!-- 5 -->
                                <li>
                                    <h6>Great Learning</h6>
                                </li>
                                <a href="https://www.youtube.com/@greatlearning" target="_blank" style="margin: 0;">https://www.youtube.com/@greatlearning</a>
                                <p> Great Learning's Hindi channel covers AI, machine learning, and data science topics with detailed explanations and hands-on coding tutorials.
                                </p>
                            </ol>

                        </div>
                    </div>

                    <button class="download-btn" onclick="downloadPDF()">Download Full Resources (PDF)</button>
                </div>
                <!-- Repeat cards as needed -->
            </div>
        </section>

        <!-- WEBSITES - ARTICLES & BLOGS -->
        <section id="website-articlesBlogs">
            <h2>Website - Articles & Blogs</h2>
            <div class="card-container">
                <!-- Example of a resource card -->
                <!-- ARTICLES & BLOGS -->
                <div class="card">
                    <!-- Articles -->
                    <div class="sub-card">
                        <!-- Articles-box -->
                        <div class="box">
                            <h5>Articles</h5>
                            <img src="../../assets/resource-library/down-arrow.svg" alt="" height="20px" width="20px">
                        </div>
                        <!-- Articles-content -->
                        <div class="content" style="display: none;">
                            <ol>
                                <!-- 1 -->
                                <li>
                                    <h6>MIT Sloan</h6>
                                </li>
                                <a href="https://sloanreview.mit.edu/" target="_blank" style="margin: 0;">https://sloanreview.mit.edu/</a>

                                <!-- 2 -->
                                <li>
                                    <h6>Towards Data Science</h6>
                                </li>
                                <a href="https://towardsdatascience.com/" target="_blank" style="margin: 0;">https://towardsdatascience.com/</a>

                                <!-- 3 -->
                                <li>
                                    <h6>MIT Technology Review (AI Section)</h6>
                                </li>
                                <a href="https://www.technologyreview.com/topic/artificial-intelligence/" target="_blank" style="margin: 0;">https://www.technologyreview.com/topic/artificial-intelligence/</a>

                                <!-- 4 -->
                                <li>
                                    <h6>Medium (Artificial Intelligence Tag)</h6>
                                </li>
                                <a href="https://medium.com/tag/artificial-intelligence" target="_blank" style="margin: 0;">https://medium.com/tag/artificial-intelligence</a>

                                <!-- 5 -->
                                <li>
                                    <h6>Harvard Business Review (AI)</h6>
                                </li>
                                <a href="https://hbr.org/topic/subject/ai-and-machine-learning" target="_blank" style="margin: 0;">https://hbr.org/topic/subject/ai-and-machine-learning</a>
                            </ol>

                        </div>
                    </div>

                    <!-- Blogs -->
                    <div class="sub-card">
                        <!-- Blogs-box -->
                        <div class="box">
                            <h5>Blogs</h5>
                            <img src="../../assets/resource-library/down-arrow.svg" alt="" height="20px" width="20px">
                        </div>
                        <!-- Blog-content -->
                        <div class="content" style="display: none;">
                            <ol>
                                <!-- 1 -->
                                <li>
                                    <h6>OpenAI Blog</h6>
                                </li>
                                <a href="https://openai.com/news/" target="_blank" style="margin: 0;">https://openai.com/news/</a>

                                <!-- 2 -->
                                <li>
                                    <h6>Hugging Face Blog</h6>
                                </li>
                                <a href="https://huggingface.co/blog" target="_blank" style="margin: 0;">https://huggingface.co/blog</a>

                                <!-- 3 -->
                                <li>
                                    <h6>Andrej Karpathy's Blog</h6>
                                </li>
                                <a href="https://karpathy.github.io/" target="_blank" style="margin: 0;">https://karpathy.github.io/</a>

                                <!-- 4 -->
                                <li>
                                    <h6>Google AI Blog</h6>
                                </li>
                                <a href="https://ai.google/discover/blogs/" target="_blank" style="margin: 0;">https://ai.google/discover/blogs/</a>

                                <!-- 5 -->
                                <li>
                                    <h6>Microsoft AI Blog</h6>
                                </li>
                                <a href="https://www.microsoft.com/en-us/ai/blog/" target="_blank" style="margin: 0;">https://www.microsoft.com/en-us/ai/blog/</a>
                            </ol>

                        </div>
                    </div>

                    <button class="download-btn" onclick="downloadPDF()">Download Full Resources (PDF)</button>
                </div>
                <!-- Repeat cards as needed -->
            </div>
        </section>

        <!-- COURSES -->
        <section id="courses">
            <h2>Courses</h2>
            <div class="card-container">
                <!-- Example of a resource card -->
                <!-- ARTICLES & BLOGS -->
                <div class="card">
                    <!-- Articles -->
                    <div class="sub-card">
                        <!-- Articles-box -->
                        <div class="box">
                            <h5>Paid</h5>
                            <img src="../../assets/resource-library/down-arrow.svg" alt="" height="20px" width="20px">
                        </div>
                        <!-- Paid-content -->
                        <div class="content" style="display: none;">
                            <ol>
                                <!-- 1 -->
                                <li>
                                    <h6>Machine Learning by Andrew Ng (Coursera)</h6>
                                </li>
                                <a href="https://www.coursera.org/specializations/machine-learning-introduction?utm_medium=sem&utm_source=gg&utm_campaign=b2c_india_machine-learning-introduction_stanford-deeplearning.ai_ftcof_specializations_arte_sep-23_dr_sem_rsa_gads_lg-all&campaignid=20594446971&adgroupid=161332312026&device=c&keyword=machine%20learning%20by%20andrew%20ng%20coursera&matchtype=p&network=g&devicemodel=&adposition=&creativeid=698085043093&hide_mobile_promo&gad_source=1&gclid=Cj0KCQjwm5e5BhCWARIsANwm06jMnVR39aLtwRGBMT4FXiX42shoKSABb2v0TKG9RKl6_aDwVRR2GFcaAtaBEALw_wcB" target="_blank" style="margin: 0;">Course Link</a>
                                <p>Provider: Stanford University (offered through Coursera) <br>
                                    Description: This is a highly recommended foundational course that covers machine learning algorithms, supervised and unsupervised learning, best practices, and real-world applications. Andrew Ng’s clear explanations make it beginner-friendly while still providing depth. <br>
                                    Duration: 11 weeks (about 5-7 hours per week)</p>

                                <!-- 2 -->
                                <li>
                                    <h6>Deep Learning Specialization (Coursera)</h6>
                                </li>
                                <a href="https://towardsdatascience.com/" target="_blank" style="margin: 0;">Course Link</a>
                                <p>Provider: DeepLearning.AI (offered through Coursera) <br>
                                Description: This five-course specialization dives into deep learning concepts such as neural networks, convolutional networks, and sequence models. It’s hands-on and suitable for those who have a basic understanding of machine learning and Python. <br>
                                Duration: 3-4 months (about 5-6 hours per week)</p>

                                <!-- 3 -->
                                <li>
                                    <h6>AI for Everyone (Coursera)</h6>
                                </li>
                                <a href="https://www.coursera.org/learn/generative-ai-for-everyone?irgwc=1&utm_medium=partners&utm_source=impact&utm_campaign=2985301&utm_content=b2c&gad_source=1&irclickid=Xy-3CRRTWxyKRpL2aKVsa1OLUkCWeLxUZ2I0040" target="_blank" style="margin: 0;">Course Link</a>
                                <p>Provider: DeepLearning.AI (offered through Coursera) <br>
                                Description: This course provides a non-technical overview of AI, explaining its applications, limitations, and potential impacts. It’s designed for business professionals, entrepreneurs, or anyone interested in understanding AI’s potential in various industries. <br>
                                Duration: 4 weeks (about 2-3 hours per week)</p>

                                <!-- 4 -->
                                <li>
                                    <h6>Artificial Intelligence: Principles and Techniques (edX)</h6>
                                </li>
                                <a href="https://www.edx.org/learn/artificial-intelligence" target="_blank" style="margin: 0;">Course Link</a>
                                <p>Provider: Stanford University (offered through edX)<br>
                                Description: A rigorous course covering AI principles, including logic, planning, and decision-making. It’s suitable for students with a strong foundation in math and computer science, aiming to learn about the fundamentals of AI. <br>
                                Duration: 11 weeks (about 10-15 hours per week)</p>

                                <!-- 5 -->
                                <li>
                                    <h6>Applied Data Science with Python Specialization (Coursera)</h6>
                                </li>
                                <a href="https://www.coursera.org/specializations/data-science-python?c_correlation_id=a771de05d8754c478861a7678e3fb71f&c_tenant_id=src_1kYsAcdpfzbZ8UlNLYht1RPg3m2&irgwc=1&utm_medium=partners&utm_source=impact&utm_campaign=2985301&utm_content=b2c&gad_source=1" target="_blank" style="margin: 0;">Course Link</a>
                                <p>Provider: University of Michigan (offered through Coursera)<br>
                                Description: While focused on data science, this course provides valuable training in machine learning and AI. It includes hands-on projects in data visualization, machine learning, and text analysis using Python, preparing students for practical AI applications.<br>
                                Duration: 5 months (about 4 hours per week)</p>
                            </ol>
                        </div>
                    </div>

                    <!-- Free -->
                    <div class="sub-card">
                        <!-- Free-box -->
                        <div class="box">
                            <h5>Free</h5>
                            <img src="../../assets/resource-library/down-arrow.svg" alt="" height="20px" width="20px">
                        </div>
                        <!-- Free-content -->
                        <div class="content" style="display: none;">
                            <ol>
                                <button class="download-btn" onclick="downloadPDF()">Subscribe to get Top Free AI Courses</button>
                            </ol>

                        </div>
                    </div>

                    <button class="download-btn" onclick="downloadPDF()">Download Full Resources (PDF)</button>
                </div>
                <!-- Repeat cards as needed -->
            </div>
        </section>

        
        <!-- AI TOOLS -->
        <section id="aiTools">
            <h2>AI Tools</h2>
            <div class="card-container">
                <!-- Example of a resource card -->
                <!-- AI Tools -->
                <div class="card">
                    <!-- Premium PDF Btn - AI Tools -->
                    <button class="download-btn" onclick="downloadPDF()">Access the PDF to get to know about Top AI Tools like ChatGPT, Midjourney, & more ...</button>
                </div>
                <!-- Repeat cards as needed -->
            </div>
        </section>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
    <script src="script.js"></script>
</body>

</html>