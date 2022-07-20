import { Divider } from 'antd';
import './App.css';
import TodoList from './components/TodoList';
import Filters from './components/Filters';

function App() {
  return (
    <div className='br'>
      <div className='App'>
        <h1 className='title'>TODO APP with REDUX</h1>
        <Filters />
        <Divider />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
