import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Users, Clock, CheckCircle, Award, Zap, LineChart, Building } from "lucide-react";

// Componente do número animado simples (sem o NumberTicker do Next)
function NumberCounter({ value }) {
  return <span>{value.toLocaleString()}</span>;
}

function StatItem({ value, label, icon, delay = 0, color }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="group relative overflow-hidden rounded-xl border p-6 shadow-md bg-white"
    >
      <div className={`absolute -top-6 -right-6 h-24 w-24 rounded-full bg-gradient-to-br ${color} opacity-20 blur-2xl`} />
      <div className="flex items-center gap-4">
        <div className={`flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br ${color} text-white`}>
          {icon}
        </div>
        <div>
          <h3 className="text-3xl font-bold">
            <NumberCounter value={value} />
            <span className="ml-1 text-sm font-medium opacity-70">+</span>
          </h3>
          <p className="text-gray-600 text-sm font-medium">{label}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function AboutUs() {
  const aboutRef = useRef(null);
  const timelineRef = useRef(null);

  const aboutInView = useInView(aboutRef, { once: true, amount: 0.3 });
  const timelineInView = useInView(timelineRef, { once: true, amount: 0.2 });

  const stats = [
    { value: 5000, label: "Clientes Atendidos", icon: <Users className="h-5 w-5" />, delay: 0, color: "from-rose-500 to-orange-500" },
    { value: 20, label: "Anos de Experiência", icon: <Clock className="h-5 w-5" />, delay: 0.1, color: "from-blue-500 to-cyan-500" },
    { value: 100, label: "Eventos Realizados", icon: <CheckCircle className="h-5 w-5" />, delay: 0.2, color: "from-green-500 to-emerald-500" },
    { value: 24, label: "Premiações", icon: <Award className="h-5 w-5" />, delay: 0.3, color: "from-purple-500 to-violet-500" },
  ];

  const timeline = [
    { year: "2003", title: "Fundação", desc: "Nascemos com o propósito de conectar pessoas aos seus sonhos e destinos." },
    { year: "2010", title: "Turismo Receptivo", desc: "Expandimos nossas operações com serviços de receptivo em Campina Grande." },
    { year: "2016", title: "Frota Variada", desc: "Adicionamos vans, ônibus e veículos executivos à nossa frota." },
    { year: "2023", title: "Eventos Culturais", desc: "Nos tornamos pioneiros em eventos inovadores, valorizando artistas locais." },
  ];

  return (
    <section className="relative w-full overflow-hidden py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto max-w-6xl px-4 md:px-6">
        {/* Cabeçalho */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-gray-800 sm:text-5xl"
          >
            Quem Somos
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-lg text-gray-600"
          >
            Conheça a nossa agência
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6 text-base text-gray-700 leading-relaxed"
          >
            Com mais de 20 anos no mercado turístico campinense, a{" "}
            <strong>NOVA TURISMO</strong> é pioneira na realização de eventos inovadores,
            sempre com foco na cultura local e na valorização de artistas da nossa terra.
            Além de larga experiência no turismo receptivo e na locação de veículos,
            nossa frota inclui vans, ônibus, veículos executivos e mais. Através de
            profissionais treinados, promovemos a conexão entre as pessoas, seus sonhos e destinos.
          </motion.p>
        </div>

        {/* Estatísticas */}
        <div className="mb-20">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, i) => (
              <StatItem key={i} {...stat} />
            ))}
          </div>
        </div>

        {/* Nossa Jornada */}
        <div ref={timelineRef} className="relative mx-auto max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={timelineInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-10 text-center text-2xl font-bold md:text-3xl text-gray-800"
          >
            Nossa Jornada
          </motion.h2>
          <div className="relative border-l border-gray-300 pl-6">
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={timelineInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative mb-10"
              >
                <div className="absolute -left-3 flex h-6 w-6 p-5 items-center justify-center rounded-full bg-blue-500 text-xs font-bold text-white">
                  {item.year}
                </div>
                <h3 className="text-lg font-bold ml-10 text-gray-800">{item.title}</h3>
                <p className="text-gray-600 ml-10">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
