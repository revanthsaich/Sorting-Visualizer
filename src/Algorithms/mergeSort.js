// Component/SortingAlgorithms/mergeSort.js
export const mergeSort = async (array, setArray, animationSpeed) => {
    const merge = async (arr, left, mid, right) => {
      const n1 = mid - left + 1;
      const n2 = right - mid;
  
      const leftArr = arr.slice(left, left + n1);
      const rightArr = arr.slice(mid + 1, mid + 1 + n2);
  
      let i = 0,
        j = 0,
        k = left;
  
      while (i < n1 && j < n2) {
        if (leftArr[i] <= rightArr[j]) {
          arr[k] = leftArr[i];
          i++;
        } else {
          arr[k] = rightArr[j];
          j++;
        }
        setArray([...arr]);
        await new Promise((resolve) => setTimeout(resolve, animationSpeed));
        k++;
      }
  
      while (i < n1) {
        arr[k] = leftArr[i];
        i++;
        k++;
        setArray([...arr]);
        await new Promise((resolve) => setTimeout(resolve, animationSpeed));
      }
  
      while (j < n2) {
        arr[k] = rightArr[j];
        j++;
        k++;
        setArray([...arr]);
        await new Promise((resolve) => setTimeout(resolve, animationSpeed));
      }
    };
  
    const sort = async (arr, left, right) => {
      if (left >= right) return;
  
      const mid = Math.floor((left + right) / 2);
  
      await sort(arr, left, mid);
      await sort(arr, mid + 1, right);
  
      await merge(arr, left, mid, right);
    };
  
    const arr = [...array];
    await sort(arr, 0, arr.length - 1);
  };