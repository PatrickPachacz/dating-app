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
        <img src="https://cdn.pixabay.com/photo/2018/11/06/14/01/couple-3798371_1280.jpg" className="imageHome" alt="background" />
    </div>

    <Container maxW='xl' centerContent>
      <Box
        d='flex'
        justifyContent="center"
        p={3}
        bg={'white'}
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
      >
        <Text fontSize="4x1" fontFamily="Work sans">Passportmatch</Text>
      </Box>
      <Box bg="white" w="100%" p={4} borderRadius="lg" color="black" borderWidth="1px">
        <Tabs variant='soft-rounded' colorScheme='green'>
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

    <div class="app-info">
                <h2>About the App</h2>
                <p>Our app is designed to help users find their match accross the globe. It works by allowing you to create a profile where you can upload a video about yourself that highlights your interests, hobbies, and personality traits. You can also search for other users based on their country and age.</p>
                <h3>Features</h3>
                    <ul>
                        <li>Video Upload: Feature within the profile page allows you to get to know your matches better before meeting in person</li>
                        <li>Real-Time Messaging: Allows users to communicate with one another on the app. This could be a useful feature for those who are hesitant to meet up in person or those in long-distance relationships</li>
                        <li>Search Method: Ability to search users via age and country of origin</li>
                    </ul>
                <h3>Differences from other dating apps</h3>
                <p>Compatibility-based matching: Instead of just relying on swiping and basic profile information, Passportmatch allows its users to upload a video of themselves to provide potential matches a better view of your personality traits, interests, and values. This could lead to more meaningful matches and more successful relationships.</p>
                <h3>Message Board</h3>
                <p>We are currently developing a message board where users can post anything they desire for other users to see, based on the continental region</p>
            </div>

            <section class="testimonials">
                <h2>What Our Users Say</h2>
                <div class="testimonial-container">
                    <div class="testimonial">
                    <img className="testImg" src="https://media.istockphoto.com/id/806165312/es/foto/feliz-pareja-caminando-y-hablando-en-el-campo.jpg?s=612x612&w=0&k=20&c=SfmB1gz5C9vD6Gcku02QC6xaGMlNtXFkDtU_JBsKre8=" alt="test" />
                    <h1>USA - Thailand</h1>
                    <p>"I met my current wife after years of no success in previous relationships. Amara showed me a whole new world. Despite the cultural barriers in the beginning, we have learned so much together."</p>
                    <h4>Billy Sullivan - Amara</h4>
                    </div>
                    <div class="testimonial">
                    <img className="testImg" src="https://images.unsplash.com/photo-1501631259223-89d4e246ed23?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aGlzcGFuaWMlMjBjb3VwbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60" alt="test"/>
                    <h1>Argentina - Germany</h1>
                    <p>"This app has been a game changer for me. After going back and forth for some time between our two countries, I ultimately decided to settle near her home. We have the option to move together to Europe. It may not have been so easy at first, but I am much happier here in Argentina where we are finally together."</p>
                    <h4>Daniel - Mercedes</h4>
                    </div>
                    <div class="testimonial">
                    <img className="testImg" src="https://image-tc.galaxy.tf/wijpeg-ajhl1elx873ldtubcxr6a9nj4/bushmans-nek-couple-s-getaway_standard.jpg?crop=160%2C0%2C1600%2C1200&width=1800" alt="test"/>
                    <h1>England - South Africa</h1>
                    <p>"I was in a part of my life where I was successful in everything but love. I have traveled around the world regularly and finally found my someone. She is everything I look for in a true companion and the intial challenges we faced only made us stronger."</p>
                    <h4>Henry</h4>
                    </div>
                </div>
            </section>

            <section className="imgCoupleSitting">
                <img src="https://cdn.pixabay.com/photo/2018/05/30/15/31/globe-3441673_1280.jpg" alt="couple" className="imgCoupleSitting" />
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
