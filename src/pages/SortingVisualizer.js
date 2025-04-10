import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./SortingVisualizer.css";
import { bubbleSort } from "../Algorithms/bubbleSort";
import { selectionSort } from "../Algorithms/selectionSort";
import { insertionSort } from "../Algorithms/insertionSort";
import { quickSort } from "../Algorithms/quickSort";
import { mergeSort } from "../Algorithms/mergeSort";
import { heapSort } from "../Algorithms/heapSort";
import { radixSort } from "../Algorithms/radixSort";
import { countSort } from "../Algorithms/countSort";
import { shellSort } from "../Algorithms/shellSort";
import { combSort } from "../Algorithms/combSort";

const SortingVisualizer = () => {
  const [array, setArray] = useState([]);
  const [isSorting, setIsSorting] = useState(false);
  const [arraySize, setArraySize] = useState(100);
  const [animationSpeed, setAnimationSpeed] = useState(35);
  const [highlightedLine, setHighlightedLine] = useState(null);

  const location = useLocation();
  const selectedAlgorithm = location.state?.algorithm || "bubble";

  const codeSnippets = {
    bubblesort: [
      "for (let i = 0; i < arr.length - 1; i++) {",
      "  for (let j = 0; j < arr.length - i - 1; j++) {",
      "    if (arr[j] > arr[j + 1]) {",
      "      [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];",
      "    }",
      "  }",
      "}",
    ],
    selectionsort: [
      "for (let i = 0; i < arr.length; i++) {",
      "  let minIdx = i;",
      "  for (let j = i + 1; j < arr.length; j++) {",
      "    if (arr[j] < arr[minIdx]) {",
      "      minIdx = j;",
      "    }",
      "  }",
      "  [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];",
      "}",
    ],
    insertionsort: [
      "for (let i = 1; i < arr.length; i++) {",
      "  let key = arr[i];",
      "  let j = i - 1;",
      "  while (j >= 0 && arr[j] > key) {",
      "    arr[j + 1] = arr[j];",
      "    j--;",
      "  }",
      "  arr[j + 1] = key;",
      "}",
    ],
    quicksort: [
      "function quickSort(arr, low, high) {",
      "  if (low < high) {",
      "    let pi = partition(arr, low, high);",
      "    quickSort(arr, low, pi - 1);",
      "    quickSort(arr, pi + 1, high);",
      "  }",
      "}",
    ],
    mergesort: [
      "function mergeSort(arr) {",
      "  if (arr.length <= 1) return arr;",
      "  const mid = Math.floor(arr.length / 2);",
      "  const left = mergeSort(arr.slice(0, mid));",
      "  const right = mergeSort(arr.slice(mid));",
      "  return merge(left, right);",
      "}",
    ],
    heapsort: [
      "function heapSort(arr) {",
      "  buildMaxHeap(arr);",
      "  for (let i = arr.length - 1; i > 0; i--) {",
      "    [arr[0], arr[i]] = [arr[i], arr[0]];",
      "    heapify(arr, 0, i);",
      "  }",
      "}",
    ],
    radixsort: [
      "function radixSort(arr) {",
      "  let max = getMax(arr);",
      "  for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {",
      "    countSortByDigit(arr, exp);",
      "  }",
      "}",
    ],
    countsort: [
      "function countSort(arr) {",
      "  let max = Math.max(...arr);",
      "  let count = new Array(max + 1).fill(0);",
      "  for (let i = 0; i < arr.length; i++) count[arr[i]]++;",
      "  let idx = 0;",
      "  for (let i = 0; i < count.length; i++) {",
      "    while (count[i]--) arr[idx++] = i;",
      "  }",
      "}",
    ],
    shellsort: [
      "for (let gap = Math.floor(arr.length / 2); gap > 0; gap = Math.floor(gap / 2)) {",
      "  for (let i = gap; i < arr.length; i++) {",
      "    let temp = arr[i];",
      "    let j = i;",
      "    while (j >= gap && arr[j - gap] > temp) {",
      "      arr[j] = arr[j - gap];",
      "      j -= gap;",
      "    }",
      "    arr[j] = temp;",
      "  }",
      "}",
    ],
    combsort: [
      "function combSort(arr) {",
      "  let gap = arr.length;",
      "  const shrink = 1.3;",
      "  let sorted = false;",
      "  while (!sorted) {",
      "    gap = Math.floor(gap / shrink);",
      "    if (gap <= 1) {",
      "      gap = 1;",
      "      sorted = true;",
      "    }",
      "    for (let i = 0; i + gap < arr.length; i++) {",
      "      if (arr[i] > arr[i + gap]) {",
      "        [arr[i], arr[i + gap]] = [arr[i + gap], arr[i]];",
      "        sorted = false;",
      "      }",
      "    }",
      "  }",
      "}",
    ],
  };

  const generateRandomArray = () => {
    const newArray = [];
    for (let i = 0; i < arraySize; i++) {
      newArray.push(Math.floor(Math.random() * 300) + 10);
    }
    setArray(newArray);
  };

  useEffect(() => {
    if (selectedAlgorithm) {
      generateRandomArray();
    }
  }, [selectedAlgorithm, arraySize]);

  const highlightLine = async (lineNumber) => {
    setHighlightedLine(lineNumber);
    await new Promise((res) => setTimeout(res, animationSpeed));
  };

  const runSelectedAlgorithm = async (algorithm) => {
    setIsSorting(true);
    const arr = [...array];

    switch (algorithm) {
      case "quicksort":
        await quickSort(arr, setArray, animationSpeed, highlightLine);
        break;
      case "mergesort":
        await mergeSort(arr, setArray, animationSpeed, highlightLine);
        break;
      case "bubblesort":
        await bubbleSort(arr, setArray, animationSpeed, highlightLine);
        break;
      case "selectionsort":
        await selectionSort(arr, setArray, animationSpeed, highlightLine);
        break;
      case "insertionsort":
        await insertionSort(arr, setArray, animationSpeed, highlightLine);
        break;
      case "heapsort":
        await heapSort(arr, setArray, animationSpeed, highlightLine);
        break;
      case "radixsort":
        await radixSort(arr, setArray, animationSpeed, highlightLine);
        break;
      case "countsort":
        await countSort(arr, setArray, animationSpeed, highlightLine);
        break;
      case "shellsort":
        await shellSort(arr, setArray, animationSpeed, highlightLine);
        break;
      case "combsort":
        await combSort(arr, setArray, animationSpeed, highlightLine);
        break;
      default:
        console.error("Unknown algorithm:", algorithm);
    }

    setIsSorting(false);
  };

  return (
    <div className="sorting-visualizer">
      <h1>Sorting Visualizer</h1>
      <div className="visualizer-wrapper">
        <div className="main-panel">
          <div className="controls">
            <label>
              <span>Array Size: {arraySize}</span>
              <input
                type="range"
                min="10"
                max="200"
                value={arraySize}
                disabled={isSorting}
                onChange={(e) => setArraySize(Number(e.target.value))}
              />
            </label>

            <label>
              <span>Animation Speed:</span>
              <select
                value={animationSpeed}
                disabled={isSorting}
                onChange={(e) => setAnimationSpeed(Number(e.target.value))}
              >
                <option value="5">Fast</option>
                <option value="20">Medium</option>
                <option value="50">Slow</option>
                <option value="100">Very Slow</option>
              </select>
            </label>

            <button onClick={generateRandomArray} disabled={isSorting}>
              Generate New Array
            </button>

            <button
              onClick={() => runSelectedAlgorithm(selectedAlgorithm)}
              disabled={isSorting}
            >
              Run{" "}
              {selectedAlgorithm.charAt(0).toUpperCase() +
                selectedAlgorithm.slice(1)}{" "}
              Sort
            </button>
          </div>

          <div className="array-container">
            {array.map((value, idx) => (
              <div
                key={idx}
                className="array-bar"
                style={{ height: `${value}px`, width: `${100 / arraySize}%` }}
              ></div>
            ))}
          </div>
          <div className="code-panel themed-code-panel">
            <h2 className="code-heading">
              {selectedAlgorithm.charAt(0).toUpperCase() +
                selectedAlgorithm.slice(1)}{" "}
              Sort Code
            </h2>
            <pre className="code-block">
              {codeSnippets[selectedAlgorithm.toLowerCase()]?.map(
                (line, idx) => (
                  <div
                    key={idx}
                    className={`code-line ${
                      highlightedLine === idx ? "highlight" : ""
                    }`}
                  >
                    {line}
                  </div>
                )
              )}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SortingVisualizer;
