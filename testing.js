
var number=function(array){
  
  return array.map((str,index)=> `${index +1}: ${str}`);
}
console.log(number(["a","b","c"]));