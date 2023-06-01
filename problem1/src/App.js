import './App.css';
import Button from './components/Button';
import { useAppContext } from './context/appContext';

function App() {
  const { changeButtonColor } = useAppContext();
  return (
    <div className="App">
      <header className="App-header">
        <Button handleClick={changeButtonColor} />
      </header>
    </div>
  );
}

export default App;
