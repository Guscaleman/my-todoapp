import { useForm } from "react-hook-form";
import { useContext } from "react";
import { TaskContext } from "../../../providers";

export const ContentForm = () => {
	const { showContent } = useContext(TaskContext);
	const { register } = useForm({
		values: {
			description: showContent.content,
		},
	});

	return (
		<form className="modal-form">
			<textarea
				disabled
				className="input-default"
				{...register("description")}
			></textarea>
		</form>
	);
};
