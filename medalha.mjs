function medalhaDeAcordoComPosto(numero){
  var medalha = ['ouro','prata','bronze','nada','nada']
  if (numero > 3){
    return medalha[4]
  }
  return medalha[numero - 1]
}

medalhaDeAcordoComPosto(6)