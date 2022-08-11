import React, { FC } from "react"
import styles from "@styles/ProjectCard.module.scss"

import { StaticImageData } from "next/image"

import { ProjectLogo } from "./ProjectLogo"
import { ProjectStack } from "./ProjectStack"
import { ProjectLinks } from "./ProjectLinks"
import { ProjectPreview } from "./ProjectPreview"
import { ProjectBlur } from "./ProjectBlur"

type Props = {
  name: string
  description: string
  logoDark: string
  logoLight: string
  url?: string
  github: string
  stack: string[]
  preview: StaticImageData
  blur: StaticImageData
  type?: "double"
}

const ProjectCard: FC<Props> = ({
  name,
  description,
  logoDark,
  logoLight,
  url,
  github,
  stack,
  preview,
  blur,
  type
}) => {
  return (
    <div className={`${styles.card} ${type ? styles.double : ""}`}>
      <div className={styles.info}>
        {/* Light & Dark Logo */}
        <ProjectLogo logoDark={logoDark} logoLight={logoLight} />

        {/* Stack & Description */}
        <div className={styles.text}>
          <ProjectStack stack={stack} />
          <p>{description}</p>
        </div>

        {/* Preview & GitHub Links */}
        <ProjectLinks url={url} github={github} name={name} />
      </div>

      {/* Preview Image */}
      <ProjectPreview preview={preview} />

      {/* Blur */}
      <ProjectBlur blur={blur} />
    </div>
  )
}

export { ProjectCard }
