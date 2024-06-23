import { useState } from 'react'
import InputComponents from './components/Input/InputComponents'

function App() {

  return (
    <>
    <div className='wrapper'>
        <InputComponents mode='phone'/>
        <InputComponents mode='name'/>
        <InputComponents mode='textarea'/>
        
    </div>
    
    
    </>
  )
}

export default App
