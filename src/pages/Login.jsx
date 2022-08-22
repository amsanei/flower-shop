import { useState, useContext } from "react";
import UserContext from "../context/UserContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const { users, userLogin } = useContext(UserContext);

    const navigate = useNavigate();

    const usernameChange = (e) => {
        setUsername(e.target.value);
    };
    const passwordChange = (e) => {
        setPassword(e.target.value);
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
                    onChange={usernameChange}
                    value={username}
                    type="text"
                    id="username"
                />
                <input
                    onChange={passwordChange}
                    value={password}
                    type="password"
                    id="password"
                />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
}
