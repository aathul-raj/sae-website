'use client'

import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, ArrowRight, Play } from 'lucide-react'
import styles from './WhyJoin.module.css'

interface Member {
  name: string
  classInfo: string
  roles: string
  quote: string
  videoSrc: string
  posterSrc: string
}

const members: Member[] = [
  {
    name: 'Philip Bertschy',
    classInfo: "Class of '25, Mechanical Engineering",
    roles: 'SAE President & EV Aero Lead (24-25)',
    quote: "This is the best place to learn hands-on skills, and on top of that, you're doing it with all of your best friends.",
    videoSrc: '/videos/philip.mp4',
    posterSrc: '/videos/posters/philip.png',
  },
  {
    name: 'Benito Tagle',
    classInfo: "Class of '25, Mechanical Engineering",
    roles: 'IC Project Manager (24-25)',
    quote: "It's been a great experience. So far, all the experience I've gotten was because of Formula SAE. It's definitely a highlight of my college career.",
    videoSrc: '/videos/benito.mp4',
    posterSrc: '/videos/posters/benito.png',
  },
  {
    name: 'Caleb Miller',
    classInfo: "Class of '25, Mechanical Engineering",
    roles: 'EV Project Manager (24-25)',
    quote: "Being able to apply technical stuff from the classroom to a real-life race car... is something that you don't learn in the classroom.",
    videoSrc: '/videos/caleb.mp4',
    posterSrc: '/videos/posters/caleb.png',
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
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])

  const memberIndex = ((activeIndex % members.length) + members.length) % members.length

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (video && index !== memberIndex) {
        video.pause()
      }
    })
    setIsVideoPlaying(false)
  }, [memberIndex])

  const setIndex = (newIndex: number) => {
    const newDirection = newIndex > activeIndex ? 1 : -1
    setActiveIndex([newIndex, newDirection])
  }

  const handlePlay = () => {
    const currentVideo = videoRefs.current[memberIndex]
    if (currentVideo) {
      currentVideo.play()
      setIsVideoPlaying(true)
    }
  }
  
  const handlePauseOrEnd = () => {
    setIsVideoPlaying(false)
  }

  return (
    <section className={styles.whyJoinSection}>
      <div className={styles.container}>
        <div className={styles.intro}>
          <h2 className={styles.title}>Engineered for Impact</h2>
          <p className={styles.subtitle}>
            Hear directly from our members about their experiences and what makes SAE a
            transformative part of their education.
          </p>
        </div>

        <div className={styles.sliderGrid}>
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
                <p className={styles.quote}>“{members[memberIndex].quote}”</p>
                <div className={styles.authorInfo}>
                  <p className={styles.authorName}>{members[memberIndex].name}</p>
                  <p className={styles.authorDetails}>{members[memberIndex].classInfo}</p>
                  <p className={styles.authorDetails}>{members[memberIndex].roles}</p>
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

          <div className={styles.videoWrapper}>
            <div className={styles.videoContainer}>
              {members.map((member, index) => (
                <video
                  key={member.videoSrc}
                  ref={(el) => { videoRefs.current[index] = el }}
                  style={{ display: index === memberIndex ? 'block' : 'none' }}
                  className={styles.videoPlayer}
                  src={member.videoSrc}
                  poster={member.posterSrc}
                  controls={index === memberIndex && isVideoPlaying}
                  onPlay={() => setIsVideoPlaying(true)}
                  onPause={handlePauseOrEnd}
                  onEnded={handlePauseOrEnd}
                  playsInline
                  preload="auto"
                  muted
                />
              ))}
              {!isVideoPlaying && (
                 <AnimatePresence>
                   <motion.div
                    className={styles.videoOverlay}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                   >
                    <button onClick={handlePlay} className={styles.playButton} aria-label={`Play video for ${members[memberIndex].name}`}>
                      <Play className={styles.playIcon} />
                    </button>
                  </motion.div>
                 </AnimatePresence>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyJoin