function removeOdd(array) {
  return array.filter(el => {return el % 2 == 0})

}

array = [1,2,3,4,5,6,7,8]
console.log(removeOdd(array))