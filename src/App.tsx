import { BrowserRouter, Route, Routes } from "react-router-dom";
import CharacterCreation from "./pages/CharacterCreation";
import Menu from "./pages/Menu";
import Home from "./pages/Home";

function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route element={<CharacterCreation />} path="/create" />
          <Route element={<Menu />} path="/" />
          <Route element={<Home />} path="/home" />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
