import { useState } from 'react'

//import './App.css'
import Lista from './components.jsx/Lista'
import Lista2 from './components.jsx/Lista2'
import Lista3 from './components.jsx/Lista3'

function App() {
  const [count, setCount] = useState(0)

  return (
  <>
  
  <Lista/>
  <Lista2/>
  <Lista3/>
  
  
  </>

  )
}

export default App
