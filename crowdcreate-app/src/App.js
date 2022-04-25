import { BrowserRouter, Route, Routes } from 'react-router-dom'


import './App.css';
import StartScreen from './components/Start/StartScreen';
import ProjectList from './components/Projectlist';
import Favourites from './components/Favourites';
import News from './components/News';
import Profile from './components/Profile';
/* import { BrowserRouter, Link, Routes, Route } from 'react-router-dom'; */

function App() {
  return (
    <div id="app" className="App w-screen h-screen sm:w-[390px] sm:h-[844px] flex justify-center items-center border-2">
      <BrowserRouter className="">
        <Routes>
          <Route path="/" element={<StartScreen/>} />
          <Route path="/projectlist" element={<ProjectList/>} />
          <Route path="/favourites" element={<Favourites/>} />
          <Route path="/news" element={<News/>} />
          <Route path="/profile" element={<Profile/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
