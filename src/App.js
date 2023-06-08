import { Routes,Route } from 'react-router-dom';
import './App.css';
import { HeroPage } from './components/pages/heropage/heroPage'; 
import {MainPage} from "./components/pages/mainPage/mainPage";
import {EditOpenBox} from "./components/molecules/editTextBox/editTextBox";
function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage/>}/>
      <Route path="/kanbanboard" element={<HeroPage/>}/>
      <Route path="/description/:param1/:param2" element={<EditOpenBox/>}/>
    </Routes>
  );
}

export default App;
