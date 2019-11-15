import React, { ReactElement, AnchorHTMLAttributes } from 'react'

export interface BreadcrumbLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  link: string
  text: string
}

const BreadcrumbLink = ({ link, text, ...props }: BreadcrumbLinkProps): ReactElement => (
  <a href={link} {...props}>{text}</a>
)

export default BreadcrumbLink
