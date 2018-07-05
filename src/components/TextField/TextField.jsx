import React from "react";
import PropTypes from "prop-types";

const TextField = ({ id, labelText }) => (
  <div>
    <label htmlFor={id}>{labelText}</label>
    <input id={id} type="text" />
  </div>
);

TextField.propTypes = {
  id: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
};

export default TextField;
