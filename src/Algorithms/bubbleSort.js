// Component/SortingAlgorithms/bubbleSort.js
export const bubbleSort = async (array, setArray, animationSpeed) => {
  const arr = [...array];
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap elements
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;

        // Update the state to trigger re-render
        setArray([...arr]);

        // Wait for the animation
        await new Promise((resolve) => setTimeout(resolve, animationSpeed));
      }
    }
  }
};