import React from "react"
import styles from "@styles/BioCharacteristics.module.scss"

import { BioItem } from "@components/BioItem"

const BioCharacteristics = () => {
  return (
    <div className={styles.characteristics}>
      <BioItem name="Age" value="21 years old" />
      <BioItem name="Location" value="Russia, Moscow" />
      <BioItem
        name="Education"
        value="RTU MIREA University, Software Engineering Bachelor's degree"
      />
      <BioItem name="Additional Education" value="Yandex SHRI Autumn 2021" />
      <BioItem name="Total Experience" value="1+ year" />
      <BioItem
        name="Work"
        value="RTUITLab • April 2021 — Current"
        isLast={true}
      />
    </div>
  )
}

export { BioCharacteristics }
