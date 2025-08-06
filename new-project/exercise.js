function arrayStats(num){
const sum= num.reduce((sum,num)=>sum+num ,0);

const average= parseFloat((sum/num.length).toFixed(2));

const min=Math.min(...num);
const max=Math.max(...num);
return {sum,average,min,max};
}

console.log(arrayStats([1, 2, 3, 4, 5]));