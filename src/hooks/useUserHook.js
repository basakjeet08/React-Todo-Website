import { useState } from "react";

function useUserHook() {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });

  const updateUser = (event) => {
    const type = event.target.name;
    const value = event.target.value;

    setUser((previousUser) => {
      return {
        ...previousUser,
        [type]: value,
      };
    });
  };

  return [user, updateUser];
}

export default useUserHook;
