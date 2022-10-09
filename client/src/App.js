import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import News from "./pages/News";
import Register from "./pages/Register";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              currentUser ? <Home /> : <Navigate replace to="/register" />
            }
          />
          <Route
            path="/register"
            element={currentUser ? <Navigate replace to="/" /> : <Register />}
          />
          <Route
            path="/news"
            element={
              currentUser ? <News /> : <Navigate replace to="/register" />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
