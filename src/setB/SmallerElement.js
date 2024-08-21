import React, { useState } from 'react';

function SmallerElement() {
  const [inputValue, setInputValue] = useState('');
  const [counts, setCounts] = useState([]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const calculateSmallerCounts = () => {
    const nums = inputValue.split(',').map(Number);
    const counts = Array(nums.length).fill(0);

    for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        if (nums[j] < nums[i]) {
          counts[i]++;
        }
      }
    }

    setCounts(counts);
  };

  return (
    <div className="p-5 max-w-[50%] mt-[30vh] h-[50vh] mx-auto bg-white rounded-lg ">
      <h2 className="text-2xl font-bold text-center mb-4">Smaller Elements Counter</h2>
      <input
        type="text"
        placeholder="Enter numbers separated by commas"
        value={inputValue}
        onChange={handleInputChange}
        className="w-full p-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
      />
      <div className='flex justify-center ' >
      <button
        onClick={calculateSmallerCounts}
        className="w-[50%] text-center bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
      >
        Calculate Counts
      </button>
      </div>
   
      {counts.length > 0 && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold">Counts:</h3>
          <p className="mt-2 p-3 bg-gray-100 rounded-lg">
            {counts.join(', ')}
          </p>
        </div>
      )}
    </div>
  );
}

export default SmallerElement;