import React, { FC } from "react"
import styles from "@styles/Footer.module.scss"
import { Socials } from "./Socials"

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.info}>
        <p>
          Copyright © 2022 Korolkov Alexander.
          <br /> All Rights Reserved.
        </p>
      </div>
      <div className={styles.socials}>
        <Socials size={24} />
      </div>
    </footer>
  )
}

export { Footer }
