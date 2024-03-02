'use client'
import { motion } from 'framer-motion';
import styled, { keyframes } from 'styled-components';
import React, { useState } from 'react';


const showTopText = keyframes`
  0% { transform: translateY(100%); }
  40%, 60% { transform: translateY(50%); }
  100% { transform: translateY(0); }
`;

const showBottomText = keyframes`
  0% { transform: translateY(-100%); }
  100% { transform: translateY(0); }
`;

const showPhotoFrame = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      delay: 0.2, // Add a slight delay for a stagger effect
      type: 'spring', // Use spring animation for a more dynamic effect
      stiffness: 100,
      damping: 10,
    },
  },
};


const AnimatedTitleWrapper = styled.div`
  color: #FFFFFF;
  font-family: Roboto, Arial, sans-serif;
  height: 90vmin;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 90vmin;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* Adding a subtle shadow */

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: center; /* Center vertically */
    align-items: center; /* Center horizontally */
    height: 50%;
    overflow: hidden;
    position: absolute;
    width: 100%;
}

& > div div {
  padding: 2vmin 0;
  position: absolute;
  animation-duration: 1.5s; /* Increase animation duration */
}

& > div div span {
  display: block;
}

& > div.text-top {
  border-bottom: 1vmin solid #FFFFFF;
  top: calc(50% - 9vmin); /* Adjust the position */
}

& > div.text-top div {
  animation: ${showTopText} 1.5s ease-in-out; /* Use ease-in-out timing function */
  animation-delay: 0.5s;
  animation-fill-mode: forwards;
  bottom: 0;
  transform: translateY(100%);
  font-size: 18vmin; /* Increase the font size of VJTI */
}

& > div.text-top {
  border-bottom: 1vmin solid #FFFFFF;
  bottom: 75%;
  transform: translateY(-75%);
}

& > div.text-bottom {
  bottom: 0;
}

& > div.text-bottom div {
  animation: ${showBottomText} 1.5s ease-in-out; /* Use ease-in-out timing function */
  animation-delay: 1s; /* Adjust animation delay */
  animation-fill-mode: forwards;
  top: 0;
  transform: translateY(-100%);
  font-size: 14vmin; /* Adjust the font size of Social Group */
}
`;


const Hero = () => {

  const [showTextAnimation, setShowTextAnimation] = React.useState(false);

    const scrollToSection = () => {
        const section = document.getElementById('technovanza');
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    

    const handleTextAnimation = () => {
             setShowTextAnimation(true); // Function to trigger text animation
        };

    return (
        <div className="relative">
            <div className="background-video">
                <video autoPlay playsInline muted loop preload="auto" className="video">
                                  <iframe width="560" height="315" src="https://imagekit.io/player/embed/digitalvjti/intro-social.mp4?thumbnail=https%3A%2F%2Fik.imagekit.io%2Fdigitalvjti%2Fintro-social.mp4%2Fik-thumbnail.jpg&updatedAt=1709297576328" title="ImageKit video player" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"> </iframe>

    {/* Provide the correct URL of the video file in the src attribute */}
    {/* <source src="https://imagekit.io/player/embed/digitalvjti/intro-social.mp4?thumbnail=https%3A%2F%2Fik.imagekit.io%2Fdigitalvjti%2Fintro-social.mp4%2Fik-thumbnail.jpg&updatedAt=1709297576328" type="video/mp4" />
    Your browser does not support the video tag. */}
</video>


  <motion.div variants={showPhotoFrame} initial="hidden" animate="visible" className="photo-frame"  style={{ width: '450px', height: '250px', border: '2px solid black', overflow: 'hidden', position: 'absolute', top: '10px', left: '10px' }}>
    <img src="enthuimg.jpeg" alt="Photo 1" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
    </motion.div>
  <motion.div variants={showPhotoFrame} initial="hidden" animate="visible" className="photo-frame" style={{ width: '350px', height: '250px', border: '2px solid black', overflow: 'hidden', position: 'absolute', top: '270px', left: '320px' }}>
    <img src="dlaimg.jpeg" alt="Photo 2" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
    </motion.div>
  <motion.div variants={showPhotoFrame} initial="hidden" animate="visible" className="photo-frame" style={{ width: '200px', height: '250px', border: '2px solid black', overflow: 'hidden', position: 'absolute', top: '10px', left: '470px' }}>
    <img src="ecellimg.jpeg" alt="Photo 3" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
    </motion.div>
  <motion.div variants={showPhotoFrame} initial="hidden" animate="visible" className="photo-frame" style={{ width: '300px', height: '445px', border: '2px solid black', overflow: 'hidden', position: 'absolute', top: '270px', left: '10px' }}>
    <img src="pratiimg.jpeg" alt="Photo 4" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
    </motion.div>
  <motion.div variants={showPhotoFrame} initial="hidden" animate="visible" className="photo-frame" style={{ width: '250px', height: '350px', border: '2px solid black', overflow: 'hidden', position: 'absolute', top: '10px', left: '680px' }}>
    <img src="pratipaytm.jpeg" alt="Photo 5" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
    </motion.div>
  <motion.div variants={showPhotoFrame} initial="hidden" animate="visible" className="photo-frame" style={{ width: '300px', height: '200px', border: '2px solid black', overflow: 'hidden', position: 'absolute', top: '10px', left: '940px' }}>
    <img src="pinklights.jpeg" alt="Photo 6" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
    </motion.div>
  <motion.div variants={showPhotoFrame} initial="hidden" animate="visible" className="photo-frame" style={{ width: '200px', height: '300px', border: '2px solid black', overflow: 'hidden', position: 'absolute', top: '220px', left: '940px' }}>
    <img src="" alt="Photo 7" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
    </motion.div>
  <motion.div variants={showPhotoFrame} initial="hidden" animate="visible" className="photo-frame" style={{ width: '540px', height: '180px', border: '2px solid black', overflow: 'hidden', position: 'absolute', top: '530px', left: '940px' }}>
    <img src="sabali.jpeg" alt="Photo 8" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
    </motion.div>
  <motion.div variants={showPhotoFrame} initial="hidden" animate="visible" className="photo-frame" style={{ width: '350px', height: '180px', border: '2px solid black', overflow: 'hidden', position: 'absolute', top: '530px', left: '320px' }}>
    <img src="rangaimg2.jpeg" alt="Photo 2" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
    </motion.div>
  <motion.div variants={showPhotoFrame} initial="hidden" animate="visible" className="photo-frame" style={{ width: '250px', height: '340px', border: '2px solid black', overflow: 'hidden', position: 'absolute', top: '370px', left: '680px' }}>
    <img src="photo5.jpg" alt="Photo 5" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
    </motion.div>
  <motion.div variants={showPhotoFrame} initial="hidden" animate="visible" className="photo-frame" style={{ width: '330px', height: '300px', border: '2px solid black', overflow: 'hidden', position: 'absolute', top: '220px', right: '10px' }}>
    <img src="rangaimg.jpeg" alt="Photo 7" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
    </motion.div>
  <motion.div variants={showPhotoFrame} initial="hidden" animate="visible" className="photo-frame" style={{ width: '230px', height: '200px', border: '2px solid black', overflow: 'hidden', position: 'absolute', top: '10px', right: '10px' }}>
    <img src="swachhimg.jpeg" alt="Photo 6" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
    </motion.div>



                <div className="overlay">
                    <div className="content">
                    <AnimatedTitleWrapper>
  <div className="text-top">
    <div style={{ fontFamily: 'Arial, sans-serif', fontSize: '120px', fontWeight: 'bold', letterSpacing: '1px', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', WebkitTextStroke: '2px white' }}>
      <span style={{ color: '#FFFFFF' }}>VJTI</span>
    </div>
  </div>
  <div className="text-bottom">
    <div style={{ fontFamily: 'Arial, sans-serif', fontSize: '100px', letterSpacing: '0.5px', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', WebkitTextStroke: '2px white' }}>
      <span style={{ color: '#FFFFFF' }}>Social Group</span>
    </div>
  </div>
</AnimatedTitleWrapper>



                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.5, duration: 1 }}
                            className="scroll-down"
                            onClick={scrollToSection}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 md:h-8 md:w-8 lg:h-10 lg:w-10 xl:h-12 xl:w-12 cursor-pointer"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                            </svg>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
