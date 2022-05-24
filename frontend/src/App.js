// IMPORTS
import './App.css';
import StockList from './components/StockList';
import AddNewStockModal from './components/AddNewStockModal';
import 'bootstrap/dist/css/bootstrap.min.css';
import PolygonAPI from './components/polygonAPI/PolygonAPI';



// FUNCTIONAL COMPONENT
function App() {
  // VANILLA JS SECTION


  // JSX SECTION
  return (
    <div className="App">

      <AddNewStockModal />

      <StockList />

      <PolygonAPI />

    </div>
  );
}


export default App;
