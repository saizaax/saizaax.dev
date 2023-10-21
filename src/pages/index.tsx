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
        <title>SAIZAAX.DEV</title>
        <meta name="description" content="Korolkov Alexander — Frontend Developer" />
        {/* OpenGraph */}
        <meta property="og:title" content="SAIZAAX.DEV" />
        <meta property="og:description" content="Korolkov Alexander — Frontend Developer" />
        <meta property="og:image" content="/assets/og.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://saizaax.dev" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SAIZAAX.DEV" />
        <meta name="twitter:description" content="Korolkov Alexander — Frontend Developer" />
        <meta name="twitter:image" content="/assets/og.jpg" />
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
