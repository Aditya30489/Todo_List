//import logo from './logo.svg';
import './App.css'
import TodoApp from './components/TodoApp';
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';

function App() {
  return (
    <div className="App-header">
      <h1 className='text-center textStyle mb-5'>Todo List</h1>
      <div className='d-flex row m-3'>
        <div className='col-2'></div>
        <div className='col-8'><TodoApp /></div>
        <div className='col-2'></div>
      </div>
    </div>
  );
}

export default App;
