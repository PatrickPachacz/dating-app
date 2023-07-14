import React, { useEffect } from 'react';
import { Container, Box, Text, Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import Login from '../components/Auth/Login';
import Signup from '../components/Auth/Signup';
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user) navigate("/dashboard");
  }, [navigate]);

  return (

    <main className="image-container">
    <div className="imageWrapper">
        <img src="./images/sunset.jpg" className="imageHome" alt="background" />
    </div>

    <Container maxW='xl' centerContent>
      <Box
        d='flex'
        justifyContent="center"
        p={5}
        bg={'black'}
        color="white"
        w="100%"
        m="40px 0 20px 0"
        borderRadius="lg"
        borderWidth="1px"
      >
        <Text fontSize="4x1" fontFamily="Work sans">International Date</Text>
      </Box>
      <Box bg="white" w="100%" p={4} borderRadius="lg" color="white" background="black" borderWidth="1px" m="0 0 260px 0">
        <Tabs variant='soft-rounded' colorScheme='orange'>
          <TabList mb="1em">
            <Tab width="50%">Login</Tab>
            <Tab width="50%">Sign up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>

    <div className="app-info">
        <div className="couple-image-container">
          <img src="./images/coupleimage.jpeg" alt="Couple" className="couple-image" />
        </div>
        <div className="video-and-text-container">
          <video src="./images/globe.mp4" className="videoGlobe" autoPlay loop muted></video>
          <div className="text-container">
            <h2>Grab your passport</h2>
            <h3>Looking for someone, somewhere? Let us help you...</h3>
          </div>
        </div>
        <ul className="video-description-list">
          <li>
            <video src="./images/watchvideo.mp4" className="videoHome" autoPlay loop muted></video>
            <p>Video Upload: Sometimes a photo is just not enough</p>
          </li>
          <li>
            <video src="./images/messagevideo.mp4" className="videoHome" autoPlay loop muted></video>
            <p>Real-Time Messaging: Initiate the dialogue</p>
          </li>
          <li>
            <video src="./images/searchvideo.mp4" className="videoHome" autoPlay loop muted></video>
            <p>Find your match based on your criteria</p>
          </li>
        </ul>
      </div>

            <section class="testimonials">
                <h2>What Our Users Say</h2>
                <div class="testimonial-container">
                    <div class="testimonial">
                    <img className="testImg" src="./images/testimonial1.jpg" alt="test" />
                    <h1 className="testh1">USA - Thailand</h1>
                    <p>"I met my current wife after years of no success in previous relationships. Amara showed me a whole new world. Despite the cultural barriers in the beginning, we have learned so much together."</p>
                    <h4>Billy Sullivan - Amara</h4>
                    </div>
                    <div class="testimonial">
                    <img className="testImg" src="./images/testimonial2.jpg" alt="test"/>
                    <h1 className="testh1">Argentina - Germany</h1>
                    <p>"This app has been a game changer for me. After going back and forth for some time between our two countries, I ultimately decided to settle near her home. We have the option to move together to Europe. It may not have been so easy at first, but I am much happier here in Argentina where we are finally together."</p>
                    <h4>Daniel - Mercedes</h4>
                    </div>
                    <div class="testimonial">
                    <img className="testImg" src="./images/testimonial3.jpg" alt="test"/>
                    <h1 className="testh1">England - South Africa</h1>
                    <p>"I was in a part of my life where I was successful in everything but love. I have traveled around the world regularly and finally found my someone. She is everything I look for in a true companion and the intial challenges we faced only made us stronger."</p>
                    <h4>Henry</h4>
                    </div>
                </div>
            </section>

            <section className="couple-sitting-container">
              <img src="./images/purpleimage.jpg" alt="couple" className="imgCoupleSitting" />
              <div className="download-now-container">
              <div className="download-now">
              <p>Download Now</p>
              <div className="blank-box"></div> {/* Replace with Google Play logo */}
              </div>
              </div>
            </section>

            <section class="social-media">
                <a href="https://www.facebook.com/yourpage" rel="noopener noreferrer" target="_blank">
                    <img width="50" height="50" viewBox="0 0 24 24" fill="none" src="https://cdn.iconscout.com/icon/free/png-256/facebook-social-media-fb-logo-square-44659.png" alt="couple"/>
                </a>
                <a href="https://www.youtube.com/channel/yourchannel" rel="noopener noreferrer" target="_blank">
                    <img width="50" height="50" viewBox="0 0 24 24" fill="none" src="https://cdn.iconscout.com/icon/free/png-256/youtube-1464540-1239451.png" alt="couple"/>
                </a>
                <a href="https://www.tiktok.com/@yourhandle" rel="noopener noreferrer" target="_blank">
                    <img width="50" height="50" viewBox="0 0 24 24" fill="none" src="https://cdn.iconscout.com/icon/free/png-256/tiktok-2270636-1891163.png" alt="couple"/>
                </a>
                <a href="https://www.instagram.com/yourpage" rel="noopener noreferrer" target="_blank">
                    <img width="50" height="50" viewBox="0 0 24 24" fill="none" src="https://cdn.iconscout.com/icon/free/png-256/instagram-86-433323.png" alt="couple"/> 
                </a>
            
            </section>

    </main>
  );
};

export default Home;
