import { forwardRef, useContext } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { UserContext } from "../../../providers/UserContext";

export const InputPassword = forwardRef(({ label, error, ...rest }, ref) => {
	const { isHidden, toggleVisibility } = useContext(UserContext);
	const type = isHidden ? "password" : "text";

	return (
		<>
			<label className="headline">{label}</label>
			<div className="password-container">
				<div className="password-content">
					<input className="input-default" ref={ref} {...rest} type={type} />
					{error ? <p className="error-msg">{error.message}</p> : null}

					<span className="button-eye" onClick={toggleVisibility}>
						{isHidden ? (
							<FaRegEye cursor={"pointer"} size={21} />
						) : (
							<FaRegEyeSlash cursor={"pointer"} size={21} />
						)}
					</span>
				</div>
			</div>
		</>
	);
});
