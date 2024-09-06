import { api } from "../services";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(false);
	const [isHidden, setIsHidden] = useState(true);
	const navigate = useNavigate();

	useEffect(() => {
		let ignore = false;
		const token = localStorage.getItem("@taskapp:token");

		const getUser = async () => {
			try {
				setLoading(true);

				const { data } = await api.get("/users/profile", {
					headers: {
						Authorization: `Bearer ${token}`,
					},
				});

				setUser(data);
			} catch (error) {
				if (error.response && error.response.status === 401 && !ignore) {
					toast.error("Sua sessão expirou, faça o login novamente.");
				}
			} finally {
				setLoading(false);
				navigate("/dashboard");
			}
		};

		if (token) {
			getUser();
		}

		return () => {
			ignore = true;
		};
	}, []);

	const userRegister = async (payload) => {
		const { confirmPassword, ...rest } = payload;

		try {
			const { data } = await api.post("/users", rest);

			setUser(data);
			toast.success("Conta criada com sucesso!");
			navigate("/");
		} catch (error) {
			if (error.response && error.response.status === 409) {
				toast.error("Este email já está cadastrado.");
			}
		}
	};

	const userLogin = async (payload) => {
		try {
			const { data } = await api.post("/users/login", payload);

			setUser(data.user);
			localStorage.setItem("@taskapp:token", data.accessToken);
			toast.success("Login realizado com sucesso!");
			navigate("/dashboard");
		} catch (error) {
			toast.error("Email ou senha inválido.");
		}
	};

	const userLogout = () => {
		setUser(null);
		localStorage.removeItem("@taskapp:token");
		navigate("/");
	};

	const toggleVisibility = () => {
		setIsHidden((prevState) => !prevState);
	};

	return (
		<UserContext.Provider
			value={{
				user,
				loading,
				isHidden,
				userLogin,
				userRegister,
				userLogout,
				toggleVisibility,
			}}
		>
			{children}
		</UserContext.Provider>
	);
};
