import Logo from "../../../assets/Logo.svg";
import { Link } from "react-router-dom";
import { Input } from "../Input";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserContext } from "../../../providers";
import { InputPassword } from "../InputPassword/index.jsx";
import { registerFormSchema } from "./registerForm.schema.js";

export const RegisterForm = () => {
	const { userRegister } = useContext(UserContext);

	const submit = (formData) => {
		userRegister(formData);
	};

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(registerFormSchema),
	});

	return (
		<main className="form-container">
			<header className="reg-header">
				<img src={Logo} alt="Logo task app" />
				<Link className="reg-back" to="/">
					Voltar
				</Link>
			</header>
			<div className="form-content">
				<h1>Crie sua conta</h1>
				<p className="reg-message">Rápido e grátis, vamos nessa!</p>
				<form onSubmit={handleSubmit(submit)}>
					<Input
						label="Nome"
						type="text"
						placeholder="Digite aqui seu nome"
						maxLength="20"
						{...register("name")}
						error={errors.name}
					/>
					<Input
						label="Email"
						type="email"
						placeholder="Digite aqui seu email"
						{...register("email")}
						error={errors.email}
					/>
					<InputPassword
						label="Senha"
						type="password"
						placeholder="Digite sua senha"
						{...register("password")}
						error={errors.password}
					/>
					<InputPassword
						label="Confirmar Senha"
						type="password"
						placeholder="Confirme sua senha"
						{...register("confirmPassword")}
						error={errors.confirmPassword}
					/>
					<button className="btn-secondary" type="submit">
						Cadastrar
					</button>
				</form>
			</div>
		</main>
	);
};
