import express from 'express';
import cors from 'cors';
import {MercadoPagoConfig, Preference} from "mercadopago";

const client = new MercadoPagoConfig({
  accessToken: "ACCESS_TOKEN",
});

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get("/", (request, response) => {
  response.send("Hello World!");
});

app.post("/createPreference", async (request, response) => {
  try {
    const body = {
      items: [
        {
          id: request.body.id,
          title: request.body.title,
          quantity: Number(request.body.quantity),
          unit_price: Number(request.body.unitPrice),
          currency_id: "ARS",
        },
      ],
      back_urls: {
        success: "http://localhost:3000/success",
        failure: "http://localhost:3000/failure",
        pending: "http://localhost:3000/pending",
      },
      auto_return: "approved", 
    };

    const preference = new Preference(client);
    const result = await preference.create({body});

    response.json({
      id: result.id,
    });

  } catch (error) {
    console.log(error);
    response.status(500).json({ error: "Error al crear la preferencia de MercadoPago" });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});