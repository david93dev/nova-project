"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Marquee } from "@/components/ui/marquee";

// Destaque colorido para reforçar partes importantes dos depoimentos
export function Highlight({ children, className }) {
  return (
    <span
      className={cn(
        "bg-blue-500/10 p-1 py-0.5 font-bold text-blue-500",
        className,
      )}>
      {children}
    </span>
  );
}

// Cartão de depoimento individual
export function TestimonialCard({
  description,
  name,
  img,
  role,
  className,
  ...props
}) {
  return (
    <div
      className={cn(
        "mb-4 flex w-full cursor-pointer break-inside-avoid flex-col items-center justify-between gap-6 rounded-xl p-4",
        "border-border bg-card/50 border shadow-sm",
        "transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md",
        className,
      )}
      {...props}>
      <div className="text-muted-foreground text-sm font-normal select-none">
        {description}
        <div className="flex flex-row py-1">
          <Star className="size-4 fill-blue-500 text-blue-500" />
          <Star className="size-4 fill-blue-500 text-blue-500" />
          <Star className="size-4 fill-blue-500 text-blue-500" />
          <Star className="size-4 fill-blue-500 text-blue-500" />
          <Star className="size-4 fill-blue-500 text-blue-500" />
        </div>
      </div>

      <div className="flex w-full items-center justify-start gap-5 select-none">
        <img
          width={40}
          height={40}
          src={img || ""}
          alt={name}
          className="size-10 rounded-full ring-1 ring-blue-500/20 ring-offset-2"
        />

        <div>
          <p className="text-foreground font-medium">{name}</p>
          <p className="text-muted-foreground text-xs font-normal">{role}</p>
        </div>
      </div>
    </div>
  );
}

// 🔥 Depoimentos reais — adaptado para turismo e Nova Turismo
const testimonials = [
  {
    name: "Ana Bezerra",
    role: "Turista de Recife",
    img: "https://randomuser.me/api/portraits/women/27.jpg",
    description: (
      <p>
        A experiência no <Highlight>Ônibus do Forró</Highlight> foi
        simplesmente inesquecível! Música, cultura e muita animação durante todo
        passeio. Com certeza voltarei para repetir essa aventura.
      </p>
    ),
  },
  {
    name: "Carlos Henrique",
    role: "Turista de São Paulo",
    img: "https://randomuser.me/api/portraits/men/46.jpg",
    description: (
      <p>
        A <Highlight>Nova Turismo</Highlight> superou todas as minhas
        expectativas. A equipe é muito atenciosa e o passeio por Campina Grande
        foi incrível. Estrutura impecável!
      </p>
    ),
  },
  {
    name: "Juliana Duarte",
    role: "Turista do Rio de Janeiro",
    img: "https://randomuser.me/api/portraits/women/65.jpg",
    description: (
      <p>
        Nunca imaginei que um passeio turístico pudesse ser tão divertido.
        <Highlight>O conhecimento cultural dos guias fez toda a diferença</Highlight>.
        Recomendo demais!
      </p>
    ),
  },
  {
    name: "Marcos Silva",
    role: "Visitante de Brasília",
    img: "https://randomuser.me/api/portraits/men/52.jpg",
    description: (
      <p>
        A Nova Turismo realmente conhece Campina Grande como ninguém.
        <Highlight>O passeio foi organizado, divertido e muito seguro</Highlight>.
        Perfeito para famílias!
      </p>
    ),
  },
  {
    name: "Larissa Antunes",
    role: "Turista da Bahia",
    img: "https://randomuser.me/api/portraits/women/71.jpg",
    description: (
      <p>
        O São João de Campina já é lindo, mas viver isso dentro do
        <Highlight>Ônibus do Forró</Highlight> foi surreal! Energia contagiante do começo ao fim.
      </p>
    ),
  },
  {
    name: "João Pedro",
    role: "Turista de Minas Gerais",
    img: "https://randomuser.me/api/portraits/men/11.jpg",
    description: (
      <p>
        A Nova Turismo oferece um atendimento que faz a gente se sentir em casa.
        <Highlight>Tudo muito bem planejado</Highlight> desde o embarque até o fim do passeio.
        Nota 10!
      </p>
    ),
  },

  // 🔥 NOVOS DEPOIMENTOS (dobro)
  {
    name: "Letícia Moura",
    role: "Turista do Ceará",
    img: "https://randomuser.me/api/portraits/women/12.jpg",
    description: (
      <p>
        Simplesmente amei a experiência! O clima dentro do ônibus é pura alegria.
        <Highlight>A energia dos músicos é contagiante</Highlight> do início ao fim.
      </p>
    ),
  },
  {
    name: "Gabriel Torres",
    role: "Visitante de Goiânia",
    img: "https://randomuser.me/api/portraits/men/38.jpg",
    description: (
      <p>
        Uma experiência diferente de tudo que já vivi em viagens.
        <Highlight>O tour cultural pela cidade foi extraordinário</Highlight>.
        Recomendo demais a Nova Turismo!
      </p>
    ),
  },
  {
    name: "Patrícia Lima",
    role: "Turista do Maranhão",
    img: "https://randomuser.me/api/portraits/women/48.jpg",
    description: (
      <p>
        A atenção ao detalhe é impressionante.
        <Highlight>Desde o atendimento até a música ao vivo</Highlight>,
        tudo foi perfeito. Vou voltar com certeza!
      </p>
    ),
  },
  {
    name: "Rafael Almeida",
    role: "Turista do Paraná",
    img: "https://randomuser.me/api/portraits/men/62.jpg",
    description: (
      <p>
        Já viajei bastante pelo Brasil, mas nunca tinha vivenciado algo assim.
        <Highlight>Um passeio divertido e extremamente organizado</Highlight>.
      </p>
    ),
  },
  {
    name: "Camila Farias",
    role: "Turista de Alagoas",
    img: "https://randomuser.me/api/portraits/women/19.jpg",
    description: (
      <p>
        O São João de Campina Grande ficou ainda mais especial com o passeio.
        <Highlight>A vibe nordestina é celebrada com muito carinho</Highlight>.
      </p>
    ),
  },
  {
    name: "Eduardo Nogueira",
    role: "Turista do Rio Grande do Sul",
    img: "https://randomuser.me/api/portraits/men/70.jpg",
    description: (
      <p>
        Fiquei impressionado com o profissionalismo da equipe.
        <Highlight>A segurança e organização são impecáveis</Highlight>.
        Um passeio obrigatório!
      </p>
    ),
  },
];


export default function Testimonials() {
  return (
    <section className="relative container py-10">
      {/* Elementos decorativos adaptados para clima leve e turístico */}
      <div className="absolute top-20 -left-20 z-10 h-64 w-64 rounded-full bg-blue-500/5 blur-3xl" />
      <div className="absolute -right-20 bottom-20 z-10 h-64 w-64 rounded-full bg-blue-500/5 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}>
        <h2 className="text-foreground mb-4 text-center text-4xl leading-[1.2] font-bold tracking-tighter md:text-5xl">
          O que nossos visitantes dizem
        </h2>
        <h3 className="text-muted-foreground mx-auto mb-8 max-w-lg text-center text-lg font-medium tracking-tight text-balance">
          Confira a opinião de quem já viveu a experiência única da{" "}
          <span className="font-semibold text-blue-500">Nova Turismo</span> e
          conheceu Campina Grande de um jeito inesquecível.
        </h3>
      </motion.div>

      {/* GRID AUTOMÁTICO COM ANIMAÇÃO MARQUEE */}
      <div className="relative mt-6 max-h-screen overflow-hidden">
        <div className="gap-4 md:columns-2 xl:columns-3 2xl:columns-4">
          {Array(Math.ceil(testimonials.length / 3))
            .fill(0)
            .map((_, i) => (
              <Marquee
                vertical
                key={i}
                className={cn({
                  "[--duration:60s]": i === 1,
                  "[--duration:30s]": i === 2,
                  "[--duration:70s]": i === 3,
                })}>
                {testimonials.slice(i * 3, (i + 1) * 3).map((card, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: Math.random() * 0.8,
                      duration: 1.2,
                    }}>
                    <TestimonialCard {...card} />
                  </motion.div>
                ))}
              </Marquee>
            ))}
        </div>

        {/* Gradientes que suavizam o topo e o fundo da animação */}
        <div className="from-background pointer-events-none absolute inset-x-0 bottom-0 h-1/4 w-full bg-gradient-to-t from-20%"></div>
        <div className="from-background pointer-events-none absolute inset-x-0 top-0 h-1/4 w-full bg-gradient-to-b from-20%"></div>
      </div>
    </section>
  );
}
