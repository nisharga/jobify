import React from "react";

const FormRow = ({ type, name, value, handleChange, lablelText }) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {lablelText || name}
      </label>

      <input
        type={type}
        value={value}
        name={name}
        onChange={handleChange}
        className="form-input"
      />
    </div>
  );
};

export default FormRow;
