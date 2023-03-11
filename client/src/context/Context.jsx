import { createContext, useState } from "react";

 export const Context = createContext({});

export const ContextProvider = ({ children }) => {
  const [password, setPassword] = useState("");
  const [togglePass, setTogglePass] = useState("password");
  const [visible, setVisible] = useState(true);

  const [Cpassword, setCPassword] = useState("");
  const [CtogglePass, setCTogglePass] = useState("password");
  const [Cvisible, setCVisible] = useState(true);

  return (
    <Context.Provider
      value={{
        visible,
        setVisible,
        togglePass,
        setTogglePass,
        password,
        setPassword,
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
