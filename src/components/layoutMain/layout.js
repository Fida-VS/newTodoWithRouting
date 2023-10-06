import { Outlet } from "react-router-dom";
import { Title } from "../Title";


export const Layout = () => {
	return (
		<>
		<header>
			<Title />
		</header>
		<main>
			<Outlet/>
		</main>
		</>
	);
};
