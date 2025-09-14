import FormGroup from "./FormGroup";

const TextInput = ({ label, id, ...props }) => {
  return (
    <FormGroup label={label} htmlFor={id}>
      <input id={id} className="met-input" {...props} />
    </FormGroup>
  );
}

export default TextInput;