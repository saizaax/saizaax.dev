import React from "react"
import styles from "@styles/Biography.module.scss"

import { Heading } from "@components/Heading"
import { Bio } from "@components/Bio"

const Biography = () => {
  return (
    <div className={styles.biography}>
      <Heading title="Biography" subtitle="Few words about 🤓 me" />
      <div className={styles.container}>
        <Bio />
      </div>
    </div>
  )
}

export { Biography }
