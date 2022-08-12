import React, { FC, MouseEventHandler } from "react"

import Link from "next/link"

type Props = {
  toggleMenu?: MouseEventHandler<HTMLAnchorElement>
}

const Links: FC<Props> = ({ toggleMenu }) => {
  return (
    <React.Fragment>
      <Link href="#intro">
        <a onClick={toggleMenu}>Socials</a>
      </Link>
      <Link href="#biography">
        <a onClick={toggleMenu}>Biography</a>
      </Link>
      <Link href="#projects">
        <a onClick={toggleMenu}>Projects</a>
      </Link>
      <Link href="#skills">
        <a onClick={toggleMenu}>Skills</a>
      </Link>
      <Link href="#contacts">
        <a onClick={toggleMenu}>Contacts</a>
      </Link>
    </React.Fragment>
  )
}

export { Links }
