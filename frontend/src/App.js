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
              <div style={{color: 'red', marginBottom: '30px'}} class="dis">
            <span>
                Disclaimer:
                This is just a project to show some fullstack development features.
                This should not be used as a way to trade stocks or as advise on trading.
            </span>
        </div>


      <AddNewStockModal />

      <StockList />

      <PolygonAPI />

    </div>
  );
}


export default App;
