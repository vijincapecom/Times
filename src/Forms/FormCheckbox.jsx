import { Controller } from 'react-hook-form';
import { Form } from 'react-bootstrap';

const FormCheckbox = ({
  control,
  name,
  label,
  className = '',
  rules = {},
  ...props
}) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState: { error } }) => (
        <Form.Group controlId={`formBasic${name}`} className={className}>
          <Form.Check
            {...field}
            type="checkbox"
            label={label}
            isInvalid={!!error}
            checked={field.value}
            onChange={(e) => field.onChange(e.target.checked)}
            {...props}
          />
          {error && (
            <Form.Text className="text-danger">{error.message}</Form.Text>
          )}
        </Form.Group>
      )}
    />
  );
};

export default FormCheckbox;