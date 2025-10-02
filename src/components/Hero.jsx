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

export default function Hero() {
  return (
    <section
      className="relative w-full overflow-hidden bg-[#0e2938] pt-32 pb-10 font-light text-white antialiased md:pt-20 md:pb-16"
      style={{
        background: "linear-gradient(135deg, #0e2938 0%, #150d27 100%)",
      }}
    >
      {/* Radial Background Effects */}
      <div
        className="absolute top-0 right-0 h-1/2 w-1/2"
        style={{
          background:
            "radial-gradient(circle at 70% 30%, rgba(155, 135, 245, 0.15) 0%, rgba(13, 10, 25, 0) 60%)",
        }}
      />
      <div
        className="absolute top-0 left-0 h-1/2 w-1/2 -scale-x-100"
        style={{
          background:
            "radial-gradient(circle at 70% 30%, rgba(155, 135, 245, 0.15) 0%, rgba(13, 10, 25, 0) 60%)",
        }}
      />

      <div className="relative z-10 container mx-auto max-w-2xl px-4 text-center md:max-w-4xl md:px-6 lg:max-w-7xl">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="mb-6 inline-block rounded-full border border-[#9b87f5]/30 px-3 py-1 text-xs text-[#9b87f5]">
            TURISMO EM CAMPINA GRANDE
          </span>
          <h1 className="mx-auto mb-6 max-w-4xl text-4xl font-light md:text-5xl lg:text-7xl">
            Descubra a magia do{" "}
            <span className="text-[#9b87f5]">Ônibus do Forró</span>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-white/60 md:text-xl">
            Viva uma experiência única em Campina Grande! Música ao vivo,
            tradição nordestina e os melhores roteiros turísticos em um só
            lugar. Explore a cidade de um jeito inesquecível a bordo do Ônibus
            do Forró.
          </p>

          <div className="mb-10 flex flex-col items-center justify-center gap-4 sm:mb-0 sm:flex-row">
            <a
              href="/pacotes"
              className="neumorphic-button hover:shadow-[0_0_20px_rgba(155,135,245,0.5)] relative w-full overflow-hidden rounded-full border border-white/10 bg-gradient-to-b from-white/10 to-white/5 px-8 py-4 text-white shadow-lg transition-all duration-300 hover:border-[#9b87f5]/30 sm:w-auto"
            >
              Ver Pacotes
            </a>
            <a
              href="#como-funciona"
              className="flex w-full items-center justify-center gap-2 text-white/70 transition-colors hover:text-white sm:w-auto"
            >
              <span>Saiba como funciona</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </a>
          </div>
        </motion.div>

        {/* Images Section */}
        <motion.div
          className="relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        >
          <div className="relative flex h-40 w-full overflow-hidden md:h-64">
            <img
              src={cgImage}
              alt="Campina Grande"
              className="absolute top-0 left-1/2 -z-10 mx-auto -translate-x-1/2 px-4 opacity-80"
            />
          </div>
          <div className="relative z-10 mx-auto max-w-5xl overflow-hidden rounded-lg shadow-[0_0_50px_rgba(155,135,245,0.2)]">
            <Carousel
              plugins={[
                Autoplay({
                  delay: 3000, // tempo entre slides (3s)
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
        </motion.div>
      </div>
    </section>
  );
}
