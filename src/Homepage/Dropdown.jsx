/* eslint-disable react/prop-types */
import Select from "react-select";

function Dropdown(props) {
  return (
    <Select
      isClearable={true}
      className="selector"
      placeholder="Select Country"
      options={props.options}
      onChange={props.changeCountry}
      value={props.country}
    />
  );
}

export default Dropdown;
