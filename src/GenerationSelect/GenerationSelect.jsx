import Select from "react-select";
import "./GenerationSelect.scss";

const options = [
  { value: "all", label: "All" },
  { value: "first", label: "First" },
  { value: "second", label: "Second" },
  { value: "third", label: "Third" },
  { value: "fourth", label: "Fourth" },
  { value: "fifth", label: "Fifth" },
  { value: "sixth", label: "Sixth" },
  { value: "seventh", label: "Seventh" },
  { value: "eighth", label: "Eigth" },
  { value: "ninth", label: "Ninth" },
];

export function GenerationSelect() {
  return (
    <Select
      className="select"
      placeholder="Select Generation..."
      options={options}
    />
  );
}
