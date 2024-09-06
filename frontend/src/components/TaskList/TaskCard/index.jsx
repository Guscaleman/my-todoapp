import { MdEdit } from "react-icons/md";
import { useContext } from "react";
import { TaskContext } from "../../../providers";
import { MdDeleteForever } from "react-icons/md";

export const TaskCard = ({ task }) => {
	const { taskDelete, setEditingTask, setShowContent } =
		useContext(TaskContext);

	return (
		<section className="card-container">
			<a onClick={() => setShowContent(task)}>{task.title}</a>
			<div className="card-content">
				{task.finished ? (
					<p className="finished-msg">Finalizada</p>
				) : (
					<p className="unfinished-msg">Em aberto</p>
				)}
				<div className="card-buttons">
					<button onClick={() => setEditingTask(task)}>
						<MdEdit size={18} fill="#9ca3af" color="transparent" />
					</button>
					<button onClick={() => taskDelete(task.id)}>
						<MdDeleteForever size={21} fill="#9ca3af" color="transparent" />
					</button>
				</div>
			</div>
		</section>
	);
};
