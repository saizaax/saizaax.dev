import React from "react"
import styles from "@styles/Socials.module.scss"
import Image from "next/image"
import Link from "next/link"

import telegram from "@assets/socials/telegram.svg"
import githubDark from "@assets/socials/github.svg"
import githubLight from "@assets/socials/github-light.svg"
import behance from "@assets/socials/behance.svg"
import dribbble from "@assets/socials/dribbble.svg"
import twitter from "@assets/socials/twitter.svg"
import { useTheme } from "next-themes"

const Socials = () => {
  const { theme } = useTheme()

  return (
    <div className={styles.socials}>
      {/* Telegram */}
      <Link href="https://github.com/xaazias">
        <span className={styles.link}>
          <Image src={telegram} alt="telegram" priority={true} />
        </span>
      </Link>

      {/* GitHub */}
      <Link href="https://github.com/xaazias">
        <span className={styles.link}>
          {theme === "dark" ? (
            <Image src={githubDark} alt="github" priority={true} />
          ) : (
            <Image src={githubLight} alt="github" priority={true} />
          )}
        </span>
      </Link>

      {/* Behance */}
      <Link href="https://github.com/xaazias">
        <span className={styles.link}>
          <Image src={behance} alt="behance" priority={true} />
        </span>
      </Link>

      {/* Dribbble */}
      <Link href="https://github.com/xaazias">
        <span className={styles.link}>
          <Image src={dribbble} alt="dribbble" priority={true} />
        </span>
      </Link>

      {/* Twitter */}
      <Link href="https://github.com/xaazias">
        <span className={styles.link}>
          <Image src={twitter} alt="twitter" priority={true} />
        </span>
      </Link>
    </div>
  )
}

export { Socials }
