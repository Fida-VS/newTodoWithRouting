import styles from './todo-list.module.css';
import { AddNewTodoForm } from '../addNewTodoForm/addNewTodoForm';
import { Todo } from '../todo/todo';
import { Link, Outlet } from 'react-router-dom';


export const TodoListLayout = ({
	value,
	setValue,
	requestAddNewTodo,
	getSortedTodos,
	isSorted,
	setIsSorted,
	requestUpdateTodo,
	requestDeleteTodo,
	edit,
	setEdit,
	updateInputValue,
	setUpdateInputValue,
	todos,
	onSearch,
}) => {


	return (
		<>
		<h3><Link to="/">Todo</Link></h3>
			<AddNewTodoForm
				value={value}
				setValue={setValue}
				requestAddNewTodo={requestAddNewTodo}
				isSorted={isSorted}
				getSortedTodos={getSortedTodos}
				setIsSorted={setIsSorted}
				onSearch={onSearch}
			/>
			<ul className={styles.todoList}>
				{todos.map(({ id, text }) => (
					<Todo
						text={text}
						id={id}
						requestUpdateTodo={requestUpdateTodo}
						requestDeleteTodo={requestDeleteTodo}
						edit={edit}
						setEdit={setEdit}
						updateInputValue={updateInputValue}
						setUpdateInputValue={setUpdateInputValue}
					/>
				))}
			</ul>
			<Outlet/>
		</>
	);
};
