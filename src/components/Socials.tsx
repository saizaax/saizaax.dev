import React from "react"
import styles from "@styles/Socials.module.scss"
import Image from "next/image"
import Link from "next/link"

import telegram from "@assets/socials/telegram.svg"
import github from "@assets/socials/github.svg"
import behance from "@assets/socials/behance.svg"
import dribbble from "@assets/socials/dribbble.svg"
import twitter from "@assets/socials/twitter.svg"

const Socials = () => {
  return (
    <div className={styles.socials}>
      {/* Telegram */}
      <Link href="https://github.com/xaazias">
        <span className={styles.link}>
          <Image src={telegram} alt="telegram" />
        </span>
      </Link>

      {/* GitHub */}
      <Link href="https://github.com/xaazias">
        <span className={styles.link}>
          <Image src={github} alt="github" />
        </span>
      </Link>

      {/* Behance */}
      <Link href="https://github.com/xaazias">
        <span className={styles.link}>
          <Image src={behance} alt="behance" />
        </span>
      </Link>

      {/* Dribbble */}
      <Link href="https://github.com/xaazias">
        <span className={styles.link}>
          <Image src={dribbble} alt="dribbble" />
        </span>
      </Link>

      {/* Twitter */}
      <Link href="https://github.com/xaazias">
        <span className={styles.link}>
          <Image src={twitter} alt="twitter" />
        </span>
      </Link>
    </div>
  )
}

export { Socials }
