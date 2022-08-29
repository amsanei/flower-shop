import { useContext, useState } from "react";
import UserContext from "../context/UserContext";
import { useNavigate, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

export default function SignUp() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        username: "",
        password: "",
    });
    const { email, username, password } = formData;
    const { addUser } = useContext(UserContext);

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.id]: e.target.value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addUser(formData);
        navigate("/login");
    };
    return (
        <div className="auth-container">
            <div className="auth-form">
                <div className="auth-form-header">
                    <div className="auth-form-info">
                        <div className="auth-form-title">Sign up</div>
                        <div className="auth-form-dec">
                            Register and help us help you
                        </div>
                    </div>
                    <div className="auth-back-to-home">
                        <Link to="/">
                            <FontAwesomeIcon icon={faHouse} />
                            <span>Back to home</span>
                        </Link>
                    </div>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="auth-form-inputs">
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            id="email"
                            onChange={onChange}
                            required
                            className="input-text"
                        />

                        <input
                            type="text"
                            placeholder="Username"
                            value={username}
                            id="username"
                            onChange={onChange}
                            required
                            className="input-text"
                        />

                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            id="password"
                            onChange={onChange}
                            required
                            className="input-text"
                        />
                    </div>

                    <input
                        className="btn btn-prime btn-auth"
                        type="submit"
                        value="Sign up"
                    />
                </form>
                <div className="auth-form-footer">
                    Do you have an account? <Link to="/login">Login</Link>
                </div>
            </div>
            <div className="auth-img">
                <img
                    src="https://images.unsplash.com/photo-1424384309529-4f05c2349657?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                    alt="Flowers"
                />
            </div>
        </div>
    );
}
