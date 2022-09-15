import { lazy } from "react"
import PublicLayout from "./Layouts/PublicLayout"

const HomeContainer = lazy(() => import('./Containers/HomeContainer'))
const LoginContainer = lazy(() => import('./Containers/LoginContainer'))
const UserContainer = lazy(() => import('./Containers/UserContainer'))
const ArticleContainer = lazy(() => import('./Containers/ArticleContainer'))
const NotFoundContainer = lazy(() => import('./Containers/NotFoundContainer'))

const TestContainer = lazy(() => import('./Containers/TestContainer'))

export const routers = [
  {
    path: '/',
    container: HomeContainer,
    layout: PublicLayout
  },
  {
    path: '/login',
    container: LoginContainer,
    layout: PublicLayout
  },
  {
    path: '/sign-up',
    container: LoginContainer,
    layout: PublicLayout
  },
  {
    path: '/user',
    container: UserContainer,
    layout: PublicLayout
  },
  {
    path: '/add-article',
    container: ArticleContainer,
    layout: PublicLayout
  },
  {
    path: '/test',
    container: TestContainer,
    layout: PublicLayout
  },
  {
    path: '*',
    container: NotFoundContainer,
    layout: PublicLayout
  }

]