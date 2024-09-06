import { useForm } from "react-hook-form";
import { useContext } from "react";
import { TaskContext } from "../../../providers";

export const EditTaskForm = () => {
	const { editingTask, taskUpdate, handleCheckboxChange } =
		useContext(TaskContext);
	const { register, handleSubmit } = useForm({
		values: {
			title: editingTask.title,
			content: editingTask.content,
			finished: editingTask.finished,
		},
	});

	const submit = (payload) => {
		taskUpdate(payload);
	};

	return (
		<form className="modal-form" onSubmit={handleSubmit(submit)}>
			<label className="headline">Editar nome</label>
			<input
				className="input-default"
				type="text"
				placeholder="Nome da tarefa"
				{...register("title")}
			/>
			<label className="headline">Editar descrição</label>
			<textarea
				className="input-default"
				type="text"
				placeholder="Descrição da tarefa"
				maxLength={100}
				{...register("content")}
			/>
			<label
				className="headline"
				style={{ textAlign: "center", paddingLeft: "0" }}
			>
				{editingTask?.finished
					? "Desmarque para deixar em aberto"
					: "Marque para finalizar a tarefa"}
			</label>
			<input
				type="checkbox"
				style={{ width: "fit-content", cursor: "pointer" }}
				{...register("finished")}
				onChange={handleCheckboxChange}
			/>

			<button className="btn-primary" type="submit">
				Salvar Alterações
			</button>
		</form>
	);
};
