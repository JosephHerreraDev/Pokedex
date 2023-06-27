import { useState } from "react";
import PropTypes from "prop-types";
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
  { value: "eighth", label: "Eighth" },
  { value: "ninth", label: "Ninth" },
];

export function GenerationSelect({ onSelectChange }) {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (selectedOption) => {
    setSelectedOption(selectedOption);
    onSelectChange(selectedOption);
  };

  return (
    <Select
      className="select"
      placeholder="Select Generation..."
      options={options}
      value={selectedOption}
      onChange={handleSelectChange}
    />
  );
}
GenerationSelect.propTypes = {
  onSelectChange: PropTypes.func.isRequired,
};
