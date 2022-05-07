import { RouteProps } from "react-router-dom"

type RouteMetaType = (string | Omit<RouteProps, 'component'>)

export type RouterMetaTypes = { [key: string] : RouteMetaType | RouteMetaType[] } 

const routerMeta: RouterMetaTypes = {
  Home: { path: '/' },
  About: ['/about', '/test'],
  Sugang: ['/sugang'],
}

export default routerMeta