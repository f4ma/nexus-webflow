/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

export function cardstackAnimation() {
  // Crie a timeline de animação
  gsap
    .timeline({
      scrollTrigger: {
        trigger: '.sticky-wrapper',
        start: 'top 80%',
        end: '+=250%',
        scrub: 'true',
        preventOverlaps: 'true',
        fastScrollEnd: 'false',
      },
    })
    .to('.diferencial-cards_item', {
      y: '0%',
      ease: 'none',
      duration: 1,
      stagger: 1,
    })
    .to(
      '.diferencial-cards_item',
      { y: '-70%', scale: 0.4, ease: 'none', duration: 3, stagger: 1 },
      1
    )
    .to(
      '.diferencial-cards_item',
      { opacity: 0, ease: 'none', duration: 0.4, stagger: 1 },
      3.6
    )

  // Adicione um evento de clique para cada elemento ".diferencial-cards_item"
  // Adicione um evento de clique para cada elemento ".diferencial-cards_item"
  // Adicione um evento de clique para cada elemento ".diferencial-cards_item"
}
