import React from "react";

const FormInput = ({ label, id, name, type = "text", value, onChange, placeholder, required = false }) => (
    <div className="form-group">
        <label htmlFor={id}>{label}</label>
        <input
            type = { type }
            id = { id }
            name = { name }
            value = { value }
            onChange = { onChange }
            placeholder = { placeholder }
            required = { required }
        />
    </div>
);

export default FormInput;