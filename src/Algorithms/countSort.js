export const countSort= async (array, setArray, animationSpeed) => {
    const arr = [...array];
    const max = Math.max(...arr);
    const count = new Array(max + 1).fill(0);
    const output = new Array(arr.length);
  
    // Count occurrences
    for (let i = 0; i < arr.length; i++) {
      count[arr[i]]++;
    }
  
    // Update count[i] to contain the actual position of this element in output[]
    for (let i = 1; i <= max; i++) {
      count[i] += count[i - 1];
    }
  
    // Build the output array
    for (let i = arr.length - 1; i >= 0; i--) {
      output[count[arr[i]] - 1] = arr[i];
      count[arr[i]]--;
  
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