'use client'

import React, { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, ArrowRight, Play } from 'lucide-react'
import styles from './WhyJoin.module.css'

interface Member {
  name: string
  classInfo: string
  roles: string
  quote: string
  videoSrc: string
}

const members: Member[] = [
  {
    name: 'Philip Bertschy',
    classInfo: "Class of '25, Mechanical Engineering",
    roles: 'SAE President & EV Aero Lead (24-25)',
    quote: "This is the best place to learn hands-on skills, and on top of that, you're doing it with all of your best friends.",
    videoSrc: '/videos/philip.mp4',
  },
  {
    name: 'Benito Tagle',
    classInfo: "Class of '25, Mechanical Engineering",
    roles: 'IC Project Manager (24-25)',
    quote: "It's been a great experience. So far, all the experience I've gotten was because of Formula SAE. It's definitely a highlight of my college career.",
    videoSrc: '/videos/benito.mp4',
  },
  {
    name: 'Caleb Miller',
    classInfo: "Class of '25, Mechanical Engineering",
    roles: 'EV Project Manager (24-25)',
    quote: "Being able to apply technical stuff from the classroom to a real-life race car... is something that you don't learn in the classroom.",
    videoSrc: '/videos/caleb.mp4',
  },
]

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? '100%' : '-100%',
    opacity: 0,
  }),
}

const WhyJoin = () => {
  const [[activeIndex, direction], setActiveIndex] = useState([0, 0])
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const memberIndex = ((activeIndex % members.length) + members.length) % members.length
  const member = members[memberIndex]

  const setIndex = (newIndex: number) => {
    setIsVideoPlaying(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
    const newDirection = newIndex > activeIndex ? 1 : -1;
    setActiveIndex([newIndex, newDirection]);
  }

  return (
    <section className={styles.whyJoinSection}>
      <div className={styles.container}>
        <div className={styles.intro}>
          {/* You can swap in your favorite title alternative here! */}
          <h2 className={styles.title}>Engineered for Impact</h2>
          <p className={styles.subtitle}>
            Hear directly from our members about their experiences and what makes SAE a
            transformative part of their education.
          </p>
        </div>

        <div className={styles.sliderGrid}>
          {/* Left Column: Text Content & Navigation */}
          <div className={styles.contentContainer}>
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={memberIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: 'spring', stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className={styles.content}
              >
                <p className={styles.quote}>“{member.quote}”</p>
                <div className={styles.authorInfo}>
                  <p className={styles.authorName}>{member.name}</p>
                  <p className={styles.authorDetails}>{member.classInfo}</p>
                  <p className={styles.authorDetails}>{member.roles}</p>
                </div>
              </motion.div>
            </AnimatePresence>
              

            <div className="navContainer">
              <div className={styles.navigation}>
                <button onClick={() => setIndex(activeIndex - 1)} className={styles.navButton} aria-label="Previous testimonial">
                  <ArrowLeft />
                </button>
                <button onClick={() => setIndex(activeIndex + 1)} className={styles.navButton} aria-label="Next testimonial">
                  <ArrowRight />
                </button>
              </div>
              
              <div className={styles.dotContainer}>
                {members.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setIndex(index)}
                    className={styles.dotButton}
                    aria-label={`Go to testimonial ${index + 1}`}
                  >
                    {memberIndex === index && (
                      <motion.div className={styles.dotActive} layoutId="active-testimonial-dot" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Video Player */}
          <div className={styles.videoWrapper}>
            <AnimatePresence mode="wait">
              <motion.div
                key={memberIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className={styles.videoContainer}
              >
                <video
                  ref={videoRef}
                  className={styles.videoPlayer}
                  src={member.videoSrc}
                  controls={isVideoPlaying}
                  onPlay={() => setIsVideoPlaying(true)}
                  onPause={() => setIsVideoPlaying(false)}
                  onEnded={() => setIsVideoPlaying(false)}
                  playsInline
                  preload="metadata"
                />
                {!isVideoPlaying && (
                  <div className={styles.videoOverlay}>
                    <button onClick={() => videoRef.current?.play()} className={styles.playButton} aria-label={`Play video for ${member.name}`}>
                      <Play className={styles.playIcon} />
                    </button>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyJoin