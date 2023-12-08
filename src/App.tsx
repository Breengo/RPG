import { BrowserRouter, Route, Routes } from "react-router-dom";
import CharacterCreation from "./pages/CharacterCreation";
import Menu from "./pages/Menu";

function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route element={<CharacterCreation />} path="/create" />
          <Route element={<Menu />} path="/" />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
