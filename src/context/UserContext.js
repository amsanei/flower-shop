import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const defaultUser = {
        id: "1a2a1a",
        username: "amir",
        password: "amir12345",
        fullName: "amir sanei",
        gender: "male",
        email: "am.sanei79@gmail.com",
        phoneNumber: "09147895462",
        state: "ardebil",
        city: "germi",
        zipCode: 123456789,
        address: "First street , aa block , red door",
        imageUrl:
            "https://images.unsplash.com/photo-1519689373023-dd07c7988603?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    };
    const [users, setUsers] = useState([defaultUser]);

    const [loggedinUser, setLoggedinUser] = useState(defaultUser);
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
