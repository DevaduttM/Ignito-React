import { motion } from "framer-motion";
import './navbar.css'
import { Link } from "react-router-dom"
import React, { useState, useEffect } from 'react';

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 700);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return isMobile;
};

const navbarItems = [
    { name: "Home", linkTo: "/" , icon: <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 0 0-44.4 0L77.5 505a63.9 63.9 0 0 0-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0 0 18.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z"></path></svg>},
    { name: "Events", linkTo: "/events", icon: <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M247 28v80h18V28zm35 0v64l80-32zm-26 96c-48 48-144 112-192 128 0 64-16 208-32 240h160c16-16 64-144 64-192 0 48 48 176 64 192h160c-16-32-32-176-32-240-48-16-144-80-192-128zM112 300h80v80h-80z"></path></svg> },
    
    { name: "Contact", linkTo: "/contact", icon: <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M19 7h5v2h-5V7zm-2 5h7v2h-7v-2zm3 5h4v2h-4v-2zM2 22a8 8 0 1 1 16 0h-2a6 6 0 1 0-12 0H2zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z"></path></g></svg>},
  ];

const navbar = () => {
  const isMobile = useIsMobile();
  return (
    <div className="navcontainer">
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={navbarVariants}
    >
      {navbarItems.map((item, index) => (
        <motion.a
          key={index}
          href={item.linkTo}
          variants={itemVariants}
          transition={{
            delay: index * 0.2, 
            duration: 0.5, 
            ease: "easeInOut",
          }}
          className="navbar-item"
        >
          {isMobile ? item.icon : item.name}
          {/* {item.name}
          {item.icon} */}
        </motion.a>
      ))}
    </motion.nav>
    </div>
  );
};

const navbarVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: -20 }, 
  visible: { opacity: 1, y: 0 }, 
};

export default navbar;
