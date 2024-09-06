import App from "./App.jsx";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { UserProvider } from "./providers";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<BrowserRouter>
			<UserProvider>
				<App />
			</UserProvider>
		</BrowserRouter>
	</StrictMode>
);
