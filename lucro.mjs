function quantidadeDeMesesComLucro(umPeriodo) {
  var quantidade = 0 ;
  for (let mes = 0; mes < umPeriodo.length; mes++) {
    if (umPeriodo[mes] > 0){
      quantidade = quantidade + 1
    }
  }
  return quantidade;
}
var periodo = [1,2,3,4,-1]
quantidadeDeMesesComLucro(periodo)
