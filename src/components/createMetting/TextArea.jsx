import FormGroup from "./FormGroup";

const TextArea = ({ label, id, ...props }) => {
  return (
    <FormGroup label={label} htmlFor={id}>
      <textarea id={id} className="met-textarea" {...props} />
    </FormGroup>
  );
}

export default TextArea;