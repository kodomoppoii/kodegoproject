import React from "react"
import Heading from "../../common/heading/Heading"
import "./Hero.css"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row'>
            <Heading subtitle='We Prepare, Adapt, Create new things, and Embrace changes.' title='P. A. C. E.' />
            <p>Personalized Approach to Children with Exceptionalities.</p>
            <div className='button'>
              <button className='primary-btn'>
                BE A MEMBER <i className='fa fa-long-arrow-alt-right'></i>
              </button>
              <button>
                VIEW SERVICES <i className='fa fa-long-arrow-alt-right'></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className='margin'></div>
    </>
  )
}

export default Hero