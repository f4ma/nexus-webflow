/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { CountUp } from 'countup.js'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function counterUp() {
  window.Webflow ||= []
  window.Webflow.push(() => {
    let elements = $('.counterup')
    elements.each(function (index) {
      // Atribuir um ID único ao elemento
      let thisId = 'countup' + index
      $(this).attr('id', thisId)

      // Configurar as opções do CountUp
      let startNumber = +$(this).text()
      let endNumber = +$(this).attr('final-number')
      let decimals = 2
      let duration = $(this).attr('count-duration')
      let options = {
        startVal: startNumber,
        decimalPlaces: decimals,
        duration: duration,
        useEasing: true,
        useGrouping: true,
        separator: ',',
      }

      // Armazenar os dois últimos elementos em um array
      let lastTwoElements = elements.slice(-2)

      // Verificar se este é um dos dois últimos elementos
      if (lastTwoElements.index($(this)) !== -1) {
        // Criar uma nova instância do CountUp com incremento aleatório
        let countUp = new CountUp(thisId, 0, options)
        ScrollTrigger.create({
          trigger: $(this),
          start: 'top 80%',
          end: 'bottom top',
          onEnter: () => {
            // Iniciar a animação com um valor aleatório maior ou igual ao valor inicial
            let randomNumber =
              Math.floor(Math.random() * (endNumber - startNumber + 1)) +
              startNumber
            countUp.update(randomNumber)
            countUp.start()

            // Atualizar o valor a cada 3 segundos com um valor aleatório maior ou igual ao valor atual
            setInterval(() => {
              let currentValue = countUp.frameVal
              let randomIncrement = Math.floor(
                Math.random() * (endNumber - currentValue + 1)
              )
              let newValue = currentValue + randomIncrement
              if (newValue >= startNumber && newValue <= endNumber) {
                countUp.update(newValue)
              }
            }, 3000)
          },
        })
      } else {
        // Criar uma nova instância do CountUp sem incremento aleatório
        let countUp = new CountUp(
          thisId,
          startNumber,
          endNumber,
          decimals,
          duration,
          options
        )
        ScrollTrigger.create({
          trigger: $(this),
          start: 'top 80%',
          end: 'bottom top',
          onEnter: () => {
            countUp.start()
          },
        })
      }
    })
  })
}
