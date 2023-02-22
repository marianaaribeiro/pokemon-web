import ReactDOM from 'react-dom/client'

import App from './App'
import { AppsProvider } from './contexts/AppsContext'

import 'pure-react-carousel/dist/react-carousel.es.css'
import './styles/tailwind.scss'
import './styles/global.scss'
import './styles/commons.scss'

const container = document.getElementById('root')!
const root = ReactDOM.createRoot(container)
root.render(
  <AppsProvider>
    <App />
  </AppsProvider>
)
