import React from "react";
import PropTypes from "prop-types";

import styles from "./Input.module.scss";

const TextArea = props => (
  <div className={styles.inputContainer}>
    <label>{props.label}</label>
    <textarea
      name={props.name}
      value={props.value}
      onChange={props.onInputChange}
      placeholder={props.placeholder}
      required={props.isRequired}
    />
  </div>
);

TextArea.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  placeholder: PropTypes.string,
  isRequired: PropTypes.bool
};

export default TextArea;
