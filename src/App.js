import './styles/index.css'
import { ToDoList } from './Views/ToDo';
import { ToDoProvider } from './Contexts/ToDoContext'

function App() {
  return (
    <div>
      <ToDoProvider>
        <ToDoList />
      </ToDoProvider>
    </div>
  );
}

export default App;
