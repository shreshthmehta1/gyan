function pairwise(arr, arg) {
let pair = [];
 for(let j=0;j<arr.length;j++){
  for(let i=j+1;i<arr.length;i++){
   if(arr[j]+arr[i]===arg && !pair.includes(j) && !pair.includes(i)){
    pair.push(i,j);
   }
}
}
console.log(pair)
console.log(pair.reduce((a,b)=>a+b))
return pair.reduce((a,b)=>a+b)

    // return arg;
}

// pairwise([1,4,2,3,0,5], 7);
pairwise([1, 3, 2, 4], 4)