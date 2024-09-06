import { useEffect, useRef } from "react";

export const useOutsideClick = (callback) => {
	const ref = useRef(null);

	useEffect(() => {
		const handleClick = (event) => {
			if (ref.current && !ref.current.contains(event.target)) {
				if (callback) callback(ref.current);
			}
		};

		document.addEventListener("mousedown", handleClick);
		document.addEventListener("touchstart", handleClick);

		return () => {
			document.removeEventListener("mousedown", handleClick);
			document.removeEventListener("touchstart", handleClick);
		};
	}, [callback]);

	return ref;
};
