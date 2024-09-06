import { LoginPage } from "../../pages/LoginPage";
import { RegisterPage } from "../../pages/RegisterPage";
import { PublicRoutes } from "../PublicRoutes";
import { TaskProvider } from "../../providers";
import { Route, Routes } from "react-router-dom";
import { DashboardPage } from "../../pages/DashboardPage";
import { PrivateRoutes } from "../PrivateRoutes";

export const RouterMain = () => {
	return (
		<Routes>
			<Route path="/" element={<LoginPage />} />
			<Route element={<PublicRoutes />}>
				<Route path="/register" element={<RegisterPage />} />
			</Route>

			<Route element={<PrivateRoutes />}>
				<Route
					path="/dashboard"
					element={
						<TaskProvider>
							<DashboardPage />
						</TaskProvider>
					}
				/>
			</Route>
		</Routes>
	);
};
