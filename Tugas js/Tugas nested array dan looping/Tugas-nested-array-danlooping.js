function panggilNestedArray(value){
 // tulis jawabanmu disini
 for (var i = 0; i < value.length; i++){
   console.log('id :', value[i][0])
   console.log('name :', value[i][1])
   console.log('company :', value[i][2])
   console.log('\n')
 }
}

var nestedArray = [
   [1,2,3,4],
   ['Mark Zuckerberg', 'Elon Musk', 'Bill Gates', 'Steve Jobs'],
   ['Facebook', 'Tesla', 'Microsoft', 'Apple']
]

panggilNestedArray(nestedArray)
