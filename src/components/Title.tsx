import React from "react"
import styles from "@styles/Title.module.scss"

import Image from "next/image"
import { motion } from "framer-motion"

import memoji from "@assets/memoji.png"

const animations = {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: {
    delay: 0.3,
    duration: 0.3,
  },
}

const Title = () => {
  return (
    <motion.div className={styles.container} {...animations}>
      <p className={styles.name}>Korolkov Alexander</p>
      <div className={styles.title}>
        <h1>saizaax</h1>
        <h1 className={styles.dev}>.dev</h1>
      </div>
      <p className={styles.occupation}>Frontend Developer ・ UI UX Designer</p>
      <div className={styles.memoji}>
        <Image
          src={memoji}
          alt="saizaax"
          priority={true}
          layout="fixed"
          width={165}
          height={165}
        />
      </div>
    </motion.div>
  )
}

export { Title }
