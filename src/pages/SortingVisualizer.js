import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './SortingVisualizer.css';
import { bubbleSort } from '../Algorithms/bubbleSort';
import { mergeSort } from '../Algorithms/mergeSort';
import { quickSort } from '../Algorithms/quickSort';
import { selectionSort } from '../Algorithms/selectionSort';
import { insertionSort } from '../Algorithms/insertionSort';

const SortingVisualizer = () => {
  const [array, setArray] = useState([]);
  const [isSorting, setIsSorting] = useState(false);
  const arraySize = 100;
  const animationSpeed = 50;

  const location = useLocation();
  const selectedAlgorithm = location.state?.algorithm || 'bubble';

  const generateRandomArray = () => {
    const newArray = [];
    for (let i = 0; i < arraySize; i++) {
      newArray.push(Math.floor(Math.random() * 500) + 10);
    }
    setArray(newArray);
  };

  useEffect(() => {
    if (selectedAlgorithm) {
      generateRandomArray();
      runSelectedAlgorithm(selectedAlgorithm);
    }
  }, [selectedAlgorithm]);

  const runSelectedAlgorithm = async (algorithm) => {
    setIsSorting(true);
    const arr = [...array];

    switch (algorithm) {
      case 'quicksort':
        await quickSort(arr, setArray, animationSpeed);
        break;
      case 'mergesort':
        await mergeSort(arr, setArray, animationSpeed);
        break;
      case 'bubblesort':
        await bubbleSort(arr, setArray, animationSpeed);
        break;
      case 'selectionsort':
        await selectionSort(arr, setArray, animationSpeed);
        break;
      case 'insertionsort':
        await insertionSort(arr, setArray, animationSpeed);
        break;
      default:
        console.error('Unknown algorithm:', algorithm);
    }

    setIsSorting(false);
  };

  return (
    <div className="sorting-visualizer">
      <h1>Sorting Visualizer</h1>
      <div className="controls">
        <button onClick={generateRandomArray} disabled={isSorting}>
          Generate New Array
        </button>
        <button onClick={() => runSelectedAlgorithm(selectedAlgorithm)} disabled={isSorting}>
          Run {selectedAlgorithm.charAt(0).toUpperCase() + selectedAlgorithm.slice(1)} Sort
        </button>
      </div>
      <div className="array-container">
        {array.map((value, idx) => (
          <div
            key={idx}
            className="array-bar"
            style={{ height: `${value}px` }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default SortingVisualizer;