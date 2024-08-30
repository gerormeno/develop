import { TestimonialSection } from "./newTestimonial";
import "./StaticImageBanner.css";

const StaticImageBanner = () => {
  

  return (
    // <section className="lg:px-8 mx-auto parallax-container">
    //   <div className="relative overflow-hidden">
    //     <div className="relative bg-gray-900 bg-opacity-75 px-6 py-20">
    //       <div className="relative mx-auto flex justify-between flex-col sm:flex-row">
    //         <TestimonialSection
    //           name="Joaquin Muñoz"
    //           description="Me encantó la lámpara Pripiat 200 chicos, llegó todo perfecto. Lo que más me gusta es el poder sacar y poner los focos según lo que necesite mis plantas. Ya les pasé la data a mis amigos de su Insta, gracias chicos."
    //           image="https://firebasestorage.googleapis.com/v0/b/kiev-ingenieria-ecommerc-800f3.appspot.com/o/testimonials%2FPersonaTestimonio1.webp?alt=media&token=0f92aeb3-8ca8-49e7-abc3-6f3af4fb06f5"
    //         />
    //         <TestimonialSection
    //           name="Felipe Vazquez"
    //           description="Chicos como andan? Llegó todo de diez la Chernobyl, me encantó la calidad del producto final, hay que apostar por más industria nacional como ustedes. Éxitos y buenos humos para ustedes!!!"
    //           image="https://firebasestorage.googleapis.com/v0/b/kiev-ingenieria-ecommerc-800f3.appspot.com/o/testimonials%2FPersonaTestimonio2.webp?alt=media&token=a5a67d1b-85f7-4970-ad15-fa32e3e2fdef"
    //         />
    //       </div>
    //     </div>
    //   </div>
    // </section>

    <section className="lg:px-8 mx-auto">
    <div className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="overflow absolute inset-0 bg-cover bg-fixed bg-center"
        style={{
          backgroundImage:
            "url('https://firebasestorage.googleapis.com/v0/b/kiev-ingenieria-ecommerc-800f3.appspot.com/o/productos%2FA200%2FA200-foto-2.webp?alt=media&token=df2e082e-647f-4811-8e9c-0f1527acb1cd')",
        }}
      ></div>
      <div className="lg:px-16 relative bg-gray-900 bg-opacity-75 px-6 py-20">
        <div className="relative mx-auto flex justify-between flex-col sm:flex-row">
          <TestimonialSection name="Joaquin Muñoz" description="Me encantó la lámpara Pripiat 200 chicos, llegó todo perfecto. Lo que más me gusta es el poder sacar y poner los focos según lo que necesite mis plantas. Ya les pasé la data a mis amigos de su Insta, gracias chicos." image="https://firebasestorage.googleapis.com/v0/b/kiev-ingenieria-ecommerc-800f3.appspot.com/o/testimonials%2FPersonaTestimonio1.webp?alt=media&token=0f92aeb3-8ca8-49e7-abc3-6f3af4fb06f5"  />
          <TestimonialSection name="Felipe Vazquez" description="Chicos como andan? Llegó todo de diez la Chernobyl, me encató la calidad del producto final, hay que apostar por más industria nacional como ustedes. Éxitos y buenos humos para ustedes!!!" image="https://firebasestorage.googleapis.com/v0/b/kiev-ingenieria-ecommerc-800f3.appspot.com/o/testimonials%2FPersonaTestimonio2.webp?alt=media&token=a5a67d1b-85f7-4970-ad15-fa32e3e2fdef" />
        </div>
      </div>
    </div>
  </section>
  );
};

export default StaticImageBanner;

// La siguiente version es la del condicional para dispositivos iOS (al descomentar, borrar el archivo StaticImageBanner.css):

// import { useEffect, useState } from "react";
// import { TestimonialSection } from "./newTestimonial";

// const StaticImageBanner = ({}) => {
//   const [isIos, setIsIos] = useState(false);

//   return (
//     <section className="lg:px-8 mx-auto">
//       <div className="relative overflow-hidden">
//         <div
//           aria-hidden="true"
//           className="overflow absolute inset-0 bg-cover bg-center"
//           style={{
//             backgroundImage:
//               "url('https://firebasestorage.googleapis.com/v0/b/kiev-ingenieria-ecommerc-800f3.appspot.com/o/productos%2FA200%2FA200-foto-2.webp?alt=media&token=df2e082e-647f-4811-8e9c-0f1527acb1cd')",
//             backgroundAttachment: isIos ? 'scroll' : 'fixed',
//           }}
//         ></div>
//         <div className="lg:px-16 relative bg-gray-900 bg-opacity-75 px-6 py-20">
//           <div className="relative mx-auto flex justify-between flex-col sm:flex-row">
//             <TestimonialSection
//               name="Joaquin Muñoz"
//               description="Me encantó la lámpara Pripiat 200 chicos, llegó todo perfecto. Lo que más me gusta es el poder sacar y poner los focos según lo que necesite mis plantas. Ya les pasé la data a mis amigos de su Insta, gracias chicos."
//               image="https://firebasestorage.googleapis.com/v0/b/kiev-ingenieria-ecommerc-800f3.appspot.com/o/testimonials%2FPersonaTestimonio1.webp?alt=media&token=0f92aeb3-8ca8-49e7-abc3-6f3af4fb06f5"
//             />
//             <TestimonialSection
//               name="Felipe Vazquez"
//               description="Chicos como andan? Llegó todo de diez la Chernobyl, me encató la calidad del producto final, hay que apostar por más industria nacional como ustedes. Éxitos y buenos humos para ustedes!!!"
//               image="https://firebasestorage.googleapis.com/v0/b/kiev-ingenieria-ecommerc-800f3.appspot.com/o/testimonials%2FPersonaTestimonio2.webp?alt=media&token=a5a67d1b-85f7-4970-ad15-fa32e3e2fdef"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default StaticImageBanner;

