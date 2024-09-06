import { useForm } from "react-hook-form";
import { useContext } from "react";
import { TaskContext } from "../../../providers";

export const CreateTaskForm = () => {
	const { taskCreate } = useContext(TaskContext);
	const { register, handleSubmit, reset } = useForm();

	const submit = (payload) => {
		taskCreate(payload);
		reset();
	};

	return (
		<form className="modal-form" onSubmit={handleSubmit(submit)}>
			<label className="headline">Nome</label>
			<input
				className="input-default"
				type="text"
				placeholder="Nome da tarefa"
				maxLength={20}
				{...register("title")}
			/>
			<label className="headline">Descrição</label>
			<textarea
				className="input-default"
				placeholder="Descrição da tarefa"
				maxLength={100}
				{...register("content")}
			/>

			<button className="btn-primary" type="submit">
				Cadastrar Tarefa
			</button>
		</form>
	);
};
