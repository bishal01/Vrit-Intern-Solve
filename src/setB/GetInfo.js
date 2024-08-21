import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GetInfo = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <>
    

<div class="relative overflow-x-auto mt-[30vh] ">
    <h1 className='text-center font-extrabold text-3xl mb-[2vh]  ' > List Of Our Employee </h1>
    <p className='text-center font-bold text-xl mb-[5vh] ' > Test Done Using Jest , To check Api write npm test in terminal , thank you for reading 😊 </p>
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Employe Name
                </th>
                <th scope="col" class="px-6 py-3">
                    Email
                </th>
                <th scope="col" class="px-6 py-3">
                    Website
                </th>
                <th scope="col" class="px-6 py-3">
                    Contact Number
                </th>
            
            </tr>
        </thead>
        <tbody>
                   {
                    data.map((d,id)=>(

                    
                    <tr key={id} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {d.name}
                        </th>
                        <td class="px-6 py-4">
                            {d.email}
                        </td>
                        <td class="px-6 py-4">
                            {d.website}
                        </td>
                        <td class="px-6 py-4">
                            {d.phone}
                        </td>
                    </tr>
                  
                    ))}
     
      
        </tbody>
    </table>
</div>

    </>
  )
}

export default GetInfo