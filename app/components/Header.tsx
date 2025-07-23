'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './Header.module.css'

const programLinks = [
  { href: '/ic', label: 'Formula IC' },
  { href: '/ev', label: 'Formula E' },
  { href: '/baja', label: 'Baja SAE' },
  { href: '/dev', label: 'Development' },
]

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  return (
    <nav className={styles.navbar}>
      <ul className={styles.navLinksLeft}>
        <li><Link href="/about" className={styles.link}>About</Link></li>

        <li 
          className={styles.dropdownContainer}
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          <h2 className={styles.dropdownParentLink}>
            Programs
          </h2>
          <AnimatePresence>
            {isDropdownOpen && (
              <motion.div 
                className={styles.dropdownMenu}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2, ease: 'easeInOut' }}
              >
                {programLinks.map((link) => (
                  <Link key={link.href} href={link.href} className={styles.dropdownLink}>
                    {link.label}
                  </Link>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </li>
      </ul>

      <div className={styles.logo}>
        <Link href="/">
          <Image
            src="/SAE_logo.svg"
            alt="TAMU SAE Logo"
            width={84}
            height={39}
            className={styles.logoImage}
          />
        </Link>
      </div>

      <ul className={styles.navLinksRight}>
        <li><Link href="/recruitment" className={styles.link}>Recruitment</Link></li>
        <li><Link href="/sponsors" className={styles.link}>Sponsors</Link></li>
      </ul>
    </nav>
  )
}

export default Header