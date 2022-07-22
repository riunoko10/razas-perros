import './styles/App.css';
import Index from './pages/Index';
import Rhodesian from './pages/rhodesian';
import BorderCollie from './pages/bordercollie';
import NuevoPost from './pages/NuevoPost';
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    Outlet,
  } from "react-router-dom";
import Layout from './layouts/Layout';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Layout>
        <Routes>
          
            <Route path="/rhodesian" element={<Rhodesian />} />
            <Route path="/nuevo-post" element={<NuevoPost />} />
            <Route path="/bodercollie" element={<BorderCollie />} />
          
            <Route path="/" element={<Index />} />
          
        </Routes>
      </Layout>
    </BrowserRouter>
    
    </div>
  );
}

export default App;
