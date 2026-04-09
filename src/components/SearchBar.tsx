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
    />
  );
}