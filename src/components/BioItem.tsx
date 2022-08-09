import React, { FC } from "react"
import styles from "@styles/BioItem.module.scss"

import { BioItemLine } from "./BioItemLine"

type Props = {
  name: string
  value: string
  isLast?: boolean
}

const BioItem: FC<Props> = ({ name, value, isLast }) => {
  return (
    <div className={styles.container}>
      <BioItemLine isLast={isLast} />
      <div className={styles.text}>
        <p className={styles.name}>{name}</p>
        <p className={styles.value}>{value}</p>
      </div>
    </div>
  )
}

export { BioItem }
