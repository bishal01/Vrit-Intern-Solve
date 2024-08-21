import React, { useState } from 'react';

const Task5 = () => {
  const [input, setInput] = useState('');
  const [nums, setNums] = useState([]);
  const [counts, setCounts] = useState([]);

  // Function to parse input string into an array of numbers
  const parseInput = (str) => {
    return str
      .split(',')
      .map(num => parseInt(num.trim(), 10))
      .filter(num => !isNaN(num));
  };

  // Function to count smaller elements to the right
  const countSmaller = (nums) => {
    const result = new Array(nums.length).fill(0); // To store the result
    const sortedList = []; // To keep track of seen elements

    // Helper function to perform binary search
    function binarySearch(arr, target) {
      let left = 0;
      let right = arr.length;
      while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] < target) left = mid + 1;
        else right = mid;
      }
      return left; // Number of elements smaller than target
    }
    
    // Traverse the list from right to left
    for (let i = nums.length - 1; i >= 0; i--) {
      const num = nums[i];
      // Find the number of elements smaller than the current number
      const index = binarySearch(sortedList, num);
      result[i] = index;
      // Insert the current number into the sorted list
      sortedList.splice(index, 0, num);
    }
    
    return result;
  };

  // Handle input change and calculate counts
  const handleInputChange = (event) => {
    const value = event.target.value;
    setInput(value);

    const parsedNums = parseInput(value);
    setNums(parsedNums);
    setCounts(countSmaller(parsedNums));
  };

  return (

    <div className="flex items-center justify-center min-h-[60vh]">

    <div className=" w-full max-w-3xl p-4 bg-white rounded-lg shadow-md">
    
    <h1 className=" text-center font-extrabold text-3xl mb-4">Task5</h1>
            <form className="mb-4">
        <label htmlFor="input-array" className="block text-sm font-medium text-gray-900 mb-2">Enter Numbers (comma-separated):</label>
        <input
          id="input-array"
          type="text"
          value={input}
          onChange={handleInputChange}
          className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
          placeholder="e.g., 5,2,6,1"
        />
      </form>
      <div>
        <h2 className="text-lg font-medium">Input Array:</h2>
        <p className="mb-4">{JSON.stringify(nums)}</p>
        
        <h2 className="text-lg font-medium">Counts Array:</h2>
        <p>{JSON.stringify(counts)}</p>
      </div>
    </div>
    </div>
  );
};

export default Task5;
