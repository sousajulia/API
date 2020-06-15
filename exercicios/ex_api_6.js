const axios = require('axios')
const rs = require('readline-sync')

var equacao = rs.question('Digite uma equação: ')

console.log(equacao)

axios.get(`https://newton.now.sh/simplify/${equacao}`)
    .then((resposta) => {
        var resposta = resposta.data
        var resultado = resposta.result
        console.log(resultado)
    })
    .catch((erro) => {
        console.log(erro)
    })