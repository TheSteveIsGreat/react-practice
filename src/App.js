import './App.css';
import Container from './Container';
import Counter from './Counter';
import FlashCard from './FlashCard';
import TodoList from './TodoList';

function App() {
  return (
    <div>
      <Container header='FlashCard'>
        <FlashCard />
      </Container>

      <Container header='Counter'>
        <Counter />
      </Container>

      <Container header='To Do List'>
        <TodoList />
      </Container>
    </div>
  );
}

export default App;
