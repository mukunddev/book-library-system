import React from "react";
import PropTypes from "prop-types";

import styles from "./Input.module.scss";

const Input = props => (
  <div className={styles.inputContainer}>
    {props.label ? <label>{props.label}</label> : null}
    <input
      name={props.name}
      type={props.inputType}
      value={props.value}
      onChange={props.onInputChange}
      placeholder={props.placeholder}
      required={props.isRequired}
    />
  </div>
);

Input.propTypes = {
  inputType: PropTypes.oneOf(["text", "number"]).isRequired,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  placeholder: PropTypes.string,
  isRequired: PropTypes.bool
};

export default Input;
