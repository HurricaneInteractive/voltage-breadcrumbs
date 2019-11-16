import React from "react"

import BreadcrumbList from "./BreadcrumbList"
import { BreadcrumbDropdownProps } from "../types"

class BreadcrumbDropdown extends React.Component<BreadcrumbDropdownProps, { active: boolean }> {
  constructor(props: BreadcrumbDropdownProps) {
    super(props)
    this.state = {
      active: false
    }
  }

  setActive = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    this.setState({
      active: !this.state.active
    })
  }

  render = () => {
    return (
      <>
        <a href="#" onClick={(e) => this.setActive(e)}>...</a>
        <ul style={{ display: `${this.state.active ? 'block' : 'none'}` }}>
          <BreadcrumbList links={this.props.links} shouldRenderSeperator={false} />
        </ul>
      </>
    )
  }
}

export default BreadcrumbDropdown
