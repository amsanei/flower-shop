import { useState, useContext } from "react";
import UserContext from "../context/UserContext";
import { useNavigate, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

export default function Login() {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });
    const { username, password } = formData;

    const { users, userLogin } = useContext(UserContext);

    const navigate = useNavigate();

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.id]: e.target.value,
        }));
    };

    const login = (e) => {
        e.preventDefault();
        const user = users.find((user) => user.username === username);

        if (user) {
            if (user.password === password) {
                userLogin(user.id);
                navigate("/user-panel");
            } else {
                alert("wrong password");
            }
        } else {
            alert("username not found");
        }
    };
    return (
        <div className="auth-container">
            <div className="auth-form">
                <div className="auth-form-header">
                    <div className="auth-form-info">
                        <div className="auth-form-title">Login</div>
                        <div className="auth-form-dec">
                            Login and have more fun
                        </div>
                    </div>
                    <div className="auth-back-to-home">
                        <Link to="/">
                            <FontAwesomeIcon icon={faHouse} />
                            <span>Back to home</span>
                        </Link>
                    </div>
                </div>
                <form onSubmit={login}>
                    <div className="auth-form-inputs">
                        <input
                            className="input-text"
                            onChange={onChange}
                            value={username}
                            type="text"
                            id="username"
                            placeholder="Username"
                        />
                        <input
                            className="input-text"
                            onChange={onChange}
                            value={password}
                            type="password"
                            id="password"
                            placeholder="Password"
                        />
                    </div>
                    <input
                        className="btn btn-prime btn-login"
                        type="submit"
                        value="Login"
                    />
                </form>
                <div className="auth-form-footer">
                    Don't have a account? <Link to="/sign-up">Sign Up</Link>
                </div>
            </div>
            <div className="auth-img">
                <img
                    src="https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Zmxvd2Vyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
                    alt="Flowers"
                />
            </div>
        </div>
    );
}
