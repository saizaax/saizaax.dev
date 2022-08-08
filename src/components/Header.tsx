import React from "react"
import styles from "@styles/Header.module.scss"

import Image from "next/image"
import Link from "next/link"

import memoji from "@assets/memoji.png"
import sun from "@icons/sun.svg"
import moon from "@icons/moon.svg"
import { useTheme } from "next-themes"

const Header = () => {
  const { theme, setTheme } = useTheme()

  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => setMounted(true), [])
  if (!mounted) return null

  return (
    <header className={styles.header}>
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
      {theme === "dark" ? (
        <button className={styles.theme} onClick={() => setTheme("light")}>
          <Image src={sun} alt="theme-toggle" priority={true} />
        </button>
      ) : (
        <button className={styles.theme} onClick={() => setTheme("dark")}>
          <Image src={moon} alt="theme-toggle" priority={true} />
        </button>
      )}
    </header>
  )
}

export { Header }
