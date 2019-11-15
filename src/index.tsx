/**
 * @class ExampleComponent
 */

import React, { ReactElement } from 'react'

import styles from './styles.css'

export type BreadcrumbProps = {
  text: string
}

const Breadcrumbs = ({ text }: BreadcrumbProps): ReactElement => {
  return (
    <nav className={styles.voltage__breadcrumbs}>

    </nav>
  )
}

export default Breadcrumbs
