import './App.css';
import AddTransaction from './components/AddTransaction';
import Balance from './components/Balance';
import Header from './components/Header';
import History from './components/History';
import Income from './components/Incomeexpense';
import GlobalProvider from './context/Globalstate';
function App() {
  return (
    <div className="App">
      <GlobalProvider>
        <Header />
        <div className="container">
          <Balance />
          <Income />
          <History />
          <AddTransaction />
        </div>
      </GlobalProvider>
    </div>
  );
}

export default App;
