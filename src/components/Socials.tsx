import React, { FC } from "react"
import styles from "@styles/Socials.module.scss"

import Image from "next/image"
import Link from "next/link"
import { useTheme } from "next-themes"

import telegram from "@assets/socials/telegram.svg"
import githubDark from "@assets/socials/github.svg"
import githubLight from "@assets/socials/github-light.svg"
import behance from "@assets/socials/behance.svg"
import dribbble from "@assets/socials/dribbble.svg"
import twitter from "@assets/socials/twitter.svg"

type Props = {
  size: number
}

const Socials: FC<Props> = ({ size }) => {
  const { theme } = useTheme()

  return (
    <div className={styles.socials}>
      {/* Telegram */}
      <Link href="https://github.com/xaazias">
        <span className={styles.link}>
          <Image
            src={telegram}
            alt="telegram"
            priority={true}
            layout="fixed"
            width={size}
            height={size}
          />
        </span>
      </Link>

      {/* GitHub */}
      <Link href="https://github.com/xaazias">
        <span className={styles.link}>
          {theme === "dark" ? (
            <Image
              src={githubDark}
              alt="github"
              priority={true}
              layout="fixed"
              width={size}
              height={size}
            />
          ) : (
            <Image
              src={githubLight}
              alt="github"
              priority={true}
              layout="fixed"
              width={size}
              height={size}
            />
          )}
        </span>
      </Link>

      {/* Behance */}
      <Link href="https://github.com/xaazias">
        <span className={styles.link}>
          <Image
            src={behance}
            alt="behance"
            priority={true}
            layout="fixed"
            width={size}
            height={size}
          />
        </span>
      </Link>

      {/* Dribbble */}
      <Link href="https://github.com/xaazias">
        <span className={styles.link}>
          <Image
            src={dribbble}
            alt="dribbble"
            priority={true}
            layout="fixed"
            width={size}
            height={size}
          />
        </span>
      </Link>

      {/* Twitter */}
      <Link href="https://github.com/xaazias">
        <span className={styles.link}>
          <Image
            src={twitter}
            alt="twitter"
            priority={true}
            layout="fixed"
            width={size}
            height={size}
          />
        </span>
      </Link>
    </div>
  )
}

export { Socials }
