import React, { FC } from "react"
import styles from "@styles/ProjectPreview.module.scss"

import Image, { StaticImageData } from "next/image"

type Props = {
  preview: StaticImageData
}

const ProjectPreview: FC<Props> = ({ preview }) => {
  return (
    <div className={styles.preview} data-project-preview>
      <div className={styles.image}>
        <Image
          src={preview}
          alt="preview"
          layout="fixed"
          width={570}
          height={370}
        />
      </div>
    </div>
  )
}

export { ProjectPreview }
