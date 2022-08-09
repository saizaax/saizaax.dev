import React from "react"
import styles from "@styles/Header.module.scss"
import { useTheme } from "next-themes"

import Image from "next/image"
import Link from "next/link"

import memoji from "@assets/memoji.png"
import sun from "@icons/sun.svg"
import moon from "@icons/moon.svg"
import menuLight from "@icons/menu-light.svg"
import menuDark from "@icons/menu-dark.svg"

import { Menu } from "./Menu"
import { Links } from "./Links"

const Header = () => {
  const { theme, setTheme } = useTheme()

  const [mounted, setMounted] = React.useState(false)
  const [menu, setMenu] = React.useState(false)

  const toggleMenu = React.useCallback(
    (value: boolean) => {
      setMenu(value)
    },
    [setMenu]
  )

  React.useEffect(() => setMounted(true), [])
  if (!mounted) return null

  return (
    <React.Fragment>
      <header className={styles.header}>
        <Link href="/">
          <div className={styles.logo}>
            <span className={styles.logoImage}>
              <Image
                src={memoji}
                alt="saizaax.dev"
                priority={true}
                width={50}
                height={50}
                layout="fixed"
              />
            </span>
            <h3>
              saizaax<span>.dev</span>
            </h3>
          </div>
        </Link>
        <div className={styles.links}>
          <Links />
        </div>
        {theme === "dark" ? (
          <button className={styles.theme} onClick={() => setTheme("light")}>
            <Image
              src={sun}
              alt="theme-toggle"
              width={24}
              height={24}
              priority={true}
              layout="fixed"
            />
          </button>
        ) : (
          <button className={styles.theme} onClick={() => setTheme("dark")}>
            <Image
              src={moon}
              alt="theme-toggle"
              width={24}
              height={24}
              priority={true}
              layout="fixed"
            />
          </button>
        )}
        <button className={styles.menu} onClick={() => setMenu(true)}>
          {theme === "dark" ? (
            <Image
              src={menuLight}
              alt="menu"
              width={24}
              height={24}
              priority={true}
              layout="fixed"
            />
          ) : (
            <Image
              src={menuDark}
              alt="menu"
              width={24}
              height={24}
              priority={true}
              layout="fixed"
            />
          )}
        </button>
      </header>
      {menu ? <Menu onClick={toggleMenu} /> : null}
    </React.Fragment>
  )
}

export { Header }
