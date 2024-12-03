import React from 'react'
import { Element, Link as LinkScroll } from 'react-scroll'
import Button from '../components/Button'

const Hero = () => {
  return (
    <section className='relative pt-60 pb-40 max-lg:pt-52 max-lg:pb-36 max-md:pt-36 max-md:pb-32'>
      <Element name="hero">
          <div className="container">
               <div className="relative z-2 max-w-512 max-lg:max-w-388">
                    <div className='caption small-2 uppercase text-p3'>
                         Saas Landing page
                    </div>
                    <h1 className="mb-6 h2 text-p4 uppercase max-lg:mb-7 max-lg:h2 max-md:text-5xl max-md:leading-12">
                         Incredibly secure
                    </h1>
                    <p className='max-w-440 mb-14 body-1 max-md:mb-10'>We designed SecureCore to be user-friendly, quick to implement, and remarkably powerful for protecting your business.</p>
                    <LinkScroll to="features" offset={-100} spy smooth>
                         <Button icon="/images/zap.svg">Try it now</Button>
                    </LinkScroll>
               </div>

               <div className="absolute -top-32 w-[1230px] pointer-events-none left-[calc(50%-340px)] hero-img_res">
                    <img src="/images/hero.png" alt="hero" className='size-1230 max-lg:h-auto' />
               </div>
          </div>
      </Element>
    </section>
  )
}

export default Hero