import React from 'react';
import PropTypes from 'prop-types';
import './label.css';

/** Label component for displaying text */
export const Label = ({ text, htmlFor, required = false }) => {
  return (
    <label htmlFor={htmlFor} className="storybook-label">
      {text}
      {required && <span className="storybook-label--required">*</span>}
    </label>
  );
};

Label.propTypes = {
  /** The text to display */
  text: PropTypes.string.isRequired,
  /** The id of the input element the label is associated with */
  htmlFor: PropTypes.string,
  /** Is this field required? */
  required: PropTypes.bool,
}; 