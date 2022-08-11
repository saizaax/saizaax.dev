import React, { FC } from "react"
import styles from "@styles/StackIcon.module.scss"
import Image from "next/image"

type Props = {
  icon: string
}

const StackIcon: FC<Props> = ({ icon }) => {
  return (
    <div className={styles.stack}>
      <div className={styles.image}>
        <Image src={icon} alt="stack" />
      </div>
    </div>
  )
}

export { StackIcon }
