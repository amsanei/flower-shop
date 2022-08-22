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


    return (
        <UserContext.Provider value={{users}}>{children}</UserContext.Provider>
    );
};

export default UserContext;
