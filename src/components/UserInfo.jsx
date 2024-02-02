import UserContext from "../context/UserContext";

import { useContext } from "react";

const UserInfo = () => {
  const {userName} = useContext(UserContext);
  return (
    <div className="user-info">
      <h1>{userName}</h1>
    </div>
  );
};

export default UserInfo;
