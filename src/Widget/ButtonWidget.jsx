import { Button, Spinner } from 'react-bootstrap';

const ButtonWidget = ({
  loadingText = 'Submitting...',
  children,
  variant = 'dark',
  className = '',
  disabled = false,
  ...props
}) => {
  return (
    <Button
      variant={variant}
      type="submit"
      className={className}
      disabled={disabled}
      {...props}
    >
      {disabled ? (
        <>
          <Spinner 
            animation="border" 
            size="sm" 
            className="me-2" 
            aria-hidden="true"
          />
          {loadingText}
        </>
      ) : (
        children
      )}
    </Button>
  );
};

export default ButtonWidget;