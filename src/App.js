import './App.css';
import todo from './models/todo'
import TodoList from './components/TodoList'
const state = {//state is established with key:value pair
  todo
  // can have multiple models in state separated by comma
}

function App() {
  return (
    <div className="App">
      <TodoList allTodos = {state.todo}/>
    </div>
  );
}

export default App;
