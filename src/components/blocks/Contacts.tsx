import React, { FC } from "react"
import styles from "@styles/Contacts.module.scss"

import { Heading } from "@components/Heading"
import { ContactLink } from "@components/ContactLink"

import telegram from "@icons/telegram.svg"
import email from "@icons/email.svg"

const Contacts: FC = () => {
  return (
    <div className={styles.contacts} id="contacts">
      <Heading title="Contacts" subtitle="Feel free to contact me 😉" />
      <div className={styles.container}>
        <ContactLink
          icon={telegram}
          title="Telegram"
          value="@saizaax"
          url="https://t.me/saizaax"
        />
        <ContactLink
          icon={email}
          title="Email"
          value="contact@saizaax.dev"
          url="mailto:contact@saizaax.dev"
        />
      </div>
    </div>
  )
}

export { Contacts }
