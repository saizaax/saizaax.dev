import React from "react"
import styles from "@styles/HardSkills.module.scss"

import { Heading } from "@components/Heading"
import { SkillsGroup } from "@components/SkillsGroup"

/** Technologies **/
import js from "@assets/technologies/js.svg"
import react from "@assets/technologies/react.svg"
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
import nodejs from "@assets/technologies/nodejs.svg"
import sass from "@assets/technologies/sass.svg"
import motion from "@assets/technologies/motion.svg"
import styled from "@assets/technologies/styled.svg"
import git from "@assets/technologies/git.svg"
import actions from "@assets/technologies/actions.svg"
import photoshop from "@assets/technologies/photoshop.svg"
import expressDark from "@assets/technologies/express-dark.svg"
import expressLight from "@assets/technologies/express-light.svg"
import bash from "@assets/technologies/bash.svg"
import docker from "@assets/technologies/docker.svg"
import traefik from "@assets/technologies/traefik.svg"
import gitlab from "@assets/technologies/gitlab.svg"
import figma from "@assets/technologies/figma.svg"

const HardSkills = () => {
  return (
    <div className={styles.skills} id="skills">
      <Heading title="Hard Skills" subtitle="List of technologies 🧑‍💻" />
      <div className={styles.container}>
        {/* Programming */}
        <div className={styles.row}>
          <SkillsGroup
            title="Programming"
            technologies={[
              { name: "JavaScript", icon: [js, js] },
              { name: "TypeScript", icon: [ts, ts] },
              { name: "Node.js", icon: [nodejs, nodejs] }
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
            technologies={[
              { name: "Redux", icon: [redux, redux] },
              { name: "SCSS", icon: [sass, sass] },
              { name: "Framer Motion", icon: [motion, motion] },
              { name: "Styled", icon: [styled, styled] }
            ]}
          />
        </div>

        <hr />

        {/* Backend / Databases / ORM */}
        <div className={styles.row}>
          {/* Backend */}
          <SkillsGroup
            title="Backend"
            technologies={[
              { name: "Nest.js", icon: [nest, nest] },
              { name: "Express.js", icon: [expressDark, expressLight] }
            ]}
          />

          {/* Databases */}
          <SkillsGroup
            title="Databases"
            technologies={[
              { name: "PostgreSQL", icon: [postgresql, postgresql] },
              { name: "MongoDB", icon: [mongodb, mongodb] }
            ]}
          />

          {/* ORM */}
          <SkillsGroup
            title="ORM"
            technologies={[{ name: "Prisma", icon: [prismaDark, prismaLight] }]}
          />
        </div>

        <hr />

        {/* Other / DevOps */}
        <div className={styles.row}>
          {/* Other */}
          <SkillsGroup
            title="Other"
            technologies={[
              { name: "Git", icon: [git, git] },
              { name: "Bash", icon: [bash, bash] }
            ]}
          />

          {/* DevOps */}
          <SkillsGroup
            title="DevOps"
            technologies={[
              { name: "Docker", icon: [docker, docker] },
              { name: "Traefik", icon: [traefik, traefik] },
              { name: "GitLab CI/CD", icon: [gitlab, gitlab] },
              { name: "GitHub Actions", icon: [actions, actions] }
            ]}
          />
        </div>

        <hr />

        {/* Design */}
        <div className={styles.row}>
          {/* Design */}
          <SkillsGroup
            title="Design"
            technologies={[
              { name: "Figma", icon: [figma, figma] },
              { name: "Photoshop", icon: [photoshop, photoshop] }
            ]}
          />
        </div>
      </div>
    </div>
  )
}

export { HardSkills }
