import { motion } from "framer-motion";
import React from "react";
import './navbar.css'
import { Link } from "react-router-dom"

const navbarItems = [
    { name: "Home", linkTo: "/" },
    { name: "Events", linkTo: "/events" },
    { name: "Competitions", linkTo: "/competitions" },
    { name: "Schedule", linkTo: "/schedule" },
    { name: "Contact", linkTo: "/contact" },
  ];

const navbar = () => {
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
            delay: index * 0.2, // Delay each item by 0.2s
            duration: 0.5, // Animation duration
            ease: "easeInOut", // Easing function
          }}
          className="navbar-item"
        >
          {item.name}
        </motion.a>
      ))}
    </motion.nav>
    </div>
  );
};

// Animation variants for parent and child elements
const navbarVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4, // Delay between children animations
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: -20 }, // Initially hidden and shifted up
  visible: { opacity: 1, y: 0 }, // Become visible and move to original position
};

export default navbar;
