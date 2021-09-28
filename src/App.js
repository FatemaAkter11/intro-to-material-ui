import './App.css';
import { Button, Rating } from '@mui/material';

function App() {
  return (
    <div className="App">
      <Button variant="contained">Click me</Button>
      <Rating name="read-only" value={3} readOnly />
    </div>
  );
}

export default App;
