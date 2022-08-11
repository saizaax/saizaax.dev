import React from "react"
import styles from "@styles/Separator.module.scss"

const Separator = () => {
  return (
    <div className={styles.separator}>
      <div className={styles.active}></div>
      <div className={styles.default}></div>
    </div>
  )
}

export { Separator }
