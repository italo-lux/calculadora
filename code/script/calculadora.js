export class Calculadora {
    static operadores = ['/', '*', '-', '+']

    static calcular(calculo) {
        for (let o of this.operadores) {
            let ope = calculo.indexOf(o)
            while (ope !== -1) {
                if (o === '/') calculo.splice(ope - 1, 3, (+calculo[ope - 1]) / (+calculo[ope + 1]))
                if (o === '*') calculo.splice(ope - 1, 3, (+calculo[ope - 1]) * (+calculo[ope + 1]))
                if (o === '-') calculo.splice(ope - 1, 3, (+calculo[ope - 1]) - (+calculo[ope + 1]))
                if (o === '+') calculo.splice(ope - 1, 3, (+calculo[ope - 1]) + (+calculo[ope + 1]))
                ope = calculo.indexOf(o)
            }
        }
        return calculo
    }

    static formatar(calculo) {
        let novo = ''

        for (let i in calculo) {
            const eh_um_operador = this.operadores.includes(calculo[i])

            if (eh_um_operador) {
                novo += `,${calculo[i]},`
            } else {
                novo += calculo[i]
            }
        }
        novo = novo.split(',,').join('')
        novo = novo.split(',')
        return novo
    }
}