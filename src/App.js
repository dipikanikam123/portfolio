import React from 'react'
import Background from './component/Background '
import Secondpage from './component/Secondpage'

import img from '../src/assets/bg.svg'



const App = () => {
  return (
    <>
    <div className='first-container'>
      <div className='particles-container' >
        <Background />
      </div>

      <div className='hero-container'>

        <div className='info-container'>
          <div className='child-info'>
            <h1 className='name-text'>I Am  Dipika Nikam</h1>
            <h1>Frontend Developer</h1>
            <p>my name is dipika nikam from nashik, i have recently complete batchlor degree of computer science </p>
          </div>
          <div >
            <button className='btn'>Resume</button>
          </div>
        </div>

        <div className='img-container'>
          <div className='img'>
            <img src={img} height={'100%'} width={'100%'} />
          </div>
        </div>
        
      </div>
    </div>
    <Secondpage />
   
    </>
  )
}

export default App
