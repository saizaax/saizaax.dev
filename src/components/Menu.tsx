import React, { FC } from "react"
import styles from "@styles/Menu.module.scss"

import Image from "next/image"
import { useTheme } from "next-themes"

import closeDark from "@icons/close-dark.svg"
import closeLight from "@icons/close-light.svg"

import { Links } from "@components/Links"

type Props = {
  onClick: (value: boolean) => void
}

const Menu: FC<Props> = ({ onClick }) => {
  const { theme } = useTheme()

  return (
    <div className={styles.menu}>
      <div className={styles.head}>
        <button onClick={() => onClick(false)}>
          {theme === "dark" ? (
            <Image
              src={closeLight}
              alt="close"
              width={24}
              height={24}
              priority={true}
              layout="fixed"
            />
          ) : (
            <Image
              src={closeDark}
              alt="close"
              width={24}
              height={24}
              priority={true}
              layout="fixed"
            />
          )}
        </button>
      </div>
      <div className={styles.links}>
        <Links />
      </div>
    </div>
  )
}

export { Menu }
