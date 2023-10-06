import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/layoutMain/layout";
import { NotFoundPage } from "./components/notFoundPage/notFoundPage";
import { TodoListLayout } from "./components/todo-list/todo-list-layout";
import { Todo } from "./components/todo/todo";
//import { TaskPage } from "./components/taskPage/taskPage";


export const App = () => {


	return (
<Routes>
		<Route path="/" element={<Layout />}>
          <Route path="/" element={<TodoListLayout />} >
			<Route path="todo" element={<Todo/>}/>

		  </Route>
        </Route>
		<Route path="*" element={<NotFoundPage />} />
      </Routes>

	);
};











