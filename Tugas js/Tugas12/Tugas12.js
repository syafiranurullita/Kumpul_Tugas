function panggilShift(){
  var kota = ['pisang','jeruk','apel','mangga'];
  console.log(kota);
  console.log("===========================")
  // kota = kota.shift();

  var kota2 = kota.shift()
  console.log(kota2)
  kota.pop()

  return kota
}
console.log(panggilShift());
