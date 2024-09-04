// src/App.jsx
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import Pokemon from "./Pokemon";
import PokeById from "./PokeById";

function Layout() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-4">
        <div className="container mx-auto flex justify-between items-center px-6">
          <h1 className="text-3xl font-bold">Pokédex</h1>
          <nav>
            <Link 
              to="/favoritePokemon" 
              className="text-lg font-medium hover:bg-blue-600 px-4 py-2 rounded transition-colors"
            >
              Favorite Pokémon
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-8">
        <div className="container mx-auto max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-6">
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  );
}

// Main App Component
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            path="favoritePokemon"
            element={<Pokemon name="charmander" />} // Asegúrate de que el componente Pokemon acepte la prop name
          />
          <Route path="pokemon/:id" element={<PokeById />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
