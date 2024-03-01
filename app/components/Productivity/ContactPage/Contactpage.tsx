import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import HoverCard from '../HoverCard';
import VisibilitySensor from 'react-visibility-sensor';

const ContentDigital = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const onVisibilityChange = (isVisible: boolean) => {
    setIsVisible(isVisible);
  };

  const animationVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <div>
      <h3 style={{ color: 'white', fontSize: '50px', textAlign: 'center', marginTop: '30px', marginBottom: '50px' }}>Contact Us</h3>
      <div style={{ display: 'flex', justifyContent: 'space-around', padding: '0 20px' }}>
        <VisibilitySensor onChange={onVisibilityChange}>
          <HoverCard backgroundColor='' direction='' left='0'>
            <motion.div
              variants={animationVariants}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              style={{ display: 'flex', justifyContent: 'center', padding: '30px', borderRadius: '10px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', margin: '20px' }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Image
                  src="/SarthBora.png"
                  alt="Sarth Bora"
                  width={275}
                  height={275}
                  style={{ objectFit: 'cover', objectPosition: 'center' }}
                />
                <p className='text-white font-medium' style={{ color: 'white', fontSize: '25px', marginTop: '20px' }}>Sarth Bora</p>
                <p style={{ color: 'white', fontSize: '25px', marginTop: '10px' }}>General Secretary</p>
                <p
                  style={{
                    color: 'white',
                    fontSize: '25px',
                    marginTop: '10px',
                    cursor: 'pointer',
                    textDecoration: 'underline',
                  }}
                  onClick={() => window.location.href = 'tel:+919607240724'}
                >
                  +91 96072 40724
                </p>
              </div>
            </motion.div>
          </HoverCard>
        </VisibilitySensor>
        
        <VisibilitySensor onChange={onVisibilityChange}>
          <HoverCard backgroundColor='' direction='' left=''>
            <motion.div
              variants={animationVariants}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{ display: 'flex', justifyContent: 'center', padding: '30px', borderRadius: '10px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', margin: '20px' }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Image
                  src="/ManavYadav.png"
                  alt="Manav Yadav"
                  width={275}
                  height={275}
                  style={{ objectFit: 'cover', objectPosition: 'center' }}
                />
                <p className='text-white font-medium' style={{ color: 'white', fontSize: '25px', marginTop: '20px' }}>Manav Yadav</p>
                <p style={{ color: 'white', fontSize: '25px', marginTop: '10px' }}>Joint General Secretary</p>
                <p
                  style={{
                    color: 'white',
                    fontSize: '25px',
                    marginTop: '10px',
                    cursor: 'pointer',
                    textDecoration: 'underline',
                  }}
                  onClick={() => window.location.href = 'tel:+918108213682'}
                >
                  +91 81082 13682
                </p>
              </div>
            </motion.div>
          </HoverCard>
        </VisibilitySensor>
      </div>
    </div>
  );
};

export default ContentDigital;
