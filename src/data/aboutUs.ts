import IASCLogo from "@/assets/certifications-logos/IASC.png";
import BunnyLogo from "@/assets/certifications-logos/bunny.png";
import ISO9001Logo from "@/assets/certifications-logos/iso9001.png";
import ISO14001Logo from "@/assets/certifications-logos/iso14001.png";
import OHSAS18001Logo from "@/assets/certifications-logos/ohsas18001.png";
import DermatestLogo from "@/assets/certifications-logos/dermatest.png";

export type AboutUsItem = {
  title: string;
  text: string;
};

export type Certification = {
  name: string;
  description: string[];
  logo: string;
  hasTranslucentLogo: boolean;
};

//#region Arreglo de textos
export const aboutUsItems: AboutUsItem[] = [
  {
    title: "Our Story",
    text: "Founded in 2015, Natural Beauty started as a small kitchen project by our founder, Ana García, who was determined to create body care solutions that were both effective and environmentally friendly. Since then, we've grown into a leading name in natural skincare, with products sold in over 20 countries.",
  },
  {
    title: "Our Commitment to Sustainability",
    text: "Our products are paraben-free, cruelty-free, and made with certified organic ingredients whenever possible. Our factory operates using 30% less energy than traditional cosmetic production facilities.",
  },
  {
    title: "Mission",
    text: "Our mission is to empower our customers to care for their skin in a conscious and healthy way. We offer safe, natural, and effective products made with sustainably sourced ingredients.",
  },
  {
    title: "Vision",
    text: "We aspire to be the leading skincare brand in Latin America, known for our innovation and commitment to quality and environmental sustainability.",
  },
  {
    title: "Our Values",
    text: "Integrity: We are transparent about the ingredients and processes we use. - Innovation: We continuously seek ways to improve our products and practices. - Sustainability: We are committed to the planet's wellbeing, with recyclable packaging and biodegradable ingredients. - Quality: We ensure every product meets the highest standards of safety and efficacy.",
  },
  {
    title: "Join Our Community",
    text: "Explore our range of products and follow us on [social media names] for skincare tips and exclusive offers.",
  },
];
//#endregion

//#region Arreglo de certificaciones
export const certifications: Certification[] = [
  {
    name: "Consistent Quality and Assurance",
    description: [
      "Natural Beauty has received the ISO 9001 certification for its quality management system, ensuring consistent quality and assurance in its products."
    ],
    logo: ISO9001Logo,
    hasTranslucentLogo: false,
  },
  {
    name: "Health, Safety, and Wellbeing Management",
    description: [
      "Natural Beauty has received the OHSAS 18001 certification for its health management system, emphasizing the safety and wellbeing of its employees. Employee wellbeing is at the core of our requirements.",
    ],
    logo: OHSAS18001Logo,
    hasTranslucentLogo: false,
  },
  {
    name: "International Aloe Science Council (IASC)",
    description: [
      "The IASC seal certifies that the product is essentially identical to fresh organic or natural aloe vera. The International Aloe Science Council oversees aloe standards and quality, making it one of the most prestigious certifications an aloe manufacturer can achieve.",
      "Natural Beauty was the first company to receive this seal for the purity and high percentage of aloe in its products.",
      "You can check our certified products by searching for 'Natural Beauty' in the certified products directory.",
    ],
    logo: IASCLogo,
    hasTranslucentLogo: true,
  },
  {
    name: "Quality and Environmental Management",
    description: [
      "Natural Beauty has received the ISO 14001 certification for its quality management system and its commitment to environmental sustainability in product manufacturing.",
    ],
    logo: ISO14001Logo,
    hasTranslucentLogo: false,
  },
  {
    name: "Dermatest Certificate",
    description: [
      "When a Natural Beauty facial or body care product displays this seal, it means the product is extremely skin-friendly.",
      "A product certified by the independent Dermatest® Institute guarantees maximum efficacy and excellent skin tolerance, ensuring user safety.",
    ],
    logo: DermatestLogo,
    hasTranslucentLogo: true,
  },
  {
    name: "Leaping Bunny",
    description: [
      "Although animal testing has been banned by the European Union since 2013, some companies continue testing outside the EU.",
      "The Leaping Bunny seal ensures that no animal testing is conducted at any stage of product development and that the product contains no ingredients from cruel practices.",
      "This seal represents the first international initiative for cruelty-free cosmetics and advocates for animal welfare policies. We have held this certification since 2014.",
    ],
    logo: BunnyLogo,
    hasTranslucentLogo: true,
  },
];
//#endregion

