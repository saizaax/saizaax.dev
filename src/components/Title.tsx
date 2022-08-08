import React from "react"
import styles from "@styles/Title.module.scss"
import Image from "next/image"

import memoji from "@assets/memoji.png"

const Title = () => {
  return (
    <div className={styles.container}>
      <p className={styles.name}>Korolkov Alexander</p>
      <div className={styles.title}>
        <h1>saizaax</h1>
        <h1 className={styles.dev}>.dev</h1>
      </div>
      <p className={styles.occupation}>Frontend Developer ・ UI/UX Designer</p>
      <div className={styles.memoji}>
        <Image
          src={memoji}
          alt="saizaax"
          priority={true}
          width={165}
          height={165}
        />
      </div>
    </div>
  )
}

export { Title }
