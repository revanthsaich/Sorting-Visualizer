export const shellSort = async (array, setArray, animationSpeed) => {
    const arr = [...array];
    const n = arr.length;
    let gap = Math.floor(n / 2);
  
    while (gap > 0) {
      for (let i = gap; i < n; i++) {
        const temp = arr[i];
        let j = i;
  
        while (j >= gap && arr[j - gap] > temp) {
          arr[j] = arr[j - gap];
          j -= gap;
  
          // Update the state to trigger re-render
          setArray([...arr]);
  
          // Wait for the animation
          await new Promise((resolve) => setTimeout(resolve, animationSpeed));
        }
        arr[j] = temp;
  
        // Update the state to trigger re-render
        setArray([...arr]);
  
        // Wait for the animation
        await new Promise((resolve) => setTimeout(resolve, animationSpeed));
      }
      gap = Math.floor(gap / 2);
    }
  };