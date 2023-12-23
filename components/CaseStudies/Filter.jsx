import React from 'react'

const Filter = ({ searchTerm, setSearchTerm }) => {
    const handleKeyword = (e, keyword) => {
      const searchTerm = keyword === 'All' ? '' : e.target.textContent;
      setSearchTerm(searchTerm);
    };
  
    return (
        <div className="flex sx:flex-col sm:flex-row sm:gap-8 font-medium px-14">
            <button
                onClick={(e) => handleKeyword(e, 'All')}
                className={`px-6 py-2 border-b border-gray-300 ${searchTerm === '' ? 'text-primaryColor' : 'text-secondaryColor'}`}
            >
                All
            </button>
            <button
                onClick={(e) => handleKeyword(e, 'Design')}
                className={`px-6 py-2 border-b border-gray-300 ${searchTerm === 'Design' ? 'text-primaryColor' : 'text-secondaryColor'}`}
            >
                Design
            </button>
            <button
                onClick={(e) => handleKeyword(e, 'Development')}
                className={`px-6 py-2 border-b border-gray-300 ${searchTerm === 'Development' ? 'text-primaryColor' : 'text-secondaryColor'}`}
            >
                Development
            </button>
            <button
                onClick={(e) => handleKeyword(e, 'IT Consultancy')}
                className={`px-6 py-2 border-b border-gray-300 ${searchTerm === 'IT Consultancy' ? 'text-primaryColor' : 'text-secondaryColor'}`}
            >
                IT Consultancy
            </button>
        </div>
    );
  };
  
export default Filter;
