'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import styles from './MissionSection.module.css'
import Image from 'next/image'

const MissionSection = () => {
  const { scrollY } = useScroll()
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768

  const carX = useTransform(
    scrollY,
    [0, 1700],
    isMobile ? ['200%', '-320%'] : ['150%', '-720%']
  )

  return (
    <section className={styles.missionSection}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className={styles.container}
      >
        <h1 className={styles.heading}>
          WE BUILD{' '}
          <span className={styles.scratchedOut}>RACECARS</span>
          {' '}
          <span className={styles.replacement}>ENGINEERS</span>
        </h1>
      </motion.div>
      
      <motion.div
        className={styles.carContainer}
        style={{ x: carX }}
      >
        <Image
          src="/car_sticker.png"
          alt="SAE Racecar"
          width={236}
          height={100}
          className={styles.missionImage}
        />
      </motion.div>
    </section>
  )
}

export default MissionSection