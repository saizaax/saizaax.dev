import React from "react"
import styles from "@styles/Projects.module.scss"

import { Heading } from "@components/Heading"
import { ProjectCard } from "@components/ProjectCard"

/** Technologies **/
import react from "@assets/technologies/react.svg"

/** Uncos **/
import uncosLogoDark from "@assets/projects/uncos-logo-dark.svg"
import uncosLogoLight from "@assets/projects/uncos-logo-light.svg"
import uncosPreview from "@assets/projects/uncos-preview.png"
import uncosBlur from "@assets/projects/uncos-blur.png"

const Projects = () => {
  return (
    <div className={styles.projects}>
      <Heading title="My Projects" subtitle="Made with ❤️ and passion" />
      <div className={styles.container}>
        {/* UNCOS */}
        <ProjectCard
          name="uncos"
          description="News Agency Website with admin dashboard. Made with React.js, Java Spring and PostgreSQL."
          logoDark={uncosLogoDark}
          logoLight={uncosLogoLight}
          url="https://uncos.saizaax.ru"
          github="https://github.com/xaazias/uncos"
          stack={[react]}
          preview={uncosPreview}
          blur={uncosBlur}
        />

        <div className={styles.double}>
          {/*  */}
          <ProjectCard
            name="uncos"
            description="News Agency Website with admin dashboard. Made with React.js, Java Spring and PostgreSQL."
            logoDark={uncosLogoDark}
            logoLight={uncosLogoLight}
            url="https://uncos.saizaax.ru"
            github="https://github.com/xaazias/uncos"
            stack={[react]}
            preview={uncosPreview}
            blur={uncosBlur}
            type="double"
          />

          {/*  */}
          <ProjectCard
            name="uncos"
            description="News Agency Website with admin dashboard. Made with React.js, Java Spring and PostgreSQL."
            logoDark={uncosLogoDark}
            logoLight={uncosLogoLight}
            url="https://uncos.saizaax.ru"
            github="https://github.com/xaazias/uncos"
            stack={[react]}
            preview={uncosPreview}
            blur={uncosBlur}
            type="double"
          />
        </div>

        <ProjectCard
          name="uncos"
          description="News Agency Website with admin dashboard. Made with React.js, Java Spring and PostgreSQL."
          logoDark={uncosLogoDark}
          logoLight={uncosLogoLight}
          url="https://uncos.saizaax.ru"
          github="https://github.com/xaazias/uncos"
          stack={[react]}
          preview={uncosPreview}
          blur={uncosBlur}
        />
      </div>
    </div>
  )
}

export { Projects }
