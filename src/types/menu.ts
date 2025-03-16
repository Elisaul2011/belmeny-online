export interface MenuItem {
  id: number
  title: string
  path?: string
  newTab: boolean
  submenu?: MenuItem[]
  externalLink?: boolean
  onClick?: () => void
}

export type Menu = MenuItem[]

