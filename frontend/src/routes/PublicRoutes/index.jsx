import { useContext } from "react";
import { UserContext } from "../../providers";
import { Navigate, Outlet } from "react-router-dom";

export const PublicRoutes = () => {
	const { user } = useContext(UserContext);

	return user ? <Navigate to="/" /> : <Outlet />;
};
