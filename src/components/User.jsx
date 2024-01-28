import UserInfo from "./UserInfo";

const User = ({ user }) => {
  return (
    <div className="user">
      <UserInfo user={user} />
    </div>
  );
};

export default User;
