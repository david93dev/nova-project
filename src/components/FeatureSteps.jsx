'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Bus, Gift, Music2, MapPin } from 'lucide-react';

const services = [
  {
    step: 'Serviço 1',
    title: 'Ônibus do Forró – São João',
    content:
      'Viva a magia do São João em Campina Grande com o Ônibus do Forró. Música, tradição e alegria em um passeio inesquecível!',
    icon: <Music2 className="text-primary h-6 w-6" />,
    image:
      'https://s2-g1.glbimg.com/BY_EU_Zt1paJyCPnh-Gg4KrcLyc=/0x0:1280x853/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/w/4/I1Wue7Tj6yTM5eWlaIkg/onibusdoforro2.jpg',
  },
  {
    step: 'Serviço 2',
    title: 'Ônibus do Forró – Natal Iluminado',
    content:
      'Encante-se com as luzes e a energia natalina em um city tour musical que transforma a cidade em um espetáculo de Natal.',
    icon: <Gift className="text-primary h-6 w-6" />,
    image:
      'https://www.nenamartins.com.br/dados/ims/Mjc2NjI4NTkz.jpg',
  },
  {
    step: 'Serviço 3',
    title: 'Aluguel de Vans',
    content:
      'Disponibilizamos vans modernas e confortáveis para transporte executivo, eventos e passeios em grupo com total segurança.',
    icon: <Bus className="text-primary h-6 w-6" />,
    image:
      'https://cdn.paytour.com.br/assets/images/passeios-2500469/0c1445517a7ab4787546d4965cb9141e/08477a20-b9ca-4f96-a2d4-b86bb9dd1e41_optimized.webp',
  },
  {
    step: 'Serviço 4',
    title: 'Turismo pela Borborema e João Pessoa',
    content:
      'Descubra as belezas naturais da Borborema e aproveite passeios incríveis até João Pessoa, com roteiros completos e guiados.',
    icon: <MapPin className="text-primary h-6 w-6" />,
    image:
      'https://blog.123milhas.com/wp-content/uploads/2022/07/conheca-o-estado-da-paraiba-historia-turismo-joao-pessoa-capital-conexao123.jpg',
  },
];

export default function FeatureSteps() {
  const [currentService, setCurrentService] = useState(0);
  const [progress, setProgress] = useState(0);

  // Autoplay da imagem
  useEffect(() => {
    const timer = setInterval(() => {
      if (progress < 100) {
        setProgress((prev) => prev + 100 / (4000 / 100));
      } else {
        setCurrentService((prev) => (prev + 1) % services.length);
        setProgress(0);
      }
    }, 100);

    return () => clearInterval(timer);
  }, [progress]);

  // Quando clicar, reinicia o progresso
  const handleServiceClick = (index) => {
    setCurrentService(index);
    setProgress(0);
  };

  return (
    <div className={'p-8 md:p-12'}>
      <div className="mx-auto w-full max-w-7xl">
        <div className="relative mx-auto mb-12 max-w-2xl sm:text-center">
          <div className="relative z-10">
            <h2 className="font-geist text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl">
              Nossos Serviços
            </h2>
            <p className="font-geist text-foreground/60 mt-3">
              Conheça as principais experiências que a Nova Turismo oferece para
              tornar seus momentos inesquecíveis.
            </p>
          </div>
          <div
            className="absolute inset-0 mx-auto h-44 max-w-xs blur-[118px]"
            style={{
              background:
                'linear-gradient(152.92deg, rgba(192, 15, 102, 0.2) 4.54%, rgba(192, 11, 109, 0.26) 34.2%, rgba(192, 15, 102, 0.1) 77.55%)',
            }}
          ></div>
        </div>
        <hr className="bg-foreground/30 mx-auto mb-10 h-px w-1/2" />

        <div className="flex flex-col gap-6 md:grid md:grid-cols-2 md:gap-10">
          {/* Lista dos serviços */}
          <div className="order-2 space-y-8 md:order-1">
            {services.map((service, index) => (
              <motion.button
                key={index}
                onClick={() => handleServiceClick(index)}
                className="flex w-full items-center gap-6 md:gap-8 focus:outline-none"
                initial={{ opacity: 0.3, x: -20 }}
                animate={{
                  opacity: index === currentService ? 1 : 0.6,
                  x: 0,
                  scale: index === currentService ? 1.05 : 1,
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className={cn(
                    'flex h-12 w-12 items-center justify-center rounded-full border-2 md:h-14 md:w-14',
                    index === currentService
                      ? 'border-primary bg-primary/10 text-primary scale-110 [box-shadow:0_0_15px_rgba(192,15,102,0.3)]'
                      : 'border-muted-foreground bg-muted',
                  )}
                >
                  {service.icon}
                </motion.div>

                <div className="flex-1 text-left">
                  <h3 className="text-xl font-semibold md:text-2xl">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm md:text-base">
                    {service.content}
                  </p>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Imagem animada */}
          <div
            className={cn(
              'border-primary/20 relative order-1 h-[200px] overflow-hidden rounded-xl border [box-shadow:0_5px_30px_-15px_rgba(192,15,102,0.3)] md:order-2 md:h-[300px] lg:h-[400px]',
            )}
          >
            <AnimatePresence mode="wait">
              {services.map(
                (service, index) =>
                  index === currentService && (
                    <motion.div
                      key={index}
                      className="absolute inset-0 overflow-hidden rounded-lg"
                      initial={{ y: 100, opacity: 0, rotateX: -20 }}
                      animate={{ y: 0, opacity: 1, rotateX: 0 }}
                      exit={{ y: -100, opacity: 0, rotateX: 20 }}
                      transition={{ duration: 0.5, ease: 'easeInOut' }}
                    >
                      <img
                        src={service.image}
                        alt={service.title}
                        className="h-full w-full transform object-cover transition-transform hover:scale-105"
                        width={1000}
                        height={500}
                      />
                      

                      <div className="bg-background/80 absolute bottom-4 left-4 rounded-lg p-2 backdrop-blur-sm">
                        <span className="text-primary text-xs font-medium">
                          {service.step}
                        </span>
                      </div>
                    </motion.div>
                  ),
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
