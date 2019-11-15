import React, { ReactElement } from 'react'

import styles from './styles.css'

import {
  BreadcrumbLinkProps, BreadcrumbLink
} from "./atoms"

type linkDefinition = BreadcrumbLinkProps[]|ReactElement[]

export type BreadcrumbProps = {
  links: linkDefinition
  separator: string|null|ReactElement
}

const Breadcrumbs = ({ links, separator = "/" }: BreadcrumbProps): ReactElement => {
  let dropdownLinks: linkDefinition|null = null;
  let topLevelLinks: linkDefinition = links;

  if (links.length > 3) {
    dropdownLinks = links;
    topLevelLinks = dropdownLinks.splice(dropdownLinks.length - 3);
  }

  const isLastIterator = (i: number): boolean => i === topLevelLinks.length - 1
  const renderSeperator = (): ReactElement => <span className="seperator">{separator}</span>

  const renderDropdownLinks = (): ReactElement => {
    return dropdownLinks ? (
      <li className={styles.voltage__breadcrumbs__dropdown}>
        <a href="#">...</a>
        { separator && renderSeperator() }
      </li>
    ) : <></>
  }

  const renderBreadcrumbListElem = (Component: ReactElement, key: number): ReactElement => (
    <li key={key}>
      {Component}
      { (!isLastIterator(key) && separator) && renderSeperator() }
    </li>
  )

  const renderBreadcrumbsLinks = (): ReactElement => {
    let elements: ReactElement[] = []

    topLevelLinks.forEach((link: BreadcrumbLinkProps|ReactElement, i: number): void => {
      elements.push(
        renderBreadcrumbListElem(
          React.isValidElement(link) ? (
            link
          ) : (
            <BreadcrumbLink {...link} />
          ),
          i
        )
      )
    })

    return <>{elements}</>
  }

  return (
    <nav className={`voltage__breadcrumbs`}>
      <ul className={styles.voltage__breadcrumbs}>
        { renderDropdownLinks() }
        { renderBreadcrumbsLinks() }
      </ul>
    </nav>
  )
}

export default Breadcrumbs
