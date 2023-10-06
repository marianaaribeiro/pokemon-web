import { lazy } from 'react'
import {
  BrowserRouter,
  Routes as ReactRoutes,
  Route as ReactRoute,
} from 'react-router-dom'

import { Fallback } from './Fallback'

const Home = lazy(() => import('../pages/Home'))
const ListPokemon = lazy(() => import('../pages/ListPokemon'))
const PokemonDetails = lazy(() => import('../pages/DetailsPokemon'))
const NotFound = lazy(() => import('../pages/NotFound'))

export function Routes(): JSX.Element {
  return (
    <BrowserRouter>
      <ReactRoutes>
        <ReactRoute
          path="/"
          element={
            <Fallback>
              <Home />
            </Fallback>
          }
        >
          <ReactRoute
            path="/"
            element={
              <Fallback>
                <ListPokemon />
              </Fallback>
            }
          >
            <ReactRoute
              path=":pokemonId"
              element={
                <Fallback>
                  <PokemonDetails />
                </Fallback>
              }
            />
          </ReactRoute>

          <ReactRoute
            path="favorites"
            element={
              <Fallback>
                <ListPokemon />
              </Fallback>
            }
          >
            <ReactRoute
              path=":pokemonId"
              element={
                <Fallback>
                  <PokemonDetails />
                </Fallback>
              }
            />
          </ReactRoute>

          <ReactRoute
            path="*"
            element={
              <Fallback>
                <NotFound />
              </Fallback>
            }
          />
        </ReactRoute>
      </ReactRoutes>
    </BrowserRouter>
  )
}
