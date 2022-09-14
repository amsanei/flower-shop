import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

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

    const [loggedinUser, setLoggedinUser] = useState({
        id: "1a2a1a",
        username: "amir",
        password: "amir12345",
        email: "a@a.ir",
    });
    const [isLoggedin, setIsLoggedin] = useState(true);

    const userLogin = (userId) => {
        setLoggedinUser(users.find((user) => user.id === userId));
        setIsLoggedin(true);
    };

    const userLogout = () => {
        setLoggedinUser({});
        setIsLoggedin(false);
    };

    const addUser = (userInfo) => {
        setUsers([
            ...users,
            {
                id: uuidv4(),
                username: userInfo.username,
                password: userInfo.password,
                email: userInfo.email,
            },
        ]);
    };

    return (
        <UserContext.Provider
            value={{
                users,
                loggedinUser,
                userLogin,
                isLoggedin,
                userLogout,
                addUser,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};

export default UserContext;
