import React from "react"
import styles from "@styles/BioCharacteristics.module.scss"

import { BioItem } from "@components/BioItem"

const BioCharacteristics = () => {
  return (
    <div className={styles.characteristics}>
      <BioItem name="Age" value="22 years old" />
      <BioItem name="Location" value="Russia, Moscow" />
      <BioItem
        name="Education"
        value="RTU MIREA University, Software Engineering Bachelor's degree"
      />
      <BioItem name="Additional Education" value="Yandex SHRI Autumn 2021" />
      <BioItem name="Total Experience" value="3.5+ years" />
      <BioItem
        name="Work 01"
        value="RTUITLab • April 2020 — November 2021"
      />
      <BioItem
        name="Work 02"
        value="Mind Rhythms, LLC • November 2021 — December 2022"
      />
      <BioItem
        name="Current Work"
        value="Black Wall Group • December 2022 — Current"
        isLast={true}
      />
    </div>
  )
}

export { BioCharacteristics }
