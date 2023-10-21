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
import nodejs from "@assets/technologies/nodejs.svg"
import sass from "@assets/technologies/sass.svg"
import motion from "@assets/technologies/motion.svg"
import styled from "@assets/technologies/styled.svg"
import git from "@assets/technologies/git.svg"
import actions from "@assets/technologies/actions.svg"
import expressDark from "@assets/technologies/express-dark.svg"
import expressLight from "@assets/technologies/express-light.svg"
import bash from "@assets/technologies/bash.svg"
import docker from "@assets/technologies/docker.svg"
import traefik from "@assets/technologies/traefik.svg"
import gitlab from "@assets/technologies/gitlab.svg"
import tailwind from "@assets/technologies/tailwind.svg"
import reactQuery from "@assets/technologies/react-query.svg"
import zustand from "@assets/technologies/zustand.svg"
import jotai from "@assets/technologies/jotai.svg"
import i18next from "@assets/technologies/i18next.svg"
import reactHookForm from "@assets/technologies/react-hook-form.svg"
import jest from "@assets/technologies/jest.svg"
import go from "@assets/technologies/go.svg"
import drizzle from "@assets/technologies/drizzle.svg"
import fiber from "@assets/technologies/fiber.svg"
import playwright from "@assets/technologies/playwright.svg"

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
              { name: "Node.js", icon: [nodejs, nodejs] },
              { name: "Go", icon: [go, go] },
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
              { name: "Next.js", icon: [nextDark, nextLight] },
            ]}
          />

          {/* Libraries */}
          <SkillsGroup
            title="Libraries"
            technologies={[
              { name: "Tailwind CSS", icon: [tailwind, tailwind] },
              { name: "SCSS", icon: [sass, sass] },
              { name: "Styled", icon: [styled, styled] },
              { name: "Framer Motion", icon: [motion, motion] },
              { name: "Playwright", icon: [playwright, playwright] },
            ]}
          />
        </div>

        <div className={styles.row}>
          {/* Frontend */}
          <SkillsGroup
            technologies={[
              { name: "Redux", icon: [redux, redux] },
              { name: "React-Query", icon: [reactQuery, reactQuery] },
              { name: "Zustand", icon: [zustand, zustand] },
              { name: "Jotai", icon: [jotai, jotai] },
              { name: "i18next", icon: [i18next, i18next] },
              { name: "React Hook Form", icon: [reactHookForm, reactHookForm] },
              { name: "Jest", icon: [jest, jest] },
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
              { name: "Express.js", icon: [expressDark, expressLight] },
              { name: "Fiber", icon: [fiber, fiber] },
            ]}
          />

          {/* Databases */}
          <SkillsGroup
            title="Databases"
            technologies={[
              { name: "PostgreSQL", icon: [postgresql, postgresql] },
              { name: "MongoDB", icon: [mongodb, mongodb] },
            ]}
          />

          {/* ORM */}
          <SkillsGroup
            title="ORM"
            technologies={[
              { name: "Prisma", icon: [prismaDark, prismaLight] },
              { name: "Drizzle", icon: [drizzle, drizzle] },
            ]}
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
              { name: "Bash", icon: [bash, bash] },
            ]}
          />

          {/* DevOps */}
          <SkillsGroup
            title="DevOps"
            technologies={[
              { name: "Docker", icon: [docker, docker] },
              { name: "Traefik", icon: [traefik, traefik] },
              { name: "GitLab CI/CD", icon: [gitlab, gitlab] },
              { name: "GitHub Actions", icon: [actions, actions] },
            ]}
          />
        </div>
      </div>
    </div>
  )
}

export { HardSkills }
