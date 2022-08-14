import type { NextPage } from "next"
import React from "react"
import Head from "next/head"
import styles from "@styles/Home.module.scss"

import { Header } from "@components/Header"
import { Intro } from "@blocks/Intro"
import { Separator } from "@components/Separator"
import { Biography } from "@components/blocks/Biography"
import { Projects } from "@components/blocks/Projects"
import { HardSkills } from "@components/blocks/HardSkills"
import { Contacts } from "@components/blocks/Contacts"
import { Footer } from "@components/Footer"

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>saizaax.dev</title>
        <meta name="description" content="Personal Website — Portfolio 😎" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>
        {/* Intro */}
        <Intro />
        <Separator />
        {/* Biography */}
        <Biography />
        <Separator />
        {/* Projects */}
        <Projects />
        <Separator />
        {/* HardSkills */}
        <HardSkills />
        <Separator />
        {/* Contacts */}
        <Contacts />
      </main>
      <Footer />
    </div>
  )
}

export default Home
