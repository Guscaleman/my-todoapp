import { api } from "../services";
import { toast } from "react-toastify";
import { UserContext } from "./UserContext";
import { createContext, useContext, useEffect, useState } from "react";

export const TaskContext = createContext({});

export const TaskProvider = ({ children }) => {
	const { user } = useContext(UserContext);
	const [taskInfo, setTaskInfo] = useState([]);
	const [createModal, setCreateModal] = useState(false);
	const [editingTask, setEditingTask] = useState(null);
	const [showContent, setShowContent] = useState(null);
	const [isChecked, setIsChecked] = useState(false);

	useEffect(() => {
		const token = localStorage.getItem("@taskapp:token");

		const taskList = async () => {
			try {
				const { data } = await api.get("/tasks", {
					headers: {
						Authorization: `Bearer ${token}`,
					},
				});

				setTaskInfo(data);
			} catch (error) {
				console.log(error);
			}
		};
		if (token) {
			taskList();
		}
	}, []);

	const taskCreate = async (formData) => {
		if (taskInfo.length < 10) {
			const token = localStorage.getItem("@taskapp:token");

			try {
				const { data } = await api.post("/tasks", formData, {
					headers: {
						Authorization: `Bearer ${token}`,
					},
				});

				setTaskInfo([...taskInfo, data]);
			} catch (error) {
				if (error.response && error.response.status === 401) {
					toast.error("Você não tem autorização, faça o login novamente.");
				} else {
					toast.error("Escolha um nome para sua tarefa.");
				}
			} finally {
				return;
			}
		}
		return toast.error("Você atingiu o máximo de tarefas cadastradas.");
	};

	const taskDelete = async (removingId) => {
		try {
			const token = localStorage.getItem("@taskapp:token");

			await api.delete(`/tasks/${removingId}`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});

			const newTaskInfo = taskInfo.filter((task) => task.id !== removingId);
			setTaskInfo(newTaskInfo);
		} catch (error) {
			if (error.response && error.response.status === 401) {
				toast.error("Você não tem autorização, faça o login novamente.");
			}
		}
	};

	const taskUpdate = async (formData) => {
		try {
			const token = localStorage.getItem("@taskapp:token");
			const { data } = await api.patch(`/tasks/${editingTask.id}`, formData, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});

			const newTaskInfo = taskInfo.map((task) => {
				if (task.id === editingTask.id) {
					return data;
				} else {
					return task;
				}
			});

			setTaskInfo(newTaskInfo);
			setEditingTask(null);
		} catch (error) {
			if (error.response && error.response.status === 401) {
				toast.error("Você não tem autorização, faça o login novamente.");
			} else {
				toast.error("Escolha um nome para sua tarefa.");
			}
		}
	};

	const handleCheckboxChange = () => {
		setIsChecked((prevState) => !prevState);
	};

	return (
		<TaskContext.Provider
			value={{
				taskInfo,
				user,
				taskCreate,
				taskDelete,
				createModal,
				setCreateModal,
				editingTask,
				setEditingTask,
				taskUpdate,
				showContent,
				setShowContent,
				isChecked,
				handleCheckboxChange,
			}}
		>
			{children}
		</TaskContext.Provider>
	);
};
