// Component/SortingAlgorithms/radixSort.js
export const radixSort = async (array, setArray, animationSpeed) => {
    const arr = [...array];
    const max = Math.max(...arr);
    let exp = 1;
  
    while (Math.floor(max / exp) > 0) {
      await countingSortByDigit(arr, exp, setArray, animationSpeed);
      exp *= 10;
    }
  };
  
  const countingSortByDigit = async (arr, exp, setArray, animationSpeed) => {
    const output = new Array(arr.length);
    const count = new Array(10).fill(0);
  
    // Count occurrences
    for (let i = 0; i < arr.length; i++) {
      const index = Math.floor(arr[i] / exp) % 10;
      count[index]++;
    }
  
    // Update count[i] to contain the actual position of this digit in output[]
    for (let i = 1; i < count.length; i++) {
      count[i] += count[i - 1];
    }
  
    // Build the output array
    for (let i = arr.length - 1; i >= 0; i--) {
      const index = Math.floor(arr[i] / exp) % 10;
      output[count[index] - 1] = arr[i];
      count[index]--;
  
      // Update the state to trigger re-render
      setArray([...output]);
  
      // Wait for the animation
      await new Promise((resolve) => setTimeout(resolve, animationSpeed));
    }
  
    // Copy the output array to arr[]
    for (let i = 0; i < arr.length; i++) {
      arr[i] = output[i];
    }
  };