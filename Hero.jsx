import React from "react"
import Heading from "../../common/Heading"
import "./hero.css"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <Heading title='Your Gateway to Easy Train Reservations' />
          
          <div className='hero-content'>
            <button className='btn-book'>
              Book Train Tickets
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
