import { z } from "zod";

export const registerFormSchema = z
	.object({
		name: z.string().min(1, "Este campo é obrigatório."),
		email: z
			.string()
			.min(1, "Este campo é obrigatório.")
			.email("Forneça um email válido."),
		password: z
			.string()
			.min(8, "Digite no mínimo oito caracteres.")
			.regex(/[a-z]+/, "É necessário pelo menos uma letra minúscula.")
			.regex(/[A-Z]+/, "É necessário pelo menos uma letra maiúscula.")
			.regex(/[0-9]+/, "É necessário pelo menos um número."),
		confirmPassword: z.string().min(8, "Este campo é obrigatório."),
	})
	.refine(({ password, confirmPassword }) => password === confirmPassword, {
		message: "As senhas não correspondem.",
		path: ["confirmPassword"],
	});
