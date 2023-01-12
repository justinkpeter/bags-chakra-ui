import './App.css';
import { Lender } from './components/Lender/Lender'
import { lenderData } from './utils/data'

function App() {
  return (
    <div className="">
      <header className="App-header">
        <Lender data={lenderData}/>
      </header>
    </div>
  );
}

export default App;
