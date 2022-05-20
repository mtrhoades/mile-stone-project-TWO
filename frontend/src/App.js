// IMPORTS
import './App.css';
import StockList from './components/StockList';
import AddNewStockModal from './components/AddNewStockModal';
import 'bootstrap/dist/css/bootstrap.min.css';



// FUNCTIONAL COMPONENT
function App() {
  // VANILLA JS SECTION
  document.body.style = 'background: lightblue';


  // JSX SECTION
  return (
    <div className="App">

      <AddNewStockModal />

      <StockList />

    </div>
  );
}

export default App;

//testing a pull request, delete this
//hello world