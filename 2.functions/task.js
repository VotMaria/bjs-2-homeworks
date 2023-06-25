function getArrayParams(...arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    } else if (arr[i] < min) {
      min = arr[i];
    }
    sum += arr[i];
  }

  let avg = Number((sum / arr.length).toFixed(2));

  return { min: min, max: max, avg: avg };
}






function summElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  let sumElements = 0;

  for (let i = 0; i < arr.length; i++) {
    sumElements += arr[i];
    
  } 

  return sumElements;

}

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  let minElement = arr[0];
  let maxElement = arr[0];

  for (let i = 0; i < arr.length; i++) {
      if (arr[i] > maxElement) {
      maxElement = arr[i];
      } else if (arr[i] < minElement) {
      minElement = arr[i];
      } 

    }    

  let difference = maxElement - minElement;
  return difference;

}

function differenceEvenOddWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  let sumEvenElement = 0;
  let sumOddElement = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      sumEvenElement += arr[i];
    } else {
      sumOddElement += arr[i];
    }

  }
  let differenceEvenOdd = sumEvenElement - sumOddElement;
  return differenceEvenOdd;
}

function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  let sumEvenElements = 0;
  let countEvenElement = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      sumEvenElements += arr[i];
      countEvenElement += 1;
    }
  }
let result = sumEvenElements / countEvenElement;
return result;
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;

  for (let i = 0; i < arrOfArr.length; i++) {
    const workerResult = func(...arrOfArr[i]);
    if (workerResult > maxWorkerResult) {
      maxWorkerResult = workerResult;
    }
  }
return maxWorkerResult;

}
