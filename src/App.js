import './App.css';
import { Button, Rating } from '@mui/material';
import Newspaper from './components/Newspaper/Newspaper';

function App() {
  return (
    <div className="App">
      <Button variant="contained">Click me</Button>
      <Rating name="read-only" value={3} readOnly />
      <Newspaper></Newspaper>
    </div>
  );
}

export default App;
