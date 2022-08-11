import { useTheme } from "next-themes"
import React, { FC } from "react"

import Image from "next/image"

type Props = {
  logoDark: string
  logoLight: string
}

const ProjectLogo: FC<Props> = ({ logoDark, logoLight }) => {
  const { theme } = useTheme()

  return (
    <div>
      {theme === "light" ? (
        <Image src={logoLight} alt="logo" />
      ) : (
        <Image src={logoDark} alt="logo" />
      )}
    </div>
  )
}

export { ProjectLogo }
