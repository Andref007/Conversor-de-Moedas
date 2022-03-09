function ConverterDolar() {
  var valorElemento = document.getElementById("valor1")
  var valor = valorElemento.value
  var valorEmDolarNumerico = parseFloat(valor)


  var valorEmReal = valorEmDolarNumerico * 5.09
  

  var elementoValorConvertido = document.getElementById("valorConvertido1")
var valorConvertido = "O resultado em real é R$ " + valorEmReal
elementoValorConvertido.innerHTML = valorConvertido
} 

function ConverterEuro() {
  var valorElemento = document.getElementById("valor2")
  var valor = valorElemento.value
  var valorEmEuroNumerico = parseFloat(valor)


  var valorEmReal = valorEmEuroNumerico * 5.55
  

  var elementoValorConvertido = document.getElementById("valorConvertido2")
var valorConvertido = "O resultado em real é R$ " + valorEmReal
elementoValorConvertido.innerHTML = valorConvertido
} 

function ConverterPesoArgentino() {
  var valorElemento = document.getElementById("valor3")
  var valor = valorElemento.value
  var valorEmPesoArgentinoNumerico = parseFloat(valor)


  var valorEmReal = valorEmPesoArgentinoNumerico * 0.047
  

  var elementoValorConvertido = document.getElementById("valorConvertido3")
var valorConvertido = "O resultado em real é R$ " + valorEmReal
elementoValorConvertido.innerHTML = valorConvertido
} 

function ConverterIene() {
  var valorElemento = document.getElementById("valor4")
  var valor = valorElemento.value
  var valorEmIeneNumerico = parseFloat(valor)


  var valorEmReal = valorEmIeneNumerico * 0.044
  

  var elementoValorConvertido = document.getElementById("valorConvertido4")
var valorConvertido = "O resultado em real é R$ " + valorEmReal
elementoValorConvertido.innerHTML = valorConvertido
} 

function ConverterLibra() {
  var valorElemento = document.getElementById("valor5")
  var valor = valorElemento.value
  var valorEmIeneNumerico = parseFloat(valor)


  var valorEmReal = valorEmIeneNumerico * 6.59
  

  var elementoValorConvertido = document.getElementById("valorConvertido5")
var valorConvertido = "O resultado em real é R$ " + valorEmReal
elementoValorConvertido.innerHTML = valorConvertido
} 


