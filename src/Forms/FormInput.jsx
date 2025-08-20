import { Controller } from 'react-hook-form';
import { Form } from 'react-bootstrap';

const FormInput = ({
  control,
  name,
  type = 'text',
  placeholder,
  rules = {},
  className = '',
  ...props
}) => {
  return (
   <Controller
    name={name}
    control={control}
    render={({ field, fieldState: { error } }) => (
      <Form.Group controlId={`formBasic${name}`} className={className} style={{ position: "relative" }}>
        <Form.Control
          {...field}
          type={type}
          placeholder={placeholder}
          {...props}
            
        />
         {error?.message && (
            <div
            className="error-message"
            >
              {error.message}
            </div>
          )}
      </Form.Group>
    )}
  />
  );
};

export default FormInput;