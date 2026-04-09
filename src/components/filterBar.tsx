interface Props {
  year: string;
  setYear: (value: string) => void;
}

export default function FilterBar({ year, setYear }: Props) {
  return (
    <select value={year} onChange={(e) => setYear(e.target.value)}>
      <option value="">All Years</option>
      <option value="2024">2024</option>
      <option value="2023">2023</option>
      <option value="2022">2022</option>
    </select>
  );
}