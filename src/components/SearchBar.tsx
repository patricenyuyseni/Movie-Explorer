import type { ChangeEvent } from "react";

interface Props {
  query: string;
  setQuery: (value: string) => void;
}

export default function SearchBar({ query, setQuery }: Props) {
  return (
    <input
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e: ChangeEvent<HTMLInputElement>) =>
        setQuery(e.target.value)
      }
      className="bg-[#111827] px-5 py-3 rounded-lg w-[320px] outline-none border border-gray-700 focus:border-red-500 transition text-white"
    />
  );
}