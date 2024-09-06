import { TaskCard } from "./TaskCard";
import { useContext } from "react";
import { TaskContext } from "../../providers";

export const TaskList = () => {
	const { taskInfo } = useContext(TaskContext);

	return taskInfo && taskInfo.length > 0 ? (
		<ul className="list-container">
			{taskInfo.map((task, index) => (
				<li className="list-content" key={index}>
					<TaskCard task={task} />
				</li>
			))}
		</ul>
	) : (
		<p className="paragraph">Sua lista de tarefas está vazia...</p>
	);
};
