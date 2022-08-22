import { createContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [users, setUsers] = useState([
        {
            id: "1a2a1a",
            username: "amir",
            password: "amir12345",
            email: "a@a.ir",
        },
    ]);

    const [loggedinUser, setLoggedinUser] = useState({});
    const [isLoggedin, setIsLoggedin] = useState(false);

    const userLogin = (userId) => {
        setLoggedinUser(users.find((user) => user.id === userId));
        setIsLoggedin(true);
    };

    const userLogout = () => {
        setLoggedinUser({});
        setIsLoggedin(false);
    };

    return (
        <UserContext.Provider
            value={{ users, loggedinUser, userLogin, isLoggedin, userLogout }}
        >
            {children}
        </UserContext.Provider>
    );
};

export default UserContext;
