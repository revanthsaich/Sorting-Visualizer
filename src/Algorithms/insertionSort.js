// Component/SortingAlgorithms/insertionSort.js
export const insertionSort = async (array, setArray, animationSpeed) => {
    const arr = [...array];
    const n = arr.length;
  
    for (let i = 1; i < n; i++) {
      const key = arr[i];
      let j = i - 1;
  
      while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j--;
  
        setArray([...arr]);
        await new Promise((resolve) => setTimeout(resolve, animationSpeed));
      }
  
      arr[j + 1] = key;
  
      setArray([...arr]);
      await new Promise((resolve) => setTimeout(resolve, animationSpeed));
    }
  };