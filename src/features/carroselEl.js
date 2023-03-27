/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import Splide from '@splidejs/splide'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function carroselEl() {
  window.Webflow ||= []
  window.Webflow.push(() => {
    let splides = $('.splide')
    for (let i = 0, splideLength = splides.length; i < splideLength; i++) {
      new Splide(splides[i], {
        // Desktop on down
        perPage: 3,
        perMove: 2,
        throttle: 300,
        flickMaxPages: 3,
        drag: 'free',
        focus: 0, // 0 = left and 'center' = center
        type: 'slide', // 'loop' or 'slide'
        gap: '2em', // space between slides
        arrows: 'slider', // 'slider' or false
        pagination: false, // 'slider' or false
        speed: 600, // transition speed in miliseconds
        dragAngleThreshold: 60, // default is 30
        autoWidth: true, // for cards with differing widths
        rewind: false, // go back to beginning when reach end
        rewindSpeed: 400,
        waitForTransition: false,
        updateOnMove: true,
        trimSpace: true, // true removes empty space from end of list
        breakpoints: {
          991: {
            // Tablet
            perPage: 2,
            gap: '3vw',
          },
          767: {
            // Mobile Landscape
            perPage: 1,
            gap: '3vw',
          },
          479: {
            // Mobile Portrait
            perPage: 1,
            gap: '3vw',
          },
        },
      }).mount()
    }
    Observer.create({
      target: '.splide__list',
      type: 'pointer,touch',
      onChangeX: (self) => {
        let velocity = 1 - Math.abs(self.velocityX * 0.0002)
        let amount = gsap.utils.clamp(0.8, 1, velocity)
        gsap.to('.clientes_wrapper', {
          scale: amount,
          ease: 'none',
          duration: 0.6,
          overwrite: true,
        })
      },
      onStop: () => {
        gsap.to('.clientes_wrapper', {
          scale: 1,
          ease: 'power1',
          duration: 0.2,
          overwrite: true,
        })
      },
    })
  })
}
