import { createContext, useState } from "react";

export const UserLoginContext = createContext();

const UserLoginContextProvider = ({ children }) => {

    const [loginUser, setLoginUser] = useState({});

    return (
        <UserLoginContext.Provider value={{ loginUser, setLoginUser }}>
            {children}
        </UserLoginContext.Provider>
    );
};

export default UserLoginContextProvider;