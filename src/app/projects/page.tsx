'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { BurgerMenu } from '../comps/burger-menu'
import { NavBar } from '../comps/nav-bar'
import LogoCarousel from '../comps/logo-carousel'

import ucmusaImage from '../images/ucmusa.png';

import zonate from '../images/z1.png';
import lensfolio from '../images/l1.png';
import monop from '../images/m1.jpeg';
import mos from '../images/os1.jpeg';



export default function Projects() {
  const [expanded, setExpanded] = useState(false)

  useEffect(() => {
    setExpanded(true)
  }, [])

  const containerVariants = {
    initial: { gap: '0px', gridTemplateColumns: '1fr' },
    expanded: { gap: '0px', gridTemplateColumns: 'repeat(3, 1fr)' }
  }

  const itemVariants = {
    initial: { opacity: 0, scale: 0 },
    expanded: { opacity: 1, scale: 1 }
  }

  const textVariants = {
    initial: { opacity: 0 },
    expanded: { opacity: 1, transition: { duration: 0.5 } }
  }

  const imageVariants = {
    initial: { opacity: 0 },
    expanded: { opacity: 1, transition: { duration: 0.5 } }
  }

  const projects = [
    { title: "UCMUSA Prayer App", height: "h-64", imageSrc: "https://drive.google.com/file/d/11y-p-XO4qMNbhUd6-AejVHe6YBNOzztl/preview", isIframe: true },
    { title: "Muslim Open Space", height: "h-80", imageSrc: mos },
    { title: "Zonate", height: "h-72", imageSrc: zonate  },
    { title: "canterburymusa.com", height: "h-72", imageSrc: ucmusaImage  },
    { title: "Lensfolio", height: "h-64", imageSrc: lensfolio  },
    { title: "Mixed Reality Monopoly", height: "h-80", imageSrc: monop  },

  ]

  const handleProjectClick = () => {
    window.open('https://github.com/samielmadani?tab=repositories', '_blank'); // Opens google.com in a new tab
  }

  return (
    <div className="html-background min-h-screen flex flex-col">
      <motion.div
        className=" flex flex-col p-4 md:p-8"
        variants={containerVariants}
        initial="initial"
        animate={expanded ? "expanded" : "initial"}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="background-primary rounded-lg p-6 flex justify-between items-center mb-4"
          variants={itemVariants}
          style={{ height: '100px', zIndex: '999' }} // Fixed height for the header
        >
          <NavBar />
          <BurgerMenu />
        </motion.div>

        

        <motion.div
          className="background-primary rounded-lg p-6 flex-grow flex flex-col"
          variants={itemVariants}
        >
          <motion.h2 variants={textVariants} className="text-3xl font-semibold mb-6 primary-font font-poppins headerr">
            My Projects
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
            <div className="space-y-6">
              {projects.slice(0, 2).map((project, index) => (
                <motion.div
                  key={index}
                  whileHover={{cursor: 'pointer', scale: 1.05}}
                  whileTap={{cursor: 'pointer', scale: 1.05}}
                  className={`background-tertiary rounded-lg overflow-hidden ${project.height}`}
                  variants={itemVariants}
                  onClick={handleProjectClick}
                >
                  <motion.div variants={imageVariants} className="h-full">
                    {project.isIframe ? (
                      <iframe
                        src={project.imageSrc}
                        width="100%"
                        height="100%"
                        allow="autoplay"
                        className="w-full h-full"
                      ></iframe>
                    ) : (
                      <Image
                        src={project.imageSrc}
                        alt={project.title}
                        width={400}
                        height={400}
                        className="w-full h-full object-cover "
                        
                        
                      />
                    )}
                  </motion.div>
                  <motion.div
                    variants={textVariants}
                    className="absolute bottom-0 left-0 right-0 html-background bg-opacity-50 text-white p-4 "
                  >
                    <h3 className="text-lg font-semibold font-poppins projects secondary-font">{project.title}</h3>
                  </motion.div>
                </motion.div>
              ))}
            </div>
            <div className="space-y-6">
              {projects.slice(2, 4).map((project, index) => (
                <motion.div
                  key={index + 2}
                  className={`background-tertiary rounded-lg overflow-hidden ${project.height}`}
                  variants={itemVariants}
                  whileHover={{cursor: 'pointer', scale: 1.05}}
                  whileTap={{cursor: 'pointer', scale: 1.05}}
                  onClick={handleProjectClick}
                >
                  <motion.div variants={imageVariants} className="h-full">
                    <Image
                      src={project.imageSrc}
                      alt={project.title}
                      width={400}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <motion.div
                    variants={textVariants}
                    className="absolute bottom-0 left-0 right-0 html-background bg-opacity-50 text-white p-4"
                  >
                    <h3 className="text-lg font-semibold font-poppins projects secondary-font">{project.title}</h3>
                  </motion.div>
                </motion.div>
              ))}
            </div>
            <div className="space-y-6">
              {projects.slice(4, 6).map((project, index) => (
                <motion.div
                  key={index + 4}
                  className={`background-tertiary rounded-lg overflow-hidden ${project.height}`}
                  variants={itemVariants}
                  whileHover={{cursor: 'pointer', scale: 1.05}}
                  whileTap={{cursor: 'pointer', scale: 1.05}}
                  onClick={handleProjectClick}
                >
                  <motion.div variants={imageVariants} className="h-full">
                    <Image
                      src={project.imageSrc}
                      alt={project.title}
                      width={400}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <motion.div
                    variants={textVariants}
                    className="absolute bottom-0 left-0 right-0 html-background bg-opacity-50 text-white p-4"
                  >
                    <h3 className="text-lg font-semibold font-poppins projects secondary-font">{project.title}</h3>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          className="background-primary rounded-lg p-6 md:col-span-2 flex items-center justify-center mb-4"
          variants={itemVariants}
          style={{ marginTop: '1rem' }}
        >
          <LogoCarousel />
        </motion.div>
      </motion.div>
    </div>
  )
}
