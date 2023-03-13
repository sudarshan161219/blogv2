import { createContext, useState } from "react";

export const Context = createContext({});

export const ContextProvider = ({ children }) => {
  const [password, setPassword] = useState("");
  const [togglePass, setTogglePass] = useState("password");
  const [visible, setVisible] = useState(true);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");

  const [Cpassword, setCPassword] = useState("");
  const [CtogglePass, setCTogglePass] = useState("password");
  const [Cvisible, setCVisible] = useState(true);
  const [redirect, setRedirect] = useState(false);




  return (
    <Context.Provider
      value={{
        redirect,
         setRedirect,
        visible,
        setVisible,
        togglePass,
        setTogglePass,
        password,
        setPassword,
        userName,
         setUserName,
        userEmail,
         setUserEmail,
        Cvisible,
        setCVisible,
        CtogglePass,
        setCTogglePass,
        Cpassword,
        setCPassword,
      }}
    >
      {children}
    </Context.Provider>
  );
};


