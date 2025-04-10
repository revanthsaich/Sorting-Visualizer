export const combSort = async (array, setArray, animationSpeed) => {
    const arr = [...array];
    const n = arr.length;
    let gap = n;
    let swapped = true;
  
    while (gap !== 1 || swapped) {
      gap = Math.max(1, Math.floor(gap / 1.3));
      swapped = false;
  
      for (let i = 0; i + gap < n; i++) {
        if (arr[i] > arr[i + gap]) {
          // Swap elements
          const temp = arr[i];
          arr[i] = arr[i + gap];
          arr[i + gap] = temp;
  
          // Update the state to trigger re-render
          setArray([...arr]);
  
          // Wait for the animation
          await new Promise((resolve) => setTimeout(resolve, animationSpeed));
  
          swapped = true;
        }
      }
    }
  };
  