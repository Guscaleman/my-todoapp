import "./input.css";
import "react-toastify/dist/ReactToastify.css";
import { Spinner } from "react-loading-io";
import { useContext } from "react";
import { RouterMain } from "./routes/RouterMain";
import { UserContext } from "./providers";
import { ToastContainer } from "react-toastify";

function App() {
	const { loading } = useContext(UserContext);
	const spinnerCfg = {
		left: "40%",
		transform: "translateY(140%)",
	};

	return (
		<>
			<ToastContainer position="bottom-center" theme="dark" />
			{loading ? <Spinner style={spinnerCfg} /> : <RouterMain />}
		</>
	);
}

export default App;
