'use client'
import React, { useEffect, useState } from 'react';

const StickyNav = () => {  
  const [isSticky, setIsSticky] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const [product, setProduct] = useState(false);
  const [collab, setCollab] = useState(false);
  const [security, setSecurity] = useState(false);
  const [product1, setProduct1] = useState(false);
  const [collab1, setCollab1] = useState(false);
  const [security1, setSecurity1] = useState(false);
  const [smallNav, setSmallNav] = useState(false);
  const [activeSection, setActiveSection] = useState(null);


  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('nav');
      const topCoordinate = element?.getBoundingClientRect().top;
      const Product = document.getElementById('productivity');
      const topProduct = Product?.getBoundingClientRect().top;
      const Collab = document.getElementById('collaboration');
      const topCollab = Collab?.getBoundingClientRect().top;
      const Security = document.getElementById('security');
      const topSecurity = Security?.getBoundingClientRect().top;

      if (topCoordinate && topCoordinate < 0) {
        setIsSticky(true);
      }
      if (topCoordinate && topCoordinate < -20) {
        setIsFixed(true);
      }
      if (topCoordinate && topCoordinate > -20) {
        setIsFixed(false);
      }
      if (topCoordinate && topCoordinate > 0) {
        setIsSticky(false);
      }
      if (topProduct && topProduct < 10) {
        setProduct(true);
        setCollab(false);
        setSecurity(false);
      }
      if (topCollab && topCollab < 10) {
        setProduct(false);
        setCollab(true);
        setSecurity(false);
      }
      if (topSecurity && topSecurity < 10) {
        setProduct(false);
        setCollab(false);
        setSecurity(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLinkClick = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setSmallNav(false);
    }
};


  return (
    <div id='nav' className={`absolute h-[100px] z-[3] transition ease-in duration-150 ${isSticky ? "visible": "invisible"}`}>
        <div className=''></div>
        <div className={`w-screen ${isFixed ? "fixed": "sticky"}  py-2 bg-[#0d1117] shadow-slate-950 shadow-md top-0 `}>
            <div className='max-w-[1280px] mx-auto pb-2 lg:pb-3 pt-1 flex lg:px-3 px-12 items-center max-lg:flex-col relative'>
              <button onClick={() => setSmallNav(!smallNav)} className='lg:hidden absolute right-12 top-4'>
                  <svg aria-hidden="true" height="24" fill='currentColor' viewBox="0 0 24 24" version="1.1" width="24" data-view-component="true" className={` text-white ${smallNav ? "hidden": ""}`}>
                      <path d="M5.22 8.22a.749.749 0 0 0 0 1.06l6.25 6.25a.749.749 0 0 0 1.06 0l6.25-6.25a.749.749 0 1 0-1.06-1.06L12 13.939 6.28 8.22a.749.749 0 0 0-1.06 0Z"></path>
                  </svg>
                  <svg aria-hidden="true" height="24" fill='currentColor' viewBox="0 0 24 24" version="1.1" width="24" data-view-component="true" className={` text-white ${smallNav ? "": "hidden"}`}>
                      <path d="M5.72 5.72a.75.75 0 0 1 1.06 0L12 10.94l5.22-5.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L13.06 12l5.22 5.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L12 13.06l-5.22 5.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L10.94 12 5.72 6.78a.75.75 0 0 1 0-1.06Z"></path>
                  </svg>
              </button>
              <div className='flex lg:flex-row flex-col text-[16px] justify-start max-lg:w-full flex-auto lg:space-x-4  text-white'>
                  <a href="#technovanza" onClick={() => handleLinkClick('technovanza')} className={`max-lg:pt-2 ${activeSection === 'technovanza' ? 'lg:text-blue-500': ''} ${activeSection === 'technovanza' || smallNav ? 'lg:text-blue-500 max-lg:pb-6': 'max-lg:hidden'}`}>Technovanza</a>
                  <a href="#pratibimb" onClick={() => handleLinkClick('pratibimb')} className={`max-lg:pt-2 ${activeSection === 'tpratibimb' ? 'lg:text-blue-500': ''} ${activeSection === 'pratibimb' || smallNav ? 'lg:text-blue-500 max-lg:pb-6': 'max-lg:hidden'}`}>Pratibimb</a>

                  <a href="#enthusia" onClick={() => handleLinkClick('enthusia')} className={`max-lg:pt-2 ${activeSection === 'enthusia' ? 'lg:text-blue-500': ''} ${activeSection === 'enthusia' || smallNav ? 'lg:text-blue-500 max-lg:pb-6': 'max-lg:hidden'}`}>Enthusia</a>

<a href="#rangawardhan" onClick={() => handleLinkClick('rangawardhan')} className={`max-lg:pt-2 ${activeSection === 'rangawardhan' ? 'lg:text-blue-500': ''} ${activeSection === 'rangawardhan' || smallNav ? 'lg:text-blue-500 max-lg:pb-6': 'max-lg:hidden'}`}>Rangawardhan</a>

<a href="#ecell" onClick={() => handleLinkClick('ecell')} className={`max-lg:pt-2 ${activeSection === 'ecell' ? 'lg:text-blue-500': ''} ${activeSection === 'ecell' || smallNav ? 'lg:text-blue-500 max-lg:pb-6': 'max-lg:hidden'}`}>E-Cell VJTI</a>

<a href="#digitalvjti" onClick={() => handleLinkClick('digitalvjti')} className={`max-lg:pt-2 ${activeSection === 'digitalvjti' ? 'lg:text-blue-500': ''} ${activeSection === 'digitalvjti' || smallNav ? 'lg:text-blue-500 max-lg:pb-6': 'max-lg:hidden'}`}>Digital VJTI</a>

<a href="#dla" onClick={() => handleLinkClick('dla')} className={`max-lg:pt-2 ${activeSection === 'dla' ? 'lg:text-blue-500': ''} ${activeSection === 'dla' || smallNav ? 'lg:text-blue-500 max-lg:pb-6': 'max-lg:hidden'}`}>DLA VJTI</a>

<a href="#swachhvjti" onClick={() => handleLinkClick('swachhvjti')} className={`max-lg:pt-2 ${activeSection === 'swachhvjti' ? 'lg:text-blue-500': ''} ${activeSection === 'swachhvjti' || smallNav ? 'lg:text-blue-500 max-lg:pb-6': 'max-lg:hidden'}`}>Swachh VJTI</a>

<a href="#contactus" onClick={() => handleLinkClick('contactus')} className={`max-lg:pt-2 ${activeSection === 'contactus' ? 'lg:text-blue-500': ''} ${activeSection === 'contactus' || smallNav ? 'lg:text-blue-500 max-lg:pb-6': 'max-lg:hidden'}`}>Contact Us</a>

              </div>
            </div>
        </div>
    </div>
  )
}

export default StickyNav;
