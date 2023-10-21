import React from "react"
import styles from "@styles/BioCharacteristics.module.scss"

import { BioItem } from "@components/BioItem"

const BioCharacteristics = () => {
  return (
    <div className={styles.characteristics}>
      <BioItem name="Age" value="24 years old" />
      <BioItem name="Location" value="Russia, Moscow" />
      <BioItem
        name="Education"
        value="RTU MIREA University, Software Engineering Master's and Bachelor's degrees"
      />
      <BioItem name="Additional Education" value="Yandex SHRI Autumn 2021" />
      <BioItem name="Total Experience" value="5+ years" />
      <BioItem name="Work 01" value="RTUITLab • October 2020 — November 2022" />
      <BioItem
        name="Work 02"
        value="Black Wall Group • November 2022 — December 2023"
      />
      <BioItem
        name="Current"
        value="Sber • SberBusiness • December 2023 — Current"
        isLast={true}
      />
    </div>
  )
}

export { BioCharacteristics }
