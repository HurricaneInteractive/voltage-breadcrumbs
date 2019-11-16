import React, { ReactElement } from "react"
import BreadcrumbLink from "./BreadcrumbLink"
import Seperator from "./Separator"

import {
  BreadcrumbListProps,
  BreadcrumbLinkProps
} from "../types"

const BreadcrumbList = ({ links, separator, shouldRenderSeperator = true }: BreadcrumbListProps): ReactElement => {
  const isLastIterator = (i: number): boolean => i === links.length - 1

  const renderBreadcrumbListElem = (Component: ReactElement, key: number): ReactElement => (
    <li key={key}>
      {Component}
      { (!isLastIterator(key) && separator && shouldRenderSeperator) && <Seperator separator={separator} /> }
    </li>
  )

  const renderBreadcrumbsLinks = (): ReactElement => {
    let elements: ReactElement[] = []

    links.forEach((link: BreadcrumbLinkProps|ReactElement, i: number): void => {
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

  return renderBreadcrumbsLinks()
}

export default BreadcrumbList
