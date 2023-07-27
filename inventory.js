function updateInventory(arr1, arr2) {
//update stock
    for(let i=0;i<arr2.length;i++){
        for(let j=0;j<arr1.length;j++){
        if(arr1[j][1]===arr2[i][1]){
        arr1[i][0]=arr2[j][0];
        } 
       }
    }
//update item
let arrN = [];
let arrO = [];

arr2.forEach(e => {
    // console.log(e[1],'X');
    arrN.push(e[1]);    
});

arr1.forEach(e => {
    // console.log(e[1],'X');
    arrO.push(e[1]);    
});

arrN.forEach(e => {
if(!arrO.includes(e)){
let index = arrN.indexOf(e);
console.log('Y',e, index);
arr1.push(arr2[index])
} 
})

// console.log(arrN,arrO);
    return arr1;
}

// Example inventory lists 
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

console.log(updateInventory(curInv, newInv));