import React from 'react'
import Greeting from '../../components/shared/greeting/Greeting'
import './Home.scss'



function Home() {
  return (
    <div className='home '>
      <Greeting 
        message={"Quantix helps companies build products from zero to hero."} 
        btnText={"Get Started"}
      />
      <div className="circle1"></div>
      <div className="circle2"></div>
    </div>
  )
}

export default Home