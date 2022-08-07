import React from 'react'
import styles from "@styles/Intro.module.scss"

import { Socials } from '@components/Socials'
import { Title } from '@components/Title'
import { Abstractions } from '@components/Abstractions'

const Intro = () => {
  return (
    <div className={styles.intro}>
      <Abstractions />
      <div className={styles.container}>
        <Title />
        <Socials />
      </div>
    </div>
  )
}

export { Intro }