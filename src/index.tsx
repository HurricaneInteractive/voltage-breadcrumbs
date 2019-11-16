import React, { ReactElement } from 'react'

import styles from './styles.css'

import {
  BreadcrumbDropdown,
  BreadcrumbList
} from "./atoms"

import {
  BreadcrumbProps,
  linkDefinition
} from "./types"
import Seperator from './atoms/Separator'

const Breadcrumbs = ({ links, separator = "/" }: BreadcrumbProps): ReactElement => {
  let dropdownLinks: linkDefinition|null = null;
  let topLevelLinks: linkDefinition = links;

  if (links.length > 3) {
    dropdownLinks = links;
    topLevelLinks = dropdownLinks.splice(dropdownLinks.length - 3);
  }

  const renderDropdownLinks = (): ReactElement => {
    return dropdownLinks ? (
      <li className={styles.voltage__breadcrumbs__dropdown}>
        <BreadcrumbDropdown links={dropdownLinks} />
        { separator && <Seperator separator={separator} /> }
      </li>
    ) : <></>
  }

  return (
    <nav className={`voltage__breadcrumbs`}>
      <ul className={styles.voltage__breadcrumbs}>
        { renderDropdownLinks() }
        <BreadcrumbList links={topLevelLinks} separator={separator} />
      </ul>
    </nav>
  )
}

export default Breadcrumbs
