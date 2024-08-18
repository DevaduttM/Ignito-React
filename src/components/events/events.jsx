import React from 'react'
import './events.css'
import { motion } from 'framer-motion'
import EventCard from './eventcard'
import Particles from '../particles/particles'

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.15, 
        duration: 0.5,
      },
    }),
  };
  
  const cards = ['Card 1', 'Card 2', 'Card 3', 'Card 4', 'Card 5', 'Card 6', 'Card 7', 'Card 8', 'Card 9', 'Card 10', 'Card 11', 'Card 12'];
  
  const events = () => {
    return (
        <>
        <Particles />
        <h1 className="events-title">Events</h1>
        <div className='card-container'>
            {cards.map((card, index) => (
            <motion.div
                key={card}
                custom={index} 
                initial="hidden"
                whileInView="visible"
                variants={cardVariants}
            >
                <EventCard />
            </motion.div>
            ))}
        </div>
        </>
        );
    };

export default events