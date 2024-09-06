import Logo from "../../../assets/Logo.svg";
import { Link } from "react-router-dom";
import { Input } from "../Input";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserContext } from "../../../providers";
import { InputPassword } from "../InputPassword";
import { loginFormSchema } from "./loginForm.schema";

export const LoginForm = () => {
	const { userLogin } = useContext(UserContext);

	const submit = (formData) => {
		userLogin(formData);
	};

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(loginFormSchema),
	});

	return (
		<main className="form-container">
			<img src={Logo} alt="Logo task app" />
			<div className="form-content">
				<h1>Login</h1>
				<form onSubmit={handleSubmit(submit)}>
					<Input
						label="Email"
						placeholder="Informe seu email"
						type="email"
						error={errors.email}
						{...register("email")}
					/>
					<InputPassword
						label="Senha"
						placeholder="Informe sua senha"
						type="password"
						error={errors.password}
						{...register("password")}
					/>
					<button className="btn-primary" type="submit">
						Entrar
					</button>
					<p className="headline-bold">Ainda não possui uma conta?</p>
					<Link className="btn-register" to="/register">
						Cadastre-se
					</Link>
				</form>
			</div>
		</main>
	);
};
