import './App.css';
import Portfolio  from './components/Portfilio'
import { data } from './files/data';

function App() {
  return (
    <div className="App">
        <Portfolio projectList={data} />
    </div>
  );
}

export default App;