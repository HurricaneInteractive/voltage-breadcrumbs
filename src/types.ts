import { ReactElement, AnchorHTMLAttributes } from "react"

export type BreadcrumbProps = {
  links: linkDefinition
  separator?: separatorType
}
export interface BreadcrumbListProps extends BreadcrumbProps {
  shouldRenderSeperator?: boolean
}
export interface BreadcrumbLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  link: string
  text: string
}
export type linkDefinition = BreadcrumbLinkProps[]|ReactElement[]
export type separatorType = string|null|ReactElement
export type BreadcrumbDropdownProps = {
  links: linkDefinition
}
export interface SeperatorProps {
  separator: separatorType
}
