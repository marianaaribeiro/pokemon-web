import { lazy } from 'react'
import {
  BrowserRouter,
  Routes as ReactRoutes,
  Route as ReactRoute,
} from 'react-router-dom'

import { Fallback } from './Fallback'

const Pokemon = lazy(() => import('../pages/Pokemon'))
const Favorite = lazy(() => import('../pages/Favorite'))
const NotFound = lazy(() => import('../pages/NotFound'))
const Detail = lazy(() => import('../pages/Detail'))

export function Routes(): JSX.Element {
  return (
    <BrowserRouter>
      <ReactRoutes>
        <ReactRoute
          path="/"
          element={
            <Fallback>
              <Pokemon />
            </Fallback>
          }
        />

        <ReactRoute
          path="/favorite"
          element={
            <Fallback>
              <Favorite />
            </Fallback>
          }
        />

        <ReactRoute
          path="/detail/:id"
          element={
            <Fallback>
              <Detail />
            </Fallback>
          }
        />

        <ReactRoute
          path="*"
          element={
            <Fallback>
              <NotFound />
            </Fallback>
          }
        />
      </ReactRoutes>
    </BrowserRouter>
  )
}
