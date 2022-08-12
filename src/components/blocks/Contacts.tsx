import React, { FC } from 'react'
import styles from '@styles/Contacts.module.scss'

import { Heading } from '@components/Heading'
import { ContactLink } from '@components/ContactLink'

import telegram from "@icons/telegram.svg"
import email from "@icons/email.svg"

const Contacts: FC = () => {
  return (
    <div className={styles.contacts}>
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
          value="saizaax.off@gmail.com"
          url="mailto:saizaax.off@gmail.com"
        />
      </div>
    </div>
  )
}

export { Contacts }