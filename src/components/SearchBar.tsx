import type { ChangeEvent } from "react";

interface Props {
  query: string;
  setQuery: (value: string) => void;
  onSearch?: () => void;
}

export default function SearchBar({ query, setQuery, onSearch }: Props) {
  return (
    <div className="flex items-center bg-[#111827] rounded-lg border border-gray-700 focus-within:border-red-500 transition overflow-hidden w-[320px]">
      
      
      <input
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setQuery(e.target.value)
        }
        className="bg-transparent px-4 py-3 outline-none text-white w-full"
      />

      
      <button
        onClick={onSearch}
        className="px-4 py-3 bg-red-600 hover:bg-red-700 transition text-white"
      >
        Search
      </button>
    </div>
  );
}