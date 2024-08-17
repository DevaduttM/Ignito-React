import React from 'react'
import './home.css'
import { motion } from 'framer-motion'
import Particles from '../particles/particles'
import logo from '../../assets/logot.png'


const home = () => {
  return (
    <>
        <motion.div 
        initial = {{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 1.5}}
        className="home-container">
        <img src={ logo } alt="" className="logo" />
            <Particles />
            <motion.h1
            initial={{ opacity: 0, y: -100}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 1}}
            className='title'>IGNITO<span> 2024</span><p className='catch'>Elevate | Evolve | Empower</p></motion.h1>

            <div className="home-cont">
                <motion.p
                initial={{ opacity: 0, y: 50}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 1}}
                className='home-p'>
                    <svg stroke="#fff" fill="#fff" stroke-width="0" viewBox="0 0 1024 1024" height="1.2em" width="1.2em" xmlns="http://www.w3.org/2000/svg"><path d="M712 304c0 4.4-3.6 8-8 8h-56c-4.4 0-8-3.6-8-8v-48H384v48c0 4.4-3.6 8-8 8h-56c-4.4 0-8-3.6-8-8v-48H184v136h656V256H712v48z"></path><path d="M880 184H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v664c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V216c0-17.7-14.3-32-32-32zm-40 656H184V460h656v380zm0-448H184V256h128v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h256v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h128v136z"></path></svg>
                    5, 6, 7 September
                </motion.p>
                <motion.p
                initial={{ opacity: 0, y: 50}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 1}}
                className='home-a'>
                <svg stroke="#fff" fill="#fff" stroke-width="0" viewBox="0 0 12 16" height="1.2em" width="1.2em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 0C2.69 0 0 2.5 0 5.5 0 10.02 6 16 6 16s6-5.98 6-10.5C12 2.5 9.31 0 6 0zm0 14.55C4.14 12.52 1 8.44 1 5.5 1 3.02 3.25 1 6 1c1.34 0 2.61.48 3.56 1.36.92.86 1.44 1.97 1.44 3.14 0 2.94-3.14 7.02-5 9.05zM8 5.5c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"></path></svg>
                <a href="https://maps.app.goo.gl/WywGpfh8BzbYvmpn7" target = "blank" className='home-a'>Model Engineering College, Kochi</a>
                </motion.p>

            </div>
        </motion.div>

        <div className="about-container">
            <motion.h2
            initial = {{ opacity: 0, y:50}}
            whileInView={{opacity: 1, y:0}}
            transition={{duration: 1}}
            className='abouth2'
            >ABOUT</motion.h2>

            <motion.div
            initial={{ opacity: 0, scale: 0.7}}
            whileInView={{opacity: 1, scale: 1}}
            transition={{duration: 0.7}}
            className="abt-content">
                <p
                className='aboutp'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum consequatur neque vitae rem illo repellendus distinctio dolor, quo sit placeat excepturi commodi accusantium voluptatibus magnam corporis ullam sapiente? Commodi voluptates itaque suscipit iste ab veniam, unde facilis, numquam quaerat rerum alias obcaecati corrupti aliquam. Perspiciatis doloremque, dolores autem soluta aliquid magnam fuga cumque sint delectus enim sunt, veritatis commodi obcaecati!
                </p>
            </motion.div>
        </div>
    </>
  )
}

export default home