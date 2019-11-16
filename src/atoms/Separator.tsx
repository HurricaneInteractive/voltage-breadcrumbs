import React, { ReactElement } from "react"
import { SeperatorProps } from "../types"

const Seperator = ({ separator }: SeperatorProps): ReactElement => (
  <span className="seperator">{separator}</span>
)

export default Seperator
