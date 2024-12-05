import { Search } from 'lucide-react';
import { useState } from 'react';

const SearchBox = () => {


  return (
    <div className="search-box flex bg-slate-100 gap-4  ">
      <input
        type="text"
        placeholder="What are you looking for?"
        className="search-input hidden md:block"
        
      />
      <Search className="m-2" size={26}/>
      
        
    </div>
  );
};

export default SearchBox;
