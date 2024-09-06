import { useOutsideClick } from "../../hooks";

export function Modal({ children, modalTitle, onClose }) {
	const modalRef = useOutsideClick(onClose);

	return (
		<div className="modal-container">
			<div className="modal-content" role="dialog" ref={modalRef}>
				<div className="modal-header">
					<h1>{modalTitle}</h1>
					<button onClick={onClose}>X</button>
				</div>
				{children}
			</div>
		</div>
	);
}
