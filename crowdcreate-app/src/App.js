import './App.css';
import StartScreen from './components/StartScreen';
/* import { BrowserRouter, Link, Routes, Route } from 'react-router-dom'; */

function App() {
  return (
    <div id="app" className="App w-screen h-screen sm:w-[390px] sm:h-[844px] flex justify-center items-center border-2">
      {/* <BrowserRouter>
       <Route path="/" component={StartScreen}/>
      </BrowserRouter> */}
      <StartScreen/>
    </div>
  );
}

export default App;
