import './App.css';
import Header from './Header';
import Card1 from './Card1';
import Card3 from './Card3';
import TestCard from './TestCard'
function App() {
  return (
    <div className="App container-fluid">
    <Header/>
    <Card1/>
    <TestCard/>
    <Card3 />
    </div>
  );
}

export default App;
