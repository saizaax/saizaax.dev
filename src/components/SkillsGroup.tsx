import React, { FC } from "react"
import styles from "@styles/SkillsGroup.module.scss"

import { Technology } from "@custom-types/Technology.type"
import { SkillsItem } from "./SkillsItem"

type Props = {
  title: string
  technologies: Technology[]
}

const SkillsGroup: FC<Props> = ({ title, technologies }) => {
  return (
    <div className={styles.group}>
      <p className={styles.title}>{title}</p>
      <div className={styles.container}>
        {technologies.map((item, index) => (
          <SkillsItem name={item.name} icon={item.icon} key={index} />
        ))}
      </div>
    </div>
  )
}

export { SkillsGroup }
