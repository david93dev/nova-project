'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { Marquee } from '@/components/ui/marquee';

export function Highlight({ children, className }) {
  return (
    <span
      className={cn(
        'bg-green-500/10 p-1 py-0.5 font-bold text-green-500',
        className
      )}
    >
      {children}
    </span>
  );
}

export function TestimonialCard({ description, name, img, role, className, ...props }) {
  return (
    <div
      className={cn(
        'mb-4 flex w-full cursor-pointer break-inside-avoid flex-col items-center justify-between gap-6 rounded-xl p-4',
        'border-border bg-card/50 border shadow-sm',
        'transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md',
        className
      )}
      {...props}
    >
      <div className="text-muted-foreground text-sm font-normal select-none">
        {description}
        <div className="flex flex-row py-1">
          <Star className="size-4 fill-green-500 text-green-500" />
          <Star className="size-4 fill-green-500 text-green-500" />
          <Star className="size-4 fill-green-500 text-green-500" />
          <Star className="size-4 fill-green-500 text-green-500" />
          <Star className="size-4 fill-green-500 text-green-500" />
        </div>
      </div>

      <div className="flex w-full items-center justify-start gap-5 select-none">
        <img
          width={40}
          height={40}
          src={img || ''}
          alt={name}
          className="size-10 rounded-full ring-1 ring-green-500/20 ring-offset-2"
        />

        <div>
          <p className="text-foreground font-medium">{name}</p>
          <p className="text-muted-foreground text-xs font-normal">{role}</p>
        </div>
      </div>
    </div>
  );
}

const testimonials = [
  {
    name: 'Ana Carla',
    role: 'Turista de Campina Grande',
    img: 'https://randomuser.me/api/portraits/women/65.jpg',
    description: (
      <p>
        O <Highlight>Ônibus do Forró – São João</Highlight> foi incrível! Música, alegria e tradição 
        em um passeio que nunca vou esquecer. Recomendo demais!
      </p>
    ),
  },
  {
    name: 'Rafael Souza',
    role: 'Turista de João Pessoa',
    img: 'https://randomuser.me/api/portraits/men/42.jpg',
    description: (
      <p>
        O city tour de <Highlight>Natal Iluminado</Highlight> foi mágico! As luzes da cidade 
        e a música tornaram tudo inesquecível. Fantástico serviço da Nova Turismo.
      </p>
    ),
  },
  {
    name: 'Beatriz Lima',
    role: 'Turista do interior da PB',
    img: 'https://randomuser.me/api/portraits/women/50.jpg',
    description: (
      <p>
        Alugamos uma <Highlight>van</Highlight> para nosso grupo e foi tudo perfeito! 
        Conforto, segurança e atendimento excelente.
      </p>
    ),
  },
  {
    name: 'Carlos Eduardo',
    role: 'Turista da Borborema',
    img: 'https://randomuser.me/api/portraits/men/36.jpg',
    description: (
      <p>
        O passeio pelo <Highlight>turismo na Borborema e João Pessoa</Highlight> foi incrível! 
        Guias atenciosos e paisagens lindas. Super recomendo.
      </p>
    ),
  },
  {
    name: 'Mariana Ribeiro',
    role: 'Turista de Recife',
    img: 'https://randomuser.me/api/portraits/women/70.jpg',
    description: (
      <p>
        Os passeios da <Highlight>Nova Turismo</Highlight> são impecáveis. Conforto, segurança 
        e diversão garantida. Quero repetir no próximo evento!
      </p>
    ),
  },
];

export default function Testimonials() {
  return (
    <section className="relative container py-10">
      {/* Decorative elements */}
      <div className="absolute top-20 -left-20 z-10 h-64 w-64 rounded-full bg-green-500/5 blur-3xl" />
      <div className="absolute -right-20 bottom-20 z-10 h-64 w-64 rounded-full bg-green-500/5 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-foreground mb-4 text-center text-4xl leading-[1.2] font-bold tracking-tighter md:text-5xl">
          O que nossos turistas estão dizendo
        </h2>
        <h3 className="text-muted-foreground mx-auto mb-8 max-w-lg text-center text-lg font-medium tracking-tight text-balance">
          Confira a experiência de quem já aproveitou os serviços da{' '}
          <span className="font-semibold text-green-500">Nova Turismo</span>
        </h3>
      </motion.div>

      <div className="relative mt-6 max-h-screen overflow-hidden">
        <div className="gap-4 md:columns-2 xl:columns-3 2xl:columns-4">
          {Array(Math.ceil(testimonials.length / 3))
            .fill(0)
            .map((_, i) => (
              <Marquee
                vertical
                key={i}
                className={cn({
                  '[--duration:60s]': i === 1,
                  '[--duration:30s]': i === 2,
                  '[--duration:70s]': i === 3,
                })}
              >
                {testimonials.slice(i * 3, (i + 1) * 3).map((card, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: Math.random() * 0.8,
                      duration: 1.2,
                    }}
                  >
                    <TestimonialCard {...card} />
                  </motion.div>
                ))}
              </Marquee>
            ))}
        </div>
        <div className="from-background pointer-events-none absolute inset-x-0 bottom-0 h-1/4 w-full bg-gradient-to-t from-20%" />
        <div className="from-background pointer-events-none absolute inset-x-0 top-0 h-1/4 w-full bg-gradient-to-b from-20%" />
      </div>
    </section>
  );
}
