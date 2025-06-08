import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Vérifier si les mots de passe correspondent
    if (password !== confirmPassword) {
      setError("Les mots de passe ne correspondent pas.");
      return;
    }

    // Vérifier si un utilisateur est déjà enregistré
    const existingUser = localStorage.getItem("user");
    if (existingUser) {
      setError("Un utilisateur est déjà enregistré.");
      return;
    }

    // Simuler l'enregistrement (remplace cette partie par une vraie API si nécessaire)
    if (email && password) {
      const user = { email, password };
      localStorage.setItem("user", JSON.stringify(user)); // Enregistrer l'utilisateur dans localStorage

      // Redirection vers la page de connexion ou d'accueil
      navigate("/login");
    } else {
      setError("Veuillez remplir tous les champs.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-80">
        <h2 className="text-2xl font-bold text-center mb-6">Créer un compte</h2>

        {/* Affichage des erreurs */}
        {error && <div className="text-red-500 text-center mb-4">{error}</div>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md mt-2"
              placeholder="Entrez votre email"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-gray-700 font-medium"
            >
              Mot de passe
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md mt-2"
              placeholder="Entrez votre mot de passe"
            />
          </div>

          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-gray-700 font-medium"
            >
              Confirmer le mot de passe
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md mt-2"
              placeholder="Confirmez votre mot de passe"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#7167df] text-white p-2 rounded-md mt-4 hover:bg-indigo-700/50"
          >
            S'inscrire
          </button>
        </form>

        <p className="text-center mt-4 text-gray-500">
          Vous avez déjà un compte ?{" "}
          <Link to="/login" className="text-indigo-600 hover:text-indigo-700">
            Connectez-vous ici.
          </Link>
        </p>
      </div>
    </div>
  );
}
