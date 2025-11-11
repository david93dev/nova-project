import React from "react";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import cgImage from "@/assets/cgHero.png";
import GradientBarsPreview from "./mvpblocks/gradient-bars-preview";
import onibusImg from "@/assets/onibus-turismo.png"; // 🚌 sua imagem de ônibus

export default function Hero() {
  return (
    <section
      className="relative w-full overflow-hidden pt-36 pb-10 text-white font-light antialiased md:pt-28 md:pb-16"
      style={{
        background: `
          linear-gradient(-45deg, #4d93fc, #7185f8, #60a5fa, #34d399)
        `,
        backgroundSize: "400% 400%",
        animation: "gradientMove 15s ease infinite",
      }}
    >
      <GradientBarsPreview />

      {/* 🎉 Bandeirinhas de São João */}
      <div className="absolute top-20 left-0 w-full flex justify-center z-20 overflow-hidden">
        <svg
          viewBox="0 0 1000 150"
          className="w-[110%] h-[100px] md:h-[150px] animate-sway"
          preserveAspectRatio="none"
        >
          {Array.from({ length: 20 }).map((_, i) => (
            <polygon
              key={i}
              points={`${50 * i},20 ${50 * i + 25},70 ${50 * i + 50},20`}
              fill={
                ["#facc15", "#ef4444", "#10b981", "#f97316", "#3b82f6"][i % 5]
              }
            />
          ))}
        </svg>
      </div>

      <style>
        {`
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes sway {
          0% { transform: rotate(0deg) translateY(0); }
          50% { transform: rotate(1deg) translateY(2px); }
          100% { transform: rotate(0deg) translateY(0); }
        }
        .animate-sway {
          animation: sway 4s ease-in-out infinite;
          transform-origin: top center;
        }
        `}
      </style>

      {/* Luzes de fundo */}
      <div
        className="absolute top-0 right-0 h-1/2 w-1/2"
        style={{
          background:
            "radial-gradient(circle at 70% 30%, rgba(255, 215, 0, 0.2) 0%, rgba(13, 10, 25, 0) 70%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 h-1/2 w-1/2"
        style={{
          background:
            "radial-gradient(circle at 30% 70%, rgba(255, 166, 0, 0.2) 0%, rgba(13, 10, 25, 0) 70%)",
        }}
      />

      {/* Conteúdo principal */}
      <div className="relative z-10 container mx-auto max-w-2xl px-4 text-center md:max-w-4xl md:px-6 lg:max-w-7xl">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="mb-6 mt-20 inline-block rounded-full border border-white/30 px-3 py-1 text-xs text-white">
            TURISMO EM CAMPINA GRANDE
          </span>

          <h1 className="mx-auto mb-6 max-w-4xl text-4xl font-extrabold md:text-5xl lg:text-7xl text-yellow-400 drop-shadow-[3px_3px_0px_#c2410c] tracking-tight relative">
            Descubra a magia do{" "}
            <span className="text-rose-500 drop-shadow-[2px_2px_0px_#7f1d1d] italic">
              Ônibus do Forró
            </span>
          </h1>

          <p className="mx-auto max-w-2xl text-lg md:text-xl text-yellow-200 drop-shadow-[1px_1px_2px_#7f1d1d] font-medium tracking-wide">
            Viva uma experiência única em{" "}
            <span className="text-rose-500 font-semibold">Campina Grande!</span>
            <br />
            Sinta o ritmo, a cor e a alegria do Nordeste com música ao vivo,
            tradição e cultura. Embarque no{" "}
            <span className="text-orange-400 font-bold italic">
              Ônibus do Forró
            </span>{" "}
            e descubra a magia de um passeio inesquecível!
          </p>
        </motion.div>

        {/* 🚌 Ônibus animados */}
        <div className="relative bottom-0 left-97 right-0 flex justify-between px-8 z-10">
    
          {/* Ônibus voltando (espelhado) */}
          <motion.img
            src={onibusImg}
            alt="Ônibus de Turismo Voltando"
            className="w-[300px] md:w-[500px] drop-shadow-[0_8px_20px_rgba(0,0,0,0.4)] scale-x-[-1]"
            animate={{ x: [0, -15, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        {/* Carrossel
        <motion.div
          className="relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
        >
          <div className="relative z-10 mx-auto max-w-5xl overflow-hidden rounded-lg shadow-[0_0_50px_rgba(155,135,245,0.2)]">
            <Carousel
              plugins={[
                Autoplay({
                  delay: 3000,
                  stopOnInteraction: false,
                }),
              ]}
              className="w-full"
            >
              <CarouselContent>
                <CarouselItem>
                  <img
                    src="https://campinagrande.pb.gov.br/wp-content/uploads/2025/02/IMG-20250221-WA0080-scaled.jpg"
                    alt="Ônibus do Forró"
                    className="w-full h-64 md:h-96 object-cover rounded-lg border border-white/10"
                  />
                </CarouselItem>
                <CarouselItem>
                  <img
                    src="https://dercio.com.br/wp-content/uploads/2025/01/campinagrande-natal.jpg"
                    alt="Campina Grande"
                    className="w-full h-64 md:h-96 object-cover rounded-lg border border-white/10"
                  />
                </CarouselItem>
                <CarouselItem>
                  <img
                    src="https://imagens.ebc.com.br/fXMf70SdyMervlZ6_MaqSCkvHh0=/1600x800/https://agenciabrasil.ebc.com.br/sites/default/files/thumbnails/image/2024/06/09/sao_joao_campina_grande.jpg?itok=dAWSkGxM"
                    alt="Campina Grande"
                    className="w-full h-64 md:h-96 object-cover rounded-lg border border-white/10"
                  />
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="text-white" />
              <CarouselNext className="text-white" />
            </Carousel>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}
