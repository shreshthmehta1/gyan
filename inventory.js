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
    arr2.forEach(el => {
        // console.log(el[1],'x');
if(el[1]!=arr1[0][1] ){
    console.log(arr1[0][1],'XX',el[1]);
}
    });
    // console.log(arr1.includes(arr2)) 
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