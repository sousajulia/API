// (OBRIGATORIO)Solicite ao usuário para inserir yes ou no
// Após isso utilize a API https://yesno.wtf/api
// Esta api traz um dado aleatório yes ou no
// No final imprima se o usuário acertou ou não

const axios = require("axios")
var rs = require("readline-sync")
var sn = rs.question("Digite yes ou no: ")

axios.get(`https://yesno.wtf/api`) 
.then((resposta) => {
    console.log(`O programa disse: ${resposta.data.answer}`)
    if(sn == resposta.data.answer){
    console.log("acertou mizeravi")
}
    else{
    console.log("que pena, voce errou")
}
})

.catch((erro) => {
    console.log(erro)
    
}) 
