// verifique se a sua idade é maior do que a de algum parente
// dependendo do resultado coloque no console 'é maior', 'é igual', 'é menor':

var minhaIdade = 20
var idadeParente = 20

if (minhaIdade == idadeParente) {
  console.log('é igual')
} else if (minhaIdade > idadeParente) {
  console.log('é maior')
} else {
  console.log('é menor')
}

// qual o valor é retornado na seguinte expressão?
var expressao = 5 - 2 && 5 - ' ' && 5 - 2
console.log(expressao)

//verifique as seguintes variáveis são truthy ou falsy:

var nome = 'André' // truthy;
var idade = 28 // truthy
var possuiDoutorado = false // falsy;
var empregoFuturo //falsy
var dinheiroNaConta = 0 //falsy

if (nome) {
  console.log
}
1:28:02