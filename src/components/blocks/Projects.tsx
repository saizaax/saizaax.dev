import React from "react"
import styles from "@styles/Projects.module.scss"

import { Heading } from "@components/Heading"
import { ProjectCard } from "@components/ProjectCard"

/** Uncos **/
import uncosLogoDark from "@assets/projects/uncos-logo-dark.svg"
import uncosLogoLight from "@assets/projects/uncos-logo-light.svg"
import uncosPreview from "@assets/projects/uncos-preview.png"
import uncosBlur from "@assets/projects/uncos-blur.png"

/** Pizza **/
import pizzaLogoDark from "@assets/projects/pizza-logo-dark.svg"
import pizzaLogoLight from "@assets/projects/pizza-logo-light.svg"
import pizzaPreview from "@assets/projects/pizza-preview.png"
import pizzaBlur from "@assets/projects/pizza-blur.png"

/** Xanity **/
import xanityLogoDark from "@assets/projects/xanity-logo-dark.svg"
import xanityLogoLight from "@assets/projects/xanity-logo-light.svg"
import xanityPreview from "@assets/projects/xanity-preview.png"
import xanityBlur from "@assets/projects/xanity-blur.png"

/** Yet Another Schedule App **/
import scheduleLogoDark from "@assets/projects/schedule-logo-dark.svg"
import scheduleLogoLight from "@assets/projects/schedule-logo-light.svg"
import schedulePreview from "@assets/projects/schedule-preview.png"
import scheduleBlur from "@assets/projects/schedule-blur.png"

/** Studify **/
import studifyLogoDark from "@assets/projects/studify-logo-dark.svg"
import studifyLogoLight from "@assets/projects/studify-logo-light.svg"
import studifyPreview from "@assets/projects/studify-preview.png"
import studifyBlur from "@assets/projects/studify-blur.png"

/** Technologies **/
import js from "@assets/technologies/js.svg"
import react from "@assets/technologies/react.svg"
import spring from "@assets/technologies/spring.svg"
import postgresql from "@assets/technologies/postgresql.svg"
import ts from "@assets/technologies/ts.svg"
import nextLight from "@assets/technologies/next-light.svg"
import nextDark from "@assets/technologies/next-dark.svg"
import redux from "@assets/technologies/redux.svg"
import prismaLight from "@assets/technologies/prisma-light.svg"
import prismaDark from "@assets/technologies/prisma-dark.svg"
import nest from "@assets/technologies/nest.svg"
import mongodb from "@assets/technologies/mongodb.svg"
import nativeLight from "@assets/technologies/native-light.svg"
import nativeDark from "@assets/technologies/native-dark.svg"
import expressDark from "@assets/technologies/express-dark.svg"
import expressLight from "@assets/technologies/express-light.svg"

const Projects = () => {
  return (
    <div className={styles.projects} id="projects">
      <Heading title="My Projects" subtitle="Made with ❤️ and passion" />
      <div className={styles.container}>
        {/* Uncos */}
        <ProjectCard
          name="uncos"
          description="News Agency Website with admin dashboard. Made with React.js, Java Spring and PostgreSQL."
          logoDark={uncosLogoDark}
          logoLight={uncosLogoLight}
          url="https://uncos.saizaax.xyz"
          github="https://github.com/saizaax/uncos"
          stack={[
            [js, js],
            [react, react],
            [spring, spring],
            [postgresql, postgresql],
          ]}
          preview={uncosPreview}
          blur={uncosBlur}
        />

        <div className={styles.double}>
          {/* Next Pizza */}
          <ProjectCard
            name="pizza"
            description="Next Pizza Website. Made with Next.js, Redux, TypeScript, Prisma and PlanetScale."
            logoDark={pizzaLogoDark}
            logoLight={pizzaLogoLight}
            url="https://pizza.saizaax.xyz"
            github="https://github.com/saizaax/next-pizza"
            stack={[
              [ts, ts],
              [nextDark, nextLight],
              [react, react],
              [redux, redux],
              [prismaDark, prismaLight],
            ]}
            preview={pizzaPreview}
            blur={pizzaBlur}
            type="double"
          />

          {/* Xanity */}
          <ProjectCard
            name="xanity"
            description="Xanity — Hardware Store Website. Made with React.js, TypeScript, Nest.js, MongoDB."
            logoDark={xanityLogoDark}
            logoLight={xanityLogoLight}
            url="https://xanity.saizaax.xyz"
            github="https://github.com/saizaax/xanity"
            stack={[
              [ts, ts],
              [react, react],
              [nest, nest],
              [mongodb, mongodb],
            ]}
            preview={xanityPreview}
            blur={xanityBlur}
            type="double"
          />
        </div>

        {/* Yet Another Schedule App */}
        <ProjectCard
          name="schedule"
          description="Yet Another Schedule App — web schedule application for RTU MIREA university. Made with React.js, Express and PostgreSQL."
          logoDark={scheduleLogoDark}
          logoLight={scheduleLogoLight}
          url="https://schedule.saizaax.xyz"
          github="https://github.com/saizaax/yet-another-schedule-app"
          stack={[
            [ts, ts],
            [react, react],
            [expressDark, expressLight],
            [prismaDark, prismaLight],
            [postgresql, postgresql],
          ]}

          preview={schedulePreview}
          blur={scheduleBlur}
          previewShadow={true}
        />

        {/* Studify */}
        <ProjectCard
          name="studify"
          description="Schedule Native — mobile schedule-app for RTU MIREA university. Made with React Native and TypeScript."
          logoDark={studifyLogoDark}
          logoLight={studifyLogoLight}
          github="https://github.com/saizaax/schedule-native"
          stack={[
            [ts, ts],
            [nativeDark, nativeLight],
          ]}
          preview={studifyPreview}
          blur={studifyBlur}
          previewShadow={true}
        />
      </div>
    </div>
  )
}

export { Projects }
