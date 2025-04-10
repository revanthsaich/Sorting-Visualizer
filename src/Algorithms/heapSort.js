// Component/SortingAlgorithms/heapSort.js
export const heapSort = async (array, setArray, animationSpeed) => {
    const arr = [...array];
    const n = arr.length;
  
    const heapify = async (i, size) => {
      let largest = i;
      const left = 2 * i + 1;
      const right = 2 * i + 2;
  
      if (left < size && arr[left] > arr[largest]) {
        largest = left;
      }
  
      if (right < size && arr[right] > arr[largest]) {
        largest = right;
      }
  
      if (largest !== i) {
        // Swap elements
        const temp = arr[i];
        arr[i] = arr[largest];
        arr[largest] = temp;
  
        // Update the state to trigger re-render
        setArray([...arr]);
  
        // Wait for the animation
        await new Promise((resolve) => setTimeout(resolve, animationSpeed));
  
        await heapify(largest, size);
      }
    };
  
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
      await heapify(i, n);
    }
  
    for (let i = n - 1; i > 0; i--) {
      // Swap the root (largest) with the last element
      const temp = arr[0];
      arr[0] = arr[i];
      arr[i] = temp;
  
      // Update the state to trigger re-render
      setArray([...arr]);
  
      // Wait for the animation
      await new Promise((resolve) => setTimeout(resolve, animationSpeed));
  
      await heapify(0, i);
    }
  };