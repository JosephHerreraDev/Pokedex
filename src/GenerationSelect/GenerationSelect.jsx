import { useState } from "react";
import PropTypes from "prop-types";
import Select from "react-select";
import "./GenerationSelect.scss";

const options = [
  { value: "all", label: "All" },
  { value: "generation-i", label: "First" },
  { value: "generation-ii", label: "Second" },
  { value: "generation-iii", label: "Third" },
  { value: "generation-iv", label: "Fourth" },
  { value: "generation-v", label: "Fifth" },
  { value: "generation-vi", label: "Sixth" },
  { value: "generation-vii", label: "Seventh" },
  { value: "generation-viii", label: "Eighth" },
  { value: "generation-ix", label: "Ninth" },
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
