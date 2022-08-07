import React, { Fragment } from "react"
import styles from "@styles/Abstractions.module.scss"
import Image from "next/image"

import neon from "@assets/abstract-neon.png"
import bright from "@assets/abstract-bright.png"

const Abstractions = () => {
  return (
    <Fragment>
      <div className={styles.neon}>
        <Image src={neon} alt="" priority={true} width={432} height={596} />
      </div>
      <div className={styles.bright}>
        <Image src={bright} alt="" priority={true} width={412} height={543} />
      </div>
    </Fragment>
  )
}

export { Abstractions }
