'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { BurgerMenu } from '../comps/burger-menu'
import { NavBar } from '../comps/nav-bar'
import { Github, Linkedin, Mail } from 'lucide-react'

export default function Contact() {
  const [expanded] = useState(true)

  const symbolVariants = {
    initial: { opacity: 0, rotate: 0 },
    expanded: {
      opacity: 1,
      rotate: 360,
      transition: { delay: 0.5, duration: 1, ease: 'easeInOut' },
    },
  }

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
    expanded: { opacity: 1, transition: { delay: 0.5 } }
  }

  return (
    <div className="bg-black min-h-screen flex flex-col">
      <motion.div
        className="flex-grow flex flex-col p-4 md:p-8"
        variants={containerVariants}
        initial="initial"
        animate={expanded ? "expanded" : "initial"}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="bg-[#d7cfbb] rounded-lg p-6 flex justify-between items-center mb-4"
          variants={itemVariants}
          style={{ height: '100px', zIndex: '999' }}
        >
          <NavBar />
          <BurgerMenu />
        </motion.div>

        <motion.div
          className="bg-[#d7cfbb] rounded-lg p-6 flex-grow flex flex-col mb-4"
          variants={itemVariants}
        >
          <motion.h2 variants={textVariants} className="text-2xl font-semibold mb-4 text-black headerr">
            Contact Me
          </motion.h2>
          <motion.form action="https://formspree.io/f/xjkvbrqq"
            method="POST" variants={textVariants} className="space-y-4 flex-grow flex flex-col">
            <div>
              <label htmlFor="name" className="block mb-1 text-black font-your-custom-font">Name</label>
              <input type="text" id="name" name="name" className="w-full p-2 rounded-lg font-your-custom-font2" required />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1 text-black font-your-custom-font">Email</label>
              <input type="email" id="email" name="email" className="w-full p-2 rounded-lg font-your-custom-font2" required />
            </div>
            <div className="flex-grow">
              <label htmlFor="message" className="block mb-1 text-black font-your-custom-font">Message</label>
              <textarea id="message" name="message" className="w-full p-2 rounded-lg h-full font-your-custom-font2" style={{ minHeight: '200px' }} required></textarea>
            </div>
            <button type="submit" className="bg-stone-800 text-white px-4 py-2 rounded-lg ">Send Message</button>
          </motion.form>
        </motion.div>

        <motion.div
            className="bg-[#d7cfbb] rounded-lg p-6 flex items-center justify-center space-x-4"
            variants={itemVariants}
          >
            {[
              { Icon: Github, link: "https://github.com/samielmadani" },
              { Icon: Linkedin, link: "https://linkedin.com/in/samielmadani" },
              { Icon: Mail, link: "mailto:sami.elmadani@outlook.com" }
            ].map(({ Icon, link }, index) => (
              <motion.a
                key={index}
                href={link}
                className="text-black"
                variants={symbolVariants}
                whileHover={{ scale: 1.2 }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon size={24} />
              </motion.a>
            ))}
          </motion.div>
      </motion.div>
    </div>
  )
}
