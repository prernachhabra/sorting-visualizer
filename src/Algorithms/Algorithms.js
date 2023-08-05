export function getMergeSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    const auxiliaryArray = array.slice();
    mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
    return animations;
  }
  
  function mergeSortHelper(
    mainArray,
    startIdx,
    endIdx,
    auxiliaryArray,
    animations,
  ) {
    if (startIdx === endIdx) return;
    const middleIdx = Math.floor((startIdx + endIdx) / 2);
    mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
    mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
    doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
  }
  
  function doMerge(
    mainArray,
    startIdx,
    middleIdx,
    endIdx,
    auxiliaryArray,
    animations,
  ) {
    let k = startIdx;
    let i = startIdx;
    let j = middleIdx + 1;
    while (i <= middleIdx && j <= endIdx) {
      animations.push([i, j]);
      animations.push([i, j]);
      if (auxiliaryArray[i] <= auxiliaryArray[j]) {
        animations.push([k, auxiliaryArray[i]]);
        mainArray[k++] = auxiliaryArray[i++];
      } else {
        animations.push([k, auxiliaryArray[j]]);
        mainArray[k++] = auxiliaryArray[j++];
      }
    }
    while (i <= middleIdx) {
      animations.push([i, i]);
      animations.push([i, i]);
      animations.push([k, auxiliaryArray[i]]);
      mainArray[k++] = auxiliaryArray[i++];
    }
    while (j <= endIdx) {
      animations.push([j, j]);
      animations.push([j, j]);
      animations.push([k, auxiliaryArray[j]]);
      mainArray[k++] = auxiliaryArray[j++];
    }
}
export function bubbleSort(array) {
    const animations = [];
    const n = array.length;
  
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {

        if (array[j] > array[j + 1]) {

          animations.push([j, j + 1]);

          const temp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = temp;
  
          animations.push([j, array[j]]);
          animations.push([j + 1, array[j + 1]]);
        }
      }
    }
  
    return animations;
  }

function heapify(arr, n, i, animations) {
    let largest = i; 
    const left = 2 * i + 1; 
    const right = 2 * i + 2; 
  
    if (left < n && arr[left] > arr[largest])
      largest = left;

    if (right < n && arr[right] > arr[largest])
      largest = right;
  
    if (largest !== i) {
      animations.push([i, largest]);
      animations.push([i, arr[largest]]); 
      animations.push([largest, arr[i]]); 
  
      [arr[i], arr[largest]] = [arr[largest], arr[i]];

      heapify(arr, n, largest, animations);
    }
  }

  export function heapSort(arr) {
    const animations = [];
  
    const n = arr.length;
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--)
      heapify(arr, n, i, animations);

    for (let i = n - 1; i > 0; i--) {
      animations.push([0, i]); 
      animations.push([0, arr[i]]); 
      animations.push([i, arr[0]]); 

      [arr[0], arr[i]] = [arr[i], arr[0]];
 
      heapify(arr, i, 0, animations);
    }
  
    return animations;
  }
  
  