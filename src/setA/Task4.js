import React, { useState } from 'react';

// Function to count and return good subarrays with exactly K different integers
function countGoodSubarrays(nums, K) {
    function uniqueCount(subarray) {
        return new Set(subarray).size;
    }
    
    let goodSubarrays = [];
    let goodSubarraysCount = 0;
    let n = nums.length;
    
    for (let start = 0; start < n; start++) {
        for (let end = start; end < n; end++) {
            let subarray = nums.slice(start, end + 1);
            if (uniqueCount(subarray) === K) {
                goodSubarrays.push(subarray);
                goodSubarraysCount++;
            }
        }
    }
    
    return { goodSubarraysCount, goodSubarrays };
}

// React component
const Task4 = () => {
    const [inputArray, setInputArray] = useState('');
    const [kValue, setKValue] = useState('');
    const [result, setResult] = useState(null);
    const [subarrays, setSubarrays] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const nums = inputArray.split(',').map(Number);
        const K = parseInt(kValue, 10);
        if (!isNaN(K) && nums.length > 0) {
            const { goodSubarraysCount, goodSubarrays } = countGoodSubarrays(nums, K);
            setResult(goodSubarraysCount);
            setSubarrays(goodSubarrays);
        } else {
            setResult('Invalid input');
            setSubarrays([]);
        }
    };

    return (
        <>

        <div className="flex items-center justify-center min-h-[50vh]">

            <div className=" w-full max-w-3xl p-4 bg-white rounded-lg shadow-md">
            
            <h1 className=" text-center font-extrabold text-3xl mb-4">Task4</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="arrayInput" className="block text-sm font-medium text-gray-700">Array (comma-separated):</label>
                    <input
                        id="arrayInput"
                        type="text"
                        value={inputArray}
                        onChange={(e) => setInputArray(e.target.value)}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                        placeholder="e.g. 1,2,1,2,3"
                    />
                </div>
                <div>
                    <label htmlFor="kValue" className="block text-sm font-medium text-gray-700">K (number of unique integers):</label>
                    <input
                        id="kValue"
                        type="number"
                        value={kValue}
                        onChange={(e) => setKValue(e.target.value)}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                        placeholder="e.g. 2"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full py-2 px-4 bg-blue-500 text-white font-medium rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Calculate
                </button>
            </form>
            {result !== null && (
                <div className="mt-4 p-2 text-lg font-semibold text-gray-900">
                    <div>
                        <p>Total Good Subarrays: {result}</p>
                        {subarrays.length > 0 && (
                            <div className="mt-2">
                                <h2 className="text-lg font-bold">Good Subarrays:</h2>
                                <ul className="list-disc list-inside">
                                    {subarrays.map((subarray, index) => (
                                        <li key={index} className="mt-1">
                                            [{subarray.join(', ')}]
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
        </div>
        </>
    );
};

export default Task4;
