import {
    Calculadora
} from './script/calculadora.js'

const monitor = document.querySelector('.calculadora input')
const buttons = document.querySelectorAll('.calculadora button')

for (let i = 0; i < buttons.length - 2; i++) {
    buttons[i].onclick = e => {
        monitor.value += buttons[i].textContent
    }
}

const result = document.querySelector('.resultado button')
const limpar = document.querySelector('#limpar')

result.onclick = () => {
    let calculo = monitor.value

    calculo = Calculadora.formatar(calculo)
    calculo = Calculadora.calcular(calculo)

    monitor.value = calculo
}

limpar.onclick = () => {
    monitor.value = ''
}