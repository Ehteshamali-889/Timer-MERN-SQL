import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Create from './Create';
import Read from './Read';
import Edit from './Edit';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
        </Route>
        <Route path="/create" element={<Create />}>
        </Route>
        <Route path="/read/:id" element={<Read />}></Route>
        <Route path="/edit/:id" element={<Edit />}></Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
