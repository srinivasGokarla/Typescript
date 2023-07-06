function addElementsIfGreater(inputArray) {
    let outputArray = [...inputArray];
    let sum = outputArray[0];
  
    for (let i = 1; i < outputArray.length; i++) {
      
  
      if (current > sum && current > outputArray[i - 1]) {
        sum += current;
        outputArray[0] = sum;
        
      } else {
        return outputArray;
      }
    }
  
    return outputArray;
  }
  
  // Example usage:
  let inputArray = [3, 5, 7, 50];
 // let outputArray = addElementsIfGreater(inputArray);
  
  console.log(outputArray);
  // let sum = inputArray[0]
  // let arr = []
  // for(let i= 0; i < inputArray.length; i++) {
  //     let current = inputArray[i]
  //     if(current <= sum) {
  //         sum = current + sum;
  //         arr.push(sum)
  //     } else {
  //         console.log(arr)
  //     }
  // }
  // console.log(arr)
  //  let out = []
  //  let init = 0
  //  let ans = inputArray.reduce((item,accum) => accum + item, init
  //  )
   
   //console.log(ans)
  