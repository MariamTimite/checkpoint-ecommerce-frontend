import React from "react";

export default function Cancel() {
  return (
    <div className="mt-32 text-center px-6">
      <h1 className="text-3xl font-bold text-red-600">❌ Paiement annulé</h1>
      <p className="mt-4 text-gray-700">
        Vous pouvez réessayer votre commande à tout moment.
      </p>
    </div>
  );
}
