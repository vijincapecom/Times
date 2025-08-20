import { logoImage } from "../helper/FunctionHelper"

export const HomeFooter = () => {
     const currentYear = new Date().getFullYear();

    return (
        <footer className="footer-section mt-5 text-center">
            <div className="mt-4">
                <div className='d-flex align-items-center justify-content-center gap-3 mt-4 mb-4'>
                    {

                        logoImage?.map((logo, index) => (
                            <div key={index}>
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
                <h4 className="footer-text-one mt-6">Example@email.com</h4>
                <p className="footer-text-one mt-3">{`Copyright © ${currentYear} Name. All rights reserved.`}</p>
            </div>
        </footer>
    )
}
