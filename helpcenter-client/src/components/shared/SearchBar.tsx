import { MoveRight } from "lucide-react";
import React, { useState } from "react";


interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchQuery(value);
    onSearch(value);
  };

  return (
    <div className="flex flex-col items-center justify-center py-16 bg-[#E6E6FA]">
      <h1 className="text-4xl md:text-6xl font-bold text-center mb-8">
        How can we help?
      </h1>
      <div className="relative w-full max-w-lg">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleInputChange}
          className="w-full pl-4 pr-12 py-2 border rounded-md shadow-sm text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <MoveRight className="absolute right-4 top-1/2 transform -translate-y-1/2 text-2xl text-gray-500" />
      </div>
    </div>
  );
};

export default SearchBar;
