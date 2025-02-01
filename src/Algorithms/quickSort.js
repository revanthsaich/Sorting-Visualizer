// Component/SortingAlgorithms/quickSort.js
export const quickSort = async (array, setArray, animationSpeed) => {
    const partition = async (arr, low, high) => {
      const pivot = arr[high];
      let i = low - 1;
  
      for (let j = low; j < high; j++) {
        if (arr[j] < pivot) {
          i++;
          const temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
  
          setArray([...arr]);
          await new Promise((resolve) => setTimeout(resolve, animationSpeed));
        }
      }
  
      const temp = arr[i + 1];
      arr[i + 1] = arr[high];
      arr[high] = temp;
  
      setArray([...arr]);
      await new Promise((resolve) => setTimeout(resolve, animationSpeed));
  
      return i + 1;
    };
  
    const sort = async (arr, low, high) => {
      if (low < high) {
        const pi = await partition(arr, low, high);
  
        await sort(arr, low, pi - 1);
        await sort(arr, pi + 1, high);
      }
    };
  
    const arr = [...array];
    await sort(arr, 0, arr.length - 1);
  };