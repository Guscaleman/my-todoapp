import Logo from "../../assets/Logo.svg";
import { Modal } from "../../components/Modal";
import { TaskList } from "../../components/TaskList";
import { useContext } from "react";
import { ContentForm } from "../../components/Form/ContentForm";
import { EditTaskForm } from "../../components/Form/EditTaskForm";
import { CreateTaskForm } from "../../components/Form/CreateTaskForm";
import { TaskContext, UserContext } from "../../providers";

export const DashboardPage = () => {
	const { user, userLogout } = useContext(UserContext);
	const {
		createModal,
		setCreateModal,
		editingTask,
		setEditingTask,
		showContent,
		setShowContent,
	} = useContext(TaskContext);

	return (
		<main className="main-dashboard">
			<header className="dash-header">
				<img src={Logo} alt="Logo task app" />
				<button onClick={userLogout}>Sair</button>
			</header>
			<section className="dash-banner">
				<h1>Olá, {user?.name}</h1>
				<p className="headline-bold">Seja bem vindo(a) ao dashboard!</p>
			</section>
			<section className="dash-content">
				<h1>Lista de tarefas</h1>
				<button onClick={() => setCreateModal(true)}>+</button>
			</section>
			{createModal ? (
				<Modal
					modalTitle={"Cadastrar tarefas"}
					onClose={() => setCreateModal(false)}
				>
					{" "}
					<CreateTaskForm />{" "}
				</Modal>
			) : null}
			{editingTask ? (
				<Modal
					modalTitle={"Editar detalhes"}
					onClose={() => setEditingTask(null)}
				>
					{" "}
					<EditTaskForm />{" "}
				</Modal>
			) : null}
			{showContent ? (
				<Modal
					modalTitle={"Descrição da tarefa"}
					onClose={() => setShowContent(null)}
				>
					{" "}
					<ContentForm />{" "}
				</Modal>
			) : null}
			<TaskList />
		</main>
	);
};
