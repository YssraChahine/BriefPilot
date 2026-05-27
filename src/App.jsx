import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { Home } from "./pages/Home/Home";
import { Categories } from "./pages/Categories/Categories";
import { CreateLetter } from "./pages/CreateLetter/CreateLetter";
import { Result } from "./pages/Result/Result";
import { About } from "./pages/About/About";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/kategorien" element={<Categories />} />
        <Route path="/erstellen/:categoryId" element={<CreateLetter />} />
        <Route path="/ergebnis" element={<Result />} />
        <Route path="/ueber-briefpilot" element={<About />} />
      </Route>
    </Routes>
  );
}

export default App;
