import React, { ReactElement, useState } from "react"

import BreadcrumbList from "./BreadcrumbList"
import { BreadcrumbDropdownProps } from "../types"

const BreadcrumbDropdown = ({links}: BreadcrumbDropdownProps): ReactElement => {
  const [active, setActive] = useState(false)

  return (
    <>
      <a href="#" onClick={(e) => {
        e.preventDefault()
        setActive(!active)
      }}>...</a>
      <ul style={{ display: `${active ? 'block' : 'none'}` }}>
        <BreadcrumbList links={links} shouldRenderSeperator={false} />
      </ul>
    </>
  )
}

export default BreadcrumbDropdown
