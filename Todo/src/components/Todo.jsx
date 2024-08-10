import {useState} from 'react'; 

function Todo(){
	const [todoList,setTodoList] = useState([]);
	const [todoItem, setTodoItem] = useState("");
	
	const rand = (length = 5) => {
		const allChars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
		let totalLength = length <= allChars.length ? length : allChars.length;
		let randomStr = '';
		console.log(allChars.length)
		for(var i=0; i<totalLength; i++){
			let idx = Math.floor(Math.random() * allChars.length);
			console.log(i, idx);
			randomStr += ''+allChars[idx];
		}
		console.log(randomStr);
		return randomStr;
	}
	
	const onInput = (e) => {
		//console.log(e);
		let val = e.target.value;
		if(val){
			setTodoItem(val);
		}
	}
	
	const addTodoItem = () => {
		console.log(todoItem);
		let newItem = {
			id:rand(10),
			task:todoItem,
			completed:false
		};
		let taskArr = [...todoList, newItem];
		setTodoList(taskArr);
		console.log(taskArr);
		setTodoItem('');
	}
	

	return (
		<>
		<input type="text" onChange={onInput} value={todoItem} />
		<button onClick={addTodoItem}>Add</button>
		<ul>
		{todoList.map((t) => <li key={t.id}>{t.task}</li>)}
		</ul>
		</>
	)
}

export default Todo;