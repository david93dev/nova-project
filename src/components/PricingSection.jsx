'use client';

import React, { useState } from "react";
import { motion } from "framer-motion";
import { BadgeCheck } from "lucide-react";

// Payment frequencies
const PAYMENT_FREQUENCIES = ["monthly", "yearly"];

// Travel packages
const TIERS = [
  {
    id: "individual",
    name: "Passeio Individual",
    price: {
      monthly: "R$ 199",
      yearly: "R$ 1.899",
    },
    description: "Ideal para quem viaja sozinho",
    features: [
      "Traslado incluso",
      "Guia turístico local",
      "City tour em Campina Grande",
      "Visita ao Parque do Povo",
      "Ingresso em 1 atração cultural",
    ],
    cta: "Reservar agora",
  },
  {
    id: "couple",
    name: "Pacote Casal",
    price: {
      monthly: "R$ 349",
      yearly: "R$ 3.299",
    },
    description: "Perfeito para casais apaixonados",
    features: [
      "Hospedagem 3 noites",
      "Tour gastronômico nordestino",
      "Passeio no Ônibus do Forró",
      "Ingresso para show de São João",
      "Café da manhã incluso",
    ],
    cta: "Reservar agora",
    popular: true,
  },
  {
    id: "family",
    name: "Pacote Família",
    price: {
      monthly: "R$ 499",
      yearly: "R$ 4.799",
    },
    description: "Diversão garantida para toda a família",
    features: [
      "Hospedagem 5 noites",
      "Traslado aeroporto-hotel",
      "Visita a pontos turísticos regionais",
      "Ingresso Parque do Povo + Vila Forró",
      "Atividades infantis inclusas",
    ],
    cta: "Reservar agora",
  },
  {
    id: "premium",
    name: "Pacote Premium",
    price: {
      monthly: "Sob consulta",
      yearly: "Sob consulta",
    },
    description: "Experiência completa e personalizada",
    features: [
      "Tudo incluso no pacote Família",
      "Passeio exclusivo com guia VIP",
      "Shows privados de forró pé-de-serra",
      "Experiência gastronômica premium",
      "Camarote exclusivo no São João",
    ],
    cta: "Fale conosco",
    highlighted: true,
  },
];

// Backgrounds
const HighlightedBackground = () => (
  <div className="absolute inset-0 bg-[linear-gradient(to_right,#2563eb22_1px,transparent_1px),linear-gradient(to_bottom,#2563eb22_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] bg-[size:45px_45px]" />
);

const PopularBackground = () => (
  <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(37,99,235,0.2),rgba(255,255,255,0))]" />
);

// Tabs (monthly/yearly)
const Tab = ({ text, selected, setSelected, discount = false }) => {
  return (
    <button
      onClick={() => setSelected(text)}
      className={`relative w-fit px-4 py-2 text-sm font-semibold capitalize transition-colors ${
        discount ? "flex items-center gap-2" : ""
      }`}
    >
      <span className="relative z-10">{text === "monthly" ? "Mensal" : "Anual"}</span>
      {selected && (
        <motion.span
          layoutId="tab"
          transition={{ type: "spring", duration: 0.4 }}
          className="bg-white text-blue-600 absolute inset-0 z-0 rounded-full shadow-sm"
        ></motion.span>
      )}
      {discount && (
        <span
          className={`relative z-10 text-xs font-medium px-2 py-1 rounded-full ${
            selected ? "bg-blue-200 text-blue-900" : "bg-blue-100 text-blue-800"
          }`}
        >
          Economize 30%
        </span>
      )}
    </button>
  );
};

// Pricing Card
const PricingCard = ({ tier, paymentFrequency }) => {
  const price = tier.price[paymentFrequency];
  const isHighlighted = tier.highlighted;
  const isPopular = tier.popular;

  return (
    <div
      className={`relative flex flex-col gap-6 overflow-hidden rounded-2xl border p-6 shadow-lg ${
        isHighlighted ? "bg-blue-700 text-white" : "bg-white text-gray-900"
      } ${isPopular ? "outline outline-blue-400" : ""}`}
    >
      {isHighlighted && <HighlightedBackground />}
      {isPopular && <PopularBackground />}

      <h2 className="flex items-center gap-3 text-xl font-semibold capitalize">
        {tier.name}
        {isPopular && (
          <span className="bg-blue-600 text-white px-2 py-0.5 rounded text-xs">
            🔥 Mais Popular
          </span>
        )}
      </h2>

      <div className="relative h-12">
        <h1 className="text-3xl font-bold">{price}</h1>
        <p className="text-xs">por pessoa</p>
      </div>

      <div className="flex-1 space-y-2">
        <h3 className="text-sm">{tier.description}</h3>
        <ul className="space-y-2">
          {tier.features.map((feature, i) => (
            <li
              key={i}
              className={`flex items-center gap-2 text-sm ${
                isHighlighted ? "text-white" : "text-gray-700"
              }`}
            >
              <BadgeCheck strokeWidth={1} size={16} />
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <button
        className={`h-fit w-full rounded-lg px-4 py-2 font-semibold transition-all ${
          isHighlighted
            ? "bg-white text-blue-700 hover:bg-gray-200"
            : "bg-blue-600 text-white hover:bg-blue-700"
        }`}
      >
        {tier.cta}
      </button>
    </div>
  );
};

// Pricing Section
export default function PricingSection() {
  const [selectedPaymentFreq, setSelectedPaymentFreq] = useState(
    PAYMENT_FREQUENCIES[0]
  );

  return (
    <section className="flex flex-col items-center gap-10 py-14 bg-gradient-to-b from-blue-50 to-blue-100">
      <div className="space-y-6 text-center">
        <h1 className="text-4xl font-bold text-blue-700 md:text-5xl">
          Planos e Pacotes Turísticos
        </h1>
        <p className="text-gray-600">
          Viva a experiência do São João em Campina Grande com roteiros feitos
          para você. Escolha o plano que mais combina com sua viagem.
        </p>
        <div className="mx-auto flex w-fit rounded-full bg-blue-100 p-1">
          {PAYMENT_FREQUENCIES.map((freq) => (
            <Tab
              key={freq}
              text={freq}
              selected={selectedPaymentFreq === freq}
              setSelected={setSelectedPaymentFreq}
              discount={freq === "yearly"}
            />
          ))}
        </div>
      </div>

      <div className="grid w-full max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {TIERS.map((tier, i) => (
          <PricingCard key={i} tier={tier} paymentFrequency={selectedPaymentFreq} />
        ))}
      </div>
    </section>
  );
}
