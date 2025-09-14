const FormGroup = ({ label, htmlFor, children }) => {
  return (
    <div className="met-form-group">
      <label htmlFor={htmlFor} className="met-label">{label}</label>
      {children}
    </div>
  );
}

export default FormGroup;