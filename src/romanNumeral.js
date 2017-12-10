const numbers = {
    I : 1,
    V : 5,
    X : 10,
    L : 50,
    C : 100,
    D : 500,
    M : 1000
}
var value = 0
//this function only converts by 1 character
function Converter(char){
  var ourValue = parseInt(numbers[char]);
  // console.log(ourValue);
  return ourValue;
}
function romanNumerals(num){
  var placeHolder = [];
  romanString = num.split('');
  //let's iterate through our romanString
  for (character of romanString){
    placeHolder.push(Converter(character));
  }
  if (placeHolder[0]<placeHolder[1]){
    value = placeHolder[1]-placeHolder[0];
  }else{
    value = placeHolder[0]+placeHolder[1]
  }
  if (placeHolder.length > 2){
    for (let index=2; index < placeHolder.length; index++){
    value += placeHolder[index]
  }
  }
  return value;
}
console.log(romanNumerals('XXIV'));