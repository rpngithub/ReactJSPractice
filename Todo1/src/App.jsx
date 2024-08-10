
import { useState } from 'react';
import './App.css'

function App() {
  const [todoList, setTodoList] = useState([]);
  const [task, setTask] = useState("");

  function onInput(e){
    let val = e.target.value;
    if(val){
      setTask(e.target.value);
    }
  }

  function addTask(){
    let tempTodoList = [...todoList];
    let newTask = {}
    if(task){
      // tempTodoList.push(task);
      newTask.id = rand();
      newTask.name = task;
      newTask.state = 'inprogress';
      tempTodoList.push(newTask);
      setTodoList(tempTodoList);
    }
    setTask('');
  }

  const toggleState = (taskId) => {
    // console.log(taskId);
    let newTodoList = todoList.map((task)=>{
      if(task.id == taskId){
        // console.log(task.state);
        task.state = task.state == 'inprogress' ? 'completed' : 'inprogress';
      }
      return task;
    })
    console.log(newTodoList);
    setTodoList(newTodoList);
  }

  const rand = (length = 5) => {
		const allChars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
		let totalLength = length <= allChars.length ? length : allChars.length;
		let randomStr = '';
		// console.log(allChars.length)
		for(var i=0; i<totalLength; i++){
			let idx = Math.floor(Math.random() * allChars.length);
			// console.log(i, idx);
			randomStr += ''+allChars[idx];
		}
		// console.log(randomStr);
		return randomStr;
	}

  return (
    <>
      <h1>Todo App</h1>
      <input type='text' style={{marginRight:10, padding: 10}} value={task} onChange={onInput} />
      <button onClick={addTask}>Add</button>
      <ul>
        {
          todoList.map(task => <li 
            key={task.id} 
            onClick={() => {toggleState(task.id)}} 
            style={{textDecoration: task.state == 'completed' ? 'underline' : 'none'}}>{task.name}</li>)
        }
      </ul>
    </>
  )
}

export default App
