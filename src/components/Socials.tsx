import React, { FC } from "react"
import styles from "@styles/Socials.module.scss"

import Image from "next/image"
import Link from "next/link"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"

import telegram from "@assets/socials/telegram.svg"
import githubDark from "@assets/socials/github.svg"
import githubLight from "@assets/socials/github-light.svg"
import behance from "@assets/socials/behance.svg"

type Props = {
  size: number
}

const animations = {
  container: {
    hidden: {},
    visible: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.05,
      },
    },
  },
  item: {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15,
      },
    },
    hover: {
      scale: 1.2,
      transition: {
        duration: 0.01,
      },
    },
  },
}

const Socials: FC<Props> = ({ size }) => {
  const { resolvedTheme: theme } = useTheme()

  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => setMounted(true), [])
  if (!mounted) return null

  return (
    <motion.div
      className={styles.socials}
      layout
      initial="hidden"
      animate="visible"
      variants={animations.container}
    >
      {/* Telegram */}
      <Link href="https://t.me/saizaax">
        <motion.span
          className={styles.link}
          variants={animations.item}
          whileHover={animations.item.hover}
        >
          <Image
            src={telegram}
            alt="telegram"
            layout="fixed"
            width={size}
            height={size}
          />
        </motion.span>
      </Link>

      {/* GitHub */}
      <Link href="https://github.com/saizaax">
        <motion.span
          className={styles.link}
          variants={animations.item}
          whileHover={animations.item.hover}
        >
          {theme === "dark" ? (
            <Image
              src={githubDark}
              alt="github"
              layout="fixed"
              width={size}
              height={size}
            />
          ) : (
            <Image
              src={githubLight}
              alt="github"
              layout="fixed"
              width={size}
              height={size}
            />
          )}
        </motion.span>
      </Link>

      {/* Behance */}
      <Link href="https://behance.net/saizaax">
        <motion.span
          className={styles.link}
          variants={animations.item}
          whileHover={animations.item.hover}
        >
          <Image
            src={behance}
            alt="behance"
            layout="fixed"
            width={size}
            height={size}
          />
        </motion.span>
      </Link>
    </motion.div>
  )
}

export { Socials }
