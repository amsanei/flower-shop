import { useState, useContext } from "react";
import UserContext from "../context/UserContext";
import { useNavigate, Link } from "react-router-dom";

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
        <div>
            <form onSubmit={login}>
                <input
                    onChange={onChange}
                    value={username}
                    type="text"
                    id="username"
                />
                <input
                    onChange={onChange}
                    value={password}
                    type="password"
                    id="password"
                />
                <input type="submit" value="Login" />
            </form>
            <Link to="/">Home</Link>
            <div>
                Don't have a account? <Link to="/sign-up">Sign Up</Link>
            </div>
        </div>
    );
}
