import UserContext from "../context/UserContext";
import { useContext, useState } from "react";

const ChangeUser = () => {
  const {userName, changeUserName} = useContext(UserContext);
  const [text, setText] = useState("");

  const changeUserHandle = (event) => {
    event.preventDefault();
    changeUserName(text)
    setText("")
  }
  return (
    <form>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={changeUserHandle}>Change</button>
    </form>
  )
}

export default ChangeUser;