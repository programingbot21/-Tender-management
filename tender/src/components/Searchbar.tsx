



// 'use client';
// import React, { useState } from 'react';

// interface SearchbarProps {
//   onSearch: (query: string) => void;
// }

// const Searchbar: React.FC<SearchbarProps> = ({ onSearch }) => {
//   const [searchText, setSearchText] = useState('');

//   const handleSearch = () => {
//     onSearch(searchText);
//   };

//   return (
//     <div className="flex justify-center items-center gap-2 mt-6 mb-4">
//       <input
//         type="text"
//         placeholder="Search companies..."
//         className="px-4 py-2 border border-gray-300 rounded-lg w-80 focus:outline-none"
//         value={searchText}
//         onChange={(e) => setSearchText(e.target.value)}
//       />
//       <button
//         onClick={handleSearch}
//         className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
//       >
//         Search
//       </button>
//     </div>
//   );
// };

// export default Searchbar;


'use client';
import React, { useState } from 'react';

interface SearchbarProps {
  onSearch: (query: string) => void;
}

const Searchbar: React.FC<SearchbarProps> = ({ onSearch }) => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    if (searchText.trim() !== '') {
      onSearch(searchText);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="flex justify-center items-center gap-2 mt-6 mb-4">
      <input
        type="text"
        placeholder="Search companies..."
        className="px-4 py-2 border border-gray-300 rounded-lg w-80 focus:outline-none"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button
        onClick={handleSearch}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Search
      </button>
    </div>
  );
};

export default Searchbar;
