import React, { useState } from "react";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import axios from "axios";

const MercadoPagoWallet: React.FC = () => {
  const [preferenceID, setPreferenceID] = useState<string | null>(null);
  initMercadoPago("YOUR_PUBLIC_KEY", { locale: "es-AR" });

  // Returns the preference ID
  const createPreference1 = async () => {
    try {
      const response = await axios.post("http://localhost:3000/createPreference", {
        products: [
          {
            title: "Nombre del producto",
            quantity: 1,
            unitPrice: 100,
          }
        ],
      });
      
      const { id } = response.data;
      return id;

    } catch (error) {
      console.error(error);
    }
  };
  
  // const createPreference2 = async () => {
  //   try {
  //     const response = await axios.post("http://localhost:3001/createPreference", {
  //       items: [
  //         {
  //           title: "Dummy Item",
  //           description: "Multicolor Item",
  //           quantity: 1,
  //           currency_id: "ARS",
  //           unit_price: 10.0,
  //         },
  //       ],
  //     });
  //     return response.data;
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  const handleBuy = async () => {
    const preferenceId = await createPreference1();
    if (preferenceId) {
      setPreferenceID(preferenceId);
    } else {
      console.error("Error creating MercadoPago preference");
    }
  };

  return (
    <div>
      <button onClick={handleBuy}>Comprar</button>
      {preferenceID && (
        <Wallet
          initialization={{ preferenceId: preferenceID }}
          customization={{ texts: { valueProp: "smart_option" } }}
        />
      )}
    </div>
  );
};

export default MercadoPagoWallet;
