// src/components/CheckoutButton.jsx
import React from "react";
import { useSelector } from "react-redux";
import { loadStripe } from "@stripe/stripe-js";

// Clé publique Stripe (commence par pk_test)
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

export default function CheckoutButton() {
  const cartItems = useSelector((state) => state.cart.cartItems);

  const handleCheckout = async () => {
    const stripe = await stripePromise;

    try {
      const response = await fetch(
        "https://checkpoint-ecommerce-backend.onrender.com/checkout/create-checkout-session",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ cartItems }),
        }
      );

      const data = await response.json();

      if (data.id) {
        await stripe.redirectToCheckout({ sessionId: data.id });
      } else {
        alert("Erreur lors de la redirection vers le paiement.");
      }
    } catch (error) {
      console.error("Erreur checkout:", error);
    }
  };

  return (
    <button
      onClick={handleCheckout}
      className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-4 rounded-xl transition duration-200 shadow-lg"
    >
      Commander
    </button>
  );
}
