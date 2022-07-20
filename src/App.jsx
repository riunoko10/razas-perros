import './styles/App.css';
import Index from './pages/Index';
import Rhodesian from './pages/rhodesian';
import NuevoPost from './pages/NuevoPost';
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    Outlet,
  } from "react-router-dom";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/rhodesian" element={<Rhodesian />} />
        <Route path="/nuevo-post" element={<NuevoPost />} />

        <Route path="/" element={<Index />} />
      </Routes>
    </BrowserRouter>
        
    </div>
  );
}

export default App;
