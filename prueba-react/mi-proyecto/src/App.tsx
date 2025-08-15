import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PokemonList } from "./pages/PokemonList";
import { PokemonDetails } from "./pages/PokemonDetails";

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<PokemonList />} />
                <Route path="/pokemon/:name" element={<PokemonDetails />} />
            </Routes>
        </Router>
    );
}