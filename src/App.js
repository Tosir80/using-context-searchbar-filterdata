
import './App.css';
import ContextProvider from './components/context/ContextProvider';
import Home from './components/Pages/Home';


function App() {
  return (
    <div className="App">
      {/* wrap app js */}
      <ContextProvider>
        <Home></Home>
      </ContextProvider>
    </div>
  );
}

export default App;
