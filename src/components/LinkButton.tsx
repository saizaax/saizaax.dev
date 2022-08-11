import React, { FC } from "react"
import styles from "@styles/LinkButton.module.scss"
import Image from "next/image"

import arrowIcon from "@icons/arrow.svg"
import Link from "next/link"

type Props = {
  children?: React.ReactNode
  icon?: string
  style?: string
  arrow?: boolean
  url: string
}

const LinkButton: FC<Props> = ({ children, icon, style, arrow, url }) => {
  const Icon = icon ? <Image src={icon} alt="icon" /> : null
  const Arrow = arrow ? <Image src={arrowIcon} alt="arrow" /> : null

  return (
    <Link href={url}>
      <button className={`${styles.btn} ${style ? styles[style] : ""}`}>
        {children} {icon && arrow ? Icon : icon ? Icon : arrow ? Arrow : null}
      </button>
    </Link>
  )
}

export { LinkButton }
