import React, { FC } from "react"
import styles from "@styles/SkillsItem.module.scss"

import Image from "next/image"
import { useTheme } from "next-themes"

import { Icon } from "@custom-types/StackIcon.type"

type Props = {
  name: string
  icon: Icon
}

const SkillsItem: FC<Props> = ({ name, icon }) => {
  const { theme } = useTheme()

  return (
    <div className={styles.container}>
      <Image
        src={theme === "dark" ? icon[0] : icon[1]}
        alt={name}
        layout="fixed"
        height={60}
        width={60}
      />
      <p>{name}</p>
    </div>
  )
}

export { SkillsItem }
