import React, { useState } from "react";
import { ShoppingCart, User, Menu, X, LogOut } from "lucide-react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const [searchInput, setSearchInput] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const handleSearch = (e) => {
    if (e.key === "Enter" && searchInput.trim() !== "") {
      navigate(`/search?query=${encodeURIComponent(searchInput.trim())}`);
      setSearchInput("");
      setMenuOpen(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
    window.location.reload();
  };

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="w-full fixed top-0 z-50 bg-white shadow-md px-4 md:px-6 py-4 flex items-center justify-between">
      {/* Logo */}
      <Link to="/" className="text-xl font-bold text-indigo-600">
        Mabootik Shop
      </Link>

      {/* Search bar (desktop) */}
      <div className="flex-1 mx-4 hidden md:block">
        <input
          type="text"
          placeholder="Rechercher un produit..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          onKeyDown={handleSearch}
          className="w-full p-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      {/* Desktop links */}
      <div className="hidden md:flex items-center gap-6 text-gray-700">
        <Link to="/products" className="hover:text-indigo-600">
          Produits
        </Link>

        <Link to="/cart" className="relative">
          <ShoppingCart className="w-6 h-6 hover:text-indigo-600" />
          {totalQuantity > 0 && (
            <span className="absolute -top-2 -right-2 bg-indigo-600 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
              {totalQuantity}
            </span>
          )}
        </Link>

        {user ? (
          <button onClick={handleLogout} title="Déconnexion">
            <LogOut className="w-5 h-5 hover:text-red-600" />
          </button>
        ) : (
          <button
            onClick={() => navigate("/login")}
            title="Connexion"
            className="hover:text-indigo-600"
          >
            <User className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Mobile menu toggle */}
      <div className="md:hidden">
        <button onClick={toggleMenu}>
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col gap-4 px-6 py-4 md:hidden">
          <input
            type="text"
            placeholder="Rechercher un produit..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            onKeyDown={handleSearch}
            className="p-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <Link
            to="/products"
            className="hover:text-indigo-600"
            onClick={toggleMenu}
          >
            Produits
          </Link>

          <Link
            to="/cart"
            className="flex items-center gap-2"
            onClick={toggleMenu}
          >
            <ShoppingCart className="w-5 h-5" />
            <span>Panier</span>
            {totalQuantity > 0 && (
              <span className="ml-auto bg-indigo-600 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
                {totalQuantity}
              </span>
            )}
          </Link>

          {user ? (
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 text-red-600"
            >
              <LogOut className="w-5 h-5" />
              <span>Déconnexion</span>
            </button>
          ) : (
            <button
              onClick={() => {
                toggleMenu();
                navigate("/login");
              }}
              className="flex items-center gap-2 text-indigo-600"
            >
              <User className="w-5 h-5" />
              <span>Connexion</span>
            </button>
          )}
        </div>
      )}
    </nav>
  );
}
