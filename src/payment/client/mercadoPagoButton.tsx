import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'
initMercadoPago('YOUR_PUBLIC_KEY');

<Wallet initialization={{ preferenceId: '<PREFERENCE_ID>' }} customization={{ texts:{ valueProp: 'smart_option'}}} />

