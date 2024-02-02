import { useState } from "react";

import UserContext from "./context/UserContext";

import { ChangeUser, User } from "./components";

import "./App.css";

function App() {
	const [user, setUser] = useState("Daler");
	return (
		<UserContext.Provider value={{userName: user, changeUserName: setUser}}>
			<div className="App">
				<User/>
        <ChangeUser />
			</div>
		</UserContext.Provider>
	);
}

export default App;
