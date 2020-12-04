import React , {useState , useRef} from 'react';
import './App.css';

function App() {

	const [toDoList , setToDoList] = useState([]);
	const [todo , setTodo ] = useState("");

	const inputTask = useRef(null);
	// 

	function clickHandler(){
		setToDoList([...toDoList,{task:todo , isCompleted:false}])
		inputTask.current.value = "";
		setTodo("")
	}
	// delete taskfunctiin 
	function deleteTask(itemToDelete){

		setToDoList(toDoList.filter(task => {
			return task.task !== itemToDelete
		}))

	}
	// function to set task isCompleted
	const  taskComplete = (itemToSetCompleted) => {
			setToDoList(toDoList.map((task) => {

				return task.task === itemToSetCompleted ? {task:itemToSetCompleted, isCompleted:true}
				: {task:task.task, isCompleted:task.isCompleted ? true : false};
			})
			)
	}

  return (
    <div className="App">
     <h1>Todo List </h1>
		 <div className="main">

		 <input
		 ref={inputTask}
		  type="text" 
			placeholder="Enter todo"
			onKeyDown={(e) =>
			{if (e.keyCode == 13)
			addTodo();
			 }  
			}
		 onChange={(e) => setTodo(e.target.value) } 
		 />
		 <button onClick={clickHandler}>Add Task </button>

		 <ul>
			{ 
				toDoList.map((item, id) => { 
					return (
						<div id="task">
						<li 
						key={id}>{item.task}</li>
					<button 
					onClick={() => deleteTask(item.task)}> X </button>

					<button 
					onClick={taskComplete(item.task)}>
					mark complete
					</button>
					{ item.isCompleted ? <h2>task completed</h2> 
					:<h3>Not completed</h3>}
					</div>
					)
					}
				)
			
			}
			</ul>
			 
		 
		 </div>
		 
	

    </div> 
  );
}

export default App;
