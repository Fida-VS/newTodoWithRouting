
import { Link } from 'react-router-dom';
import styles from './todo.module.css';


export const Todo = ({text, id, requestUpdateTodo, requestDeleteTodo, edit, setEdit, updateInputValue, setUpdateInputValue}) => {

	function updateTodo(id, text){
		setEdit(id);
		setUpdateInputValue(text);
	}

	return (
		<li className={styles.todo}>

			{
			edit === id ?
			<div>
				<input onChange={(e)=>setUpdateInputValue(e.target.value)} value={updateInputValue} />
			</div>
			: <div><Link to="todo">{text}</Link></div>
		}
		{
			edit === id ?
			<div><button onClick={()=>requestUpdateTodo(id)}>Сохранить</button></div>
			: <div className={styles.buttonDiv}>
			<button onClick={() => updateTodo(id, text)} className={styles.changeTodo}>🖉</button>
			<button onClick={() => requestDeleteTodo(id)} className={styles.deleteTodo}>✖</button>
			</div>
		}

		</li>
	);
};
