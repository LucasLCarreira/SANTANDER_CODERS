function naipeDeTruco(naipe){
  cartas = []
  for (var i = 1; i <= 12; i++){
    if (i > 0 && i <= 12 && i !== 8 && i !== 9){
      var carta = (i + " de " + naipe)
      cartas.push(carta)
    }
  }
  return cartas
}
naipeDeTruco('espadas')