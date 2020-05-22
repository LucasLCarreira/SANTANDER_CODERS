function contem (array,item){
  var vetor = array
  var posicao = vetor.indexOf(item)
  return posicao >= 0
}

contem([8, 5], 5)