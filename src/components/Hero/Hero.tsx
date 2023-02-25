import React from 'react'
import { motion } from 'framer-motion'
import styles from './hero.module.scss'
import { FaPinterestP } from 'react-icons/fa'
import { ImFacebook, ImTwitter } from 'react-icons/im'

import HeroImage from '../../assets/images/hero-image.png'
import { Button } from '../Button'

interface Props { }

const Hero: React.FC<Props> = ({ }: Props) => {
  return (
    <motion.div
      initial={{ transform: `translateY(-100%)` }}
      animate={{ transform: 'translateY(0)' }}
      transition={{ delay: 0, duration: 0.25 }}
      className={styles.hero}
    >
      <div className="container grid mx-auto ai-c">
        <motion.div
          initial={{ transform: `translateX(-50%)`, opacity: 0 }}
          animate={{ transform: 'translateX(0)', opacity: 1 }}
          transition={{ delay: 0.25, duration: 0.25 }}
          className={`${styles.half} col-6_sm-12`}
        >
          <div className={styles.social}>
            <ImFacebook />
            <ImTwitter />
            <FaPinterestP />
          </div>

          <div className={styles.summary}>
            <span>Its Quick & Amusing!</span>
            <h1><b className="highlight">Th</b>e Art of speed food Quality</h1>
            <p className="mb-4 mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Varius sed pharetra dictum neque massa congue
            </p>
            <Button fullWidth={false} circular>See Menu</Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ transform: `translateX(50%)`, opacity: 0 }}
          animate={{ transform: 'translateX(0)', opacity: 1 }}
          transition={{ delay: 0.25, duration: 0.25 }}
          className={`${styles.imageContainer} col-6 d--f jc--c ai--c`}
        >
          <img src={HeroImage} />
        </motion.div>
      </div>
    </motion.div>
  )
}

Hero.defaultProps = {}

export default Hero
