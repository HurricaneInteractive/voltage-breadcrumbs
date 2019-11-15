/**
 * @class ExampleComponent
 */

import React, { ReactElement, AnchorHTMLAttributes } from 'react'

import styles from './styles.css'

export interface BreadcrumbLink extends AnchorHTMLAttributes<HTMLAnchorElement> {
  link: string
  text: string
}

type LinkOrReactElement = BreadcrumbLink

export type BreadcrumbProps = {
  links: Array<LinkOrReactElement>
  separator: string|null
}

const BreadcrumbLink = ({ link, text, ...props }: BreadcrumbLink): ReactElement => (
  <a href={link} {...props}>{text}</a>
)

const Breadcrumbs = ({ links, separator = "/" }: BreadcrumbProps): ReactElement => {

  const isLastIterator = (i: number): boolean => {
    return i === links.length - 1;
  }

  const breadcrumbLinkClassName = (i: number): string => {
    const classes = []
    isLastIterator(i) && classes.push(styles["voltage__breadcrumbs__link--active"])
    !isLastIterator(i) && classes.push(styles["voltage__breadcrumbs__link--truncate"])

    return classes.join(" ").trim()
  }

  return (
    <nav className={`voltage__breadcrumbs`}>
      {
        links && (
          <ul className={styles.voltage__breadcrumbs}>
            {
              links.map((link, i): ReactElement => (
                link ? (
                  <li key={i}>
                    <BreadcrumbLink
                      link={link.link}
                      text={link.text}
                      className={breadcrumbLinkClassName(i)}
                    />
                    {
                      !isLastIterator(i) && separator ? <span>{separator}</span> : ""
                    }
                  </li>
                ) : (
                  <></>
                )
              ))
            }
          </ul>
        )
      }
    </nav>
  )
}

export default Breadcrumbs
