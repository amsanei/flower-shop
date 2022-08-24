import { useContext, useState } from "react";
import UserContext from "../context/UserContext";
import { useNavigate } from "react-router-dom";

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
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="email"
                    value={email}
                    id="email"
                    onChange={onChange}
                    required
                />
                <br />
                <input
                    type="text"
                    placeholder="username"
                    value={username}
                    id="username"
                    onChange={onChange}
                    required
                />
                <br />
                <input
                    type="password"
                    placeholder="password"
                    value={password}
                    id="password"
                    onChange={onChange}
                    required
                />
                <br />
                <input type="submit" value="sign up" />
            </form>
        </div>
    );
}
