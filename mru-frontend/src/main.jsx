import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Laptops from './Laptops.jsx'
import Mobiles from './Mobiles.jsx'
import Watches from './Watches.jsx'

createRoot(document.getElementById('root')).render(
<Laptops></Laptops>
)
createRoot(document.getElementById('root')).render(
<Mobiles></Mobiles>
)
createRoot(document.getElementById('root')).render(
    <Watches></Watches>
)