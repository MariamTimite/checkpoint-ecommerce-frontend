import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-3">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Section 1: Navigation Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Liens utiles</h3>
            <ul>
              <li>
                <Link to="/" className="hover:text-gray-400">
                  Mabootik Shop
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-gray-400">
                  Produits
                </Link>
              </li>
            </ul>
          </div>

          {/* Section 2: Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <p>Adresse : 213 Rue, Abidjan, Côte d'Ivoire</p>
            <p>Téléphone : (+225) 01 523 431 11</p>
            <p>
              Email :{" "}
              <a
                href="mailto:timitemariam789@gmail.com"
                className="hover:text-gray-400"
              >
                timitemariam789@gmail.com
              </a>
            </p>
          </div>

          {/* Section 3: Social Media */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Suivez-nous</h3>
            <div className="flex space-x-6">
              <a
                href="https://www.facebook.com"
                target="_blank"
                className="hover:text-gray-400"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                className="hover:text-gray-400"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                className="hover:text-gray-400"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                className="hover:text-gray-400"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          {/* Section 4: Newsletter */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Abonnez-vous à notre newsletter
            </h3>
            <p className="mb-4">
              Recevez les dernières nouvelles et offres directement dans votre
              boîte de réception.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Votre email"
                className="px-4 py-2 w-full rounded-l-md text-[#eee] bg-[#999]"
              />
              <button
                type="submit"
                className="bg-[#7167df] hover:bg-blue-500/50 text-white px-6 py-2 rounded-r-md"
              >
                S'abonner
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="mt-12 text-center text-gray-400">
          <p>&copy; 2025 Mabootik Shop. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
