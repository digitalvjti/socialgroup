'use client'
import React from 'react';
import { motion } from 'framer-motion';
import styled, { keyframes } from 'styled-components';

const showTopText = keyframes`
  0% { transform: translateY(100%); }
  40%, 60% { transform: translateY(50%); }
  100% { transform: translateY(0); }
`;

const showBottomText = keyframes`
  0% { transform: translateY(-100%); }
  100% { transform: translateY(0); }
`;

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
    top: 0;
  }

  & > div.text-top div {
    animation: ${showTopText} 1.5s ease-in-out; /* Use ease-in-out timing function */
    animation-delay: 0.5s;
    animation-fill-mode: forwards;
    bottom: 0;
    transform: translateY(100%);
    font-size: 18vmin; /* Increase the font size of VJTI */
  }

  & > div.text-top div span:first-child {
    color: #FFFFFF;
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
    const scrollToSection = () => {
        const section = document.getElementById('technovanza');
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="relative">
            <div className="background-video">
                <video autoPlay playsInline muted loop preload="auto" className="video">
                    <source src="/video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="overlay">
                    <div className="content">
                        <AnimatedTitleWrapper>
                            <div className="text-top">
                                <div>                                                
                                    <span>VJTI</span>
                                </div>
                            </div>
                            <div className="text-bottom">
                                <div>Social Group</div>
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
