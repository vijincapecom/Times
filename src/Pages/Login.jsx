import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Form, Container, Row, Col } from 'react-bootstrap';
import { zodResolver } from '@hookform/resolvers/zod';
import ButtonWidget from '../Widget/ButtonWidget';
import FormInput from '../Forms/FormInput';
import PasswordInput from '../Forms/FormPassword';
import FormCheckbox from '../Forms/FormCheckbox';
import { loginSchema } from '../Validation/validation';
import { img1} from '../helper/imageHelper';
import { useNavigate} from 'react-router-dom';
import { logoImage } from '../helper/FunctionHelper';

const LoginForm = () => {
    const navigate = useNavigate();   
    const [isLoading, setIsLoading] = useState(false);

    const {
        control,
        handleSubmit,
        formState
    } = useForm({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: '',
            password: '',
            rememberMe: false
        }
    });
    const onSubmit = (data) => {
        setIsLoading(true);
        navigate("/home")
        setIsLoading(false);
    };

    return (
        <Container fluid="xl">
            <Row className="login-card" >
                <Col md={6} className="d-flex align-items-center justify-content-center">
                    <div className="login-form-box">
                        <h3 className="mb-2 login-title text-center text-md-start">Sign In</h3>
                        <p className="mb-4 small-title text-center text-md-start">
                            New user?{" "}
                            <a href="#" className="mr-2 small-span">
                                Create an account
                            </a>
                        </p>
                        <Form onSubmit={handleSubmit(onSubmit)}>
                            <FormInput
                                control={control}
                                name="email"
                                type="email"
                                placeholder="Email"
                                className="mb-4 form-input"
                            />

                            <PasswordInput
                                control={control}
                                name="password"
                                placeholder="Password"
                                className="mb-4 password-input"
                            />

                            <FormCheckbox
                                control={control}
                                name="rememberMe"
                                label="Keep me signed in"
                                className="mb-4 mt-4 custom-checkbox"
                            />

                            <ButtonWidget disabled={isLoading}  type="submit" className="btn-submit">Sign In</ButtonWidget>

                            <div className="divider mt-4">
                                <span className='divider-text'>Or Sign In With</span>
                            </div>
                            <div className='d-flex align-items-center justify-content-center gap-3 mt-4'>
                            {
                               
                                logoImage?.map((logo, index) => (
                                  <div key={index} >
                                    <img
                                        key={index}
                                        src={logo}
                                        alt="Illustration"
                                        className="login-logo"
                                    />
                                    </div>
                                ))
                            }
                            </div>
                        </Form>
                    </div>
                </Col>

                <Col md={6} className="image-side d-none d-md-flex  align-items-center justify-content-center">
                    <img
                        src={img1}
                        alt="Illustration"
                        className="login-illustration"
                    />

                </Col>

            </Row>
        </Container>
    );
};

export default LoginForm;