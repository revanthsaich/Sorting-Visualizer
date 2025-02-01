// Component/SortingAlgorithms/selectionSort.js
export const selectionSort = async (array, setArray, animationSpeed) => {
    const arr = [...array];
    const n = arr.length;
  
    for (let i = 0; i < n - 1; i++) {
      let minIndex = i;
  
      for (let j = i + 1; j < n; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }
  
      if (minIndex !== i) {
        // Swap elements
        const temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
  
        setArray([...arr]);
        await new Promise((resolve) => setTimeout(resolve, animationSpeed));
      }
    }
  };