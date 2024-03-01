// GoogleMapsEmbed.tsx

import React from 'react';

interface GoogleMapsProps {
  src: string;
  width: number;
  height: number;
}

const GoogleMapsEmbed: React.FC<GoogleMapsProps> = ({ src, width, height }) => {

  return (
    <iframe
      title="Google Maps"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.943343382072!2d72.85354627509902!3d19.022218082171367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cf26f4972d21%3A0x2c50185364aca4c1!2sVeermata%20Jijabai%20Technological%20Institute%20VJTI!5e0!3m2!1sen!2sin!4v1703269039274!5m2!1sen!2sin" 
      width={width}
      height={height}
      style={{ border: 0, marginLeft: '100px'  }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
};

export default GoogleMapsEmbed;