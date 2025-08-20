import { useState } from "react";
import { Controller } from "react-hook-form";
import { Form } from "react-bootstrap";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const PasswordInput = ({
  control,
  name,
  placeholder = "Password",
  rules = {},
  className = "",
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState: { error } }) => (
        <Form.Group
          controlId={`formBasic${name}`}
          className={className}
          style={{ position: "relative" }}
        >
          <div style={{ position: "relative" }}>
            <Form.Control
              {...field}
              type={showPassword ? "text" : "password"}
              placeholder={placeholder}
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              style={{
                position: "absolute",
                right: "8%",
                top: "50%",
                transform: "translateY(-50%)",
                cursor: "pointer",
                color: "#555",
              }}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

         
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

export default PasswordInput;
