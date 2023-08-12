import { useState } from "react";
import PropTypes from "prop-types";
import Select from "react-select";
import "./GenerationSelect.scss";

const options = [
  { value: "1", label: "First" },
  { value: "2", label: "Second" },
  { value: "3", label: "Third" },
  { value: "4", label: "Fourth" },
  { value: "5", label: "Fifth" },
  { value: "6", label: "Sixth" },
  { value: "7", label: "Seventh" },
  { value: "8", label: "Eighth" },
  { value: "9", label: "Ninth" },
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
