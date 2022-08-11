import React from "react"
import styles from "@styles/HardSkills.module.scss"

import { Heading } from "@components/Heading"
import { SkillsGroup } from "@components/SkillsGroup"

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

const HardSkills = () => {
  return (
    <div className={styles.skills}>
      <Heading title="Hard Skills" subtitle="List of technologies 🧑‍💻" />
      <div className={styles.container}>
        {/* Programming */}
        <div className={styles.row}>
          <SkillsGroup
            title="Programming"
            technologies={[
              { name: "JavaScript", icon: [js, js] },
              { name: "TypeScript", icon: [ts, ts] }
            ]}
          />
        </div>

        <hr />

        {/* Frontend / Libraries */}
        <div className={styles.row}>
          {/* Frontend */}
          <SkillsGroup
            title="Frontend"
            technologies={[
              { name: "React.js", icon: [react, react] },
              { name: "React Native", icon: [nativeDark, nativeLight] },
              { name: "Next.js", icon: [nextDark, nextLight] }
            ]}
          />

          {/* Libraries */}
          <SkillsGroup
            title="Libraries"
            technologies={[{ name: "Redux", icon: [redux, redux] }]}
          />
        </div>
      </div>
    </div>
  )
}

export { HardSkills }
