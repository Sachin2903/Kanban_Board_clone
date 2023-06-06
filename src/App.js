
import { Routes,Route } from 'react-router-dom';
import './App.css';
import { HeroPage } from './components/pages/heropage/heroPage'; 
import {MainPage} from "./components/pages/mainPage/mainPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage/>}/>
      <Route path="/kanbanboard" element={<HeroPage/>}/>
    </Routes>
  );
}

export default App;
