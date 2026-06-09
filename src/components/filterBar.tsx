interface Props {
  year: string;
  setYear: (value: string) => void;
}

export default function FilterBar({ year, setYear }: Props) {
  return (
    <select
      value={year}
      onChange={(e) => setYear(e.target.value)}
      className="bg-[#111827] px-5 py-3 rounded-lg outline-none border border-gray-700 focus:border-red-500 transition text-white"
    >
      <option value="">All Years</option>
      <option value="2024">2024</option>
      <option value="2023">2023</option>
      <option value="2022">2022</option>
      <option value="2020">2020</option>
      <option value="2025">2025</option>
      <option value="2026">2026</option>
    </select>
  );
}// terminal test
