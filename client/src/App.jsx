import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='w-full h-screen text-center text-4xl justify-items-center text-blue-700 flex items-center'>
        <main>
          <h1>Twitter Project</h1>
        </main>
      </div>
      
    </>
  )
}

export default App
