import React, { useState } from 'react';

const LongestChain = () => {
  const [numbers, setNumbers] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [longestChain, setLongestChain] = useState(0);

  // Function to find the longest chain of consecutive numbers
  const findLongestChain = (arr) => {
    const numSet = new Set(arr);
    let maxLength = 0;

    for (let num of arr) {
      if (!numSet.has(num - 1)) {
        let currentNum = num;
        let currentLength = 1;

        while (numSet.has(currentNum + 1)) {
          currentNum++;
          currentLength++;
        }

        maxLength = Math.max(maxLength, currentLength);
      }
    }

    return maxLength;
  };

  // Function to handle the input change
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // Function to handle the calculation of the longest chain
  const handleCalculate = () => {
    const arr = inputValue.split(',').map(Number);
    setNumbers(arr);
    const longest = findLongestChain(arr);
    setLongestChain(longest);
  };

  return (
    <div className='flex flex-col justify-center items-center mt-[30vh]  ' >
      <h1 className='mb-[5vh]' >Longest Chain of Consecutive Numbers</h1>
      <input
        type="text"
        placeholder="Enter numbers, e.g., 1,2,3"
        value={inputValue}
        onChange={handleInputChange}
        className="w-[50%] mb-3 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button className='px-3 py-2 bg-blue-500 text-white mb-3  ' onClick={handleCalculate}>Calculate Longest Chain</button>
      <p className='text-green-500 mb-3 ' >Numbers: {numbers.join(', ')}</p>
      <p className='text-green-300  ' >Longest Chain Length: {longestChain}</p>
    </div>
  );
};

export default LongestChain;