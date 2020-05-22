function saldoDeMesesComLucro(umPeriodo) {
  var mesesLucro = []
  for (let mes = 0; mes < umPeriodo.length; mes++) {
    if (umPeriodo[mes] > 0){
      mesesLucro.push(umPeriodo[mes])
    }
  }
  return mesesLucro;
}
var periodo = [100, 20, 0, -10, 10]
saldoDeMesesComLucro(periodo)

