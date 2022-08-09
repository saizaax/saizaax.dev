import React from "react"
import styles from "@styles/Bio.module.scss"

import Image from "next/image"

import avatar from "@assets/avatar.png"

const Bio = () => {
  return (
    <div className={styles.container}>
      <div className={styles.avatar}>
        <Image
          src={avatar}
          width={175}
          height={175}
          alt="avatar"
          layout="fixed"
        />
      </div>
      <h1>
        Hi, my name is <span className={styles.name}>Korolkov Alexander.</span>
        <br />
        I’m a <span className={styles.developer}>
          Frontend Developer
        </span> & <span className={styles.designer}>UI UX Designer.</span>
      </h1>
    </div>
  )
}

export { Bio }
