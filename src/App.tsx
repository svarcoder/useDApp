import { DAppProvider } from "@usedapp/core";
import "./App.css";
import Main from "./module/Main";
import { config } from "./utils/Functions";

function App() {
	return (
		<DAppProvider config={config}>
			<Main />
		</DAppProvider>
	);
}

export default App;
