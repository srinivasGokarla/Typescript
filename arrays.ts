let str1 = "srinivas"

console.log(str1)

let names : string[] = ["sri", "nivas", "raju", "somu"];
let names1 : Array<string> = ["sri", "nivas", "raju", "somu"];

let items : (string | number | boolean)[] = ["fruits", 100, true, "cloths", 200 , false]
for(let i= 0; i < items.length; i++) {
    console.log(items[i])
}

let Items : Array<string | number | boolean> = ["fruits", 100, true, "cloths", 200 , false];
for(let k in Items) {
    console.log(Items[k])
}
console.log(names, names1, items, Items);

let array1: number[] = [1,2,3,4,5,6,7,3,4];
let array: Array<number> = [1,2,3,4,5,6,7,3,4];
for(let i= 0; i < arr1.length; i++){
    console.log(arr1[i])
    }

let multarray : number[][] = [[1,2], [3,4],[5,6]];
for(let i= 0; i < multarray.length; i++) {
    for(let j = 0; j < multarray[i].length; j++) {
        console.log(multarray[i][j])
    }
}

let multiarray1 : (string | number)[][] = [[1,"xyz"], [2,"bcd"]]
for(let i in multiarray1) {
    for(let j in multiarray1[i]) {
        console.log(multiarray1[i][j])
    }
}




 





