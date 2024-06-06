import './App.css';
import Parent from './Props-Drilling/parent';
import ParentLifting from './Props-Lifting/parent';

function App() {
  return (
    <div >
      <Parent/>
      <ParentLifting />
    </div>
  );
}

export default App;
