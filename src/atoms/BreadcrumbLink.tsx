import React, { ReactElement } from 'react'

import { BreadcrumbLinkProps } from "../types"

const BreadcrumbLink = ({ link, text, ...props }: BreadcrumbLinkProps): ReactElement => (
  <a href={link} {...props}>{text}</a>
)

export default BreadcrumbLink
