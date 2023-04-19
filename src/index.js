import { createRoot } from 'react-dom/client'
import { App } from './App'
import Broken from './[id]/Broken'
const root = createRoot(document.querySelector('.root'))
root.render(<App />)

const broken = createRoot(document.querySelector('.broken'))
broken.render(<Broken />)