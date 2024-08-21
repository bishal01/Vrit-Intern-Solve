import React, { useState } from 'react';

const Accordion = () => {
  // State to keep track of the open section
  const [openIndex, setOpenIndex] = useState(null);

// information of vrit technology
  const Vritinfo=[
    {
        id:4,
        name:'About Vrit TEchnologies ',
        description:'At Vrit Technologies, we are passionate about creating modern software solutions, developing sleek mobile apps, and crafting effective digital marketing strategies. Vrit’s commitment to excellence goes beyond just providing technical solutions; it’s about fostering growth, enhancing efficiency, and ensuring a meaningful impact on both personal and professional journeys.'

    },
    {
        id:5,
        name:'Services Used',
        description:
        'Develop scalable, engaging, and feature-rich mobile applications to achieve digital transformation.\n At the core of our web development services is a commitment to delivering solutions that align with your business objectives '

    },
    {
        id:3,
        name:'Hire Talent',
        description:'At the core of our “Hire a Talent” is the belief that one size does not fit all. We understand that every project is unique, with its distinct set of challenges and requirements.'


    }
  ]

 

  //  this is function to open/close sections and buttons
  const handleToggle = (id) => {
    setOpenIndex(openIndex === id ? null : id);
  };


  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="flex flex-col items-center justify-center w-full max-w-3xl h-auto bg-white p-6 rounded-lg shadow-lg transform -translate-y-10">
        {Vritinfo.map((item, id) => (
          <div key={id} className="mb-6 w-full max-w-3xl">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h6 className="mb-0">
                <button
                  className="relative flex items-center w-full p-4 font-semibold text-left transition-all ease-in border-b border-solid cursor-pointer border-slate-100 text-slate-700 rounded-t-lg group text-dark-500"
                  onClick={() => handleToggle(id)}
                >
                  <span>{item.name}</span>
                  <i
                    className={`absolute right-0 pt-1 text-base transition-transform fa fa-chevron-down ${openIndex === id ? 'rotate-180' : ''}`}
                  ></i>
                </button>
              </h6>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === id ? 'h-auto' : 'h-0'}`}
              >
                <div className="p-4 text-sm leading-normal text-blue-gray-500/80">
                  {item.description}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Accordion;
