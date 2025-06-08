// src/pages/Checkout.jsx
import React from "react";
import { useSelector } from "react-redux";
import { StripeCheckoutForm } from "../../components/StripeCheckoutForm";

export default function Checkout() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="mt-24 px-4 md:px-12 lg:px-20">
      <h1 className="text-3xl font-bold mb-6">Finaliser votre commande</h1>
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Résumé du panier */}
        <div className="flex-1">
          <h2 className="text-xl font-bold mb-4">Articles dans votre panier</h2>
          {cartItems.map((item) => (
            <div key={item._id} className="flex justify-between border-b py-4">
              <span>{item.name}</span>
              <span>
                {item.quantity} x {item.price.toFixed(2)} €
              </span>
            </div>
          ))}
          <div className="flex justify-between font-semibold mt-4 text-lg">
            <span>Total :</span>
            <span>{totalPrice.toFixed(2)} €</span>
          </div>
        </div>

        {/* Paiement Stripe */}
        <div className="w-full lg:w-1/3">
          <StripeCheckoutForm />
        </div>
      </div>
    </div>
  );
}
