import React from "react"
import styles from "@styles/Header.module.scss"

import Image from "next/image"
import Link from "next/link"

import memoji from "@assets/memoji.png"
import sun from "@icons/sun.svg"

const Header = () => {
  return (
    <div className={styles.header}>
      <Link href="/">
        <div className={styles.logo}>
          <Image
            src={memoji}
            alt="saizaax.dev"
            priority={true}
            width={50}
            height={50}
          />
          <h3>
            saizaax<span>.dev</span>
          </h3>
        </div>
      </Link>
      <div className={styles.links}>
        <Link href="/">Socials</Link>
        <Link href="/">Biography</Link>
        <Link href="/">Projects</Link>
        <Link href="/">Skills</Link>
        <Link href="/">Contacts</Link>
      </div>
      <button className={styles.theme}>
        <Image src={sun} alt="light-theme" />
      </button>
    </div>
  )
}

export { Header }
