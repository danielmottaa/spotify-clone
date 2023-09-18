"use client";

import { MyUserContextProvider } from "@/hooks/useUser";

interface IUserProvider {
  children: React.ReactNode;
}

const UserProvider: React.FC<IUserProvider> = ({children}) => {
return (
  <MyUserContextProvider>
    {children}
  </MyUserContextProvider>
)
};

export default UserProvider;
