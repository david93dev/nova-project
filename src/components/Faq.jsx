import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { PlusIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from '@/components/ui/accordion';

const items = [
  {
    id: '1',
    title: 'O que é o Ônibus do Forró?',
    content:
      'O Ônibus do Forró é uma experiência única de turismo em Campina Grande. Durante o passeio, você aproveita música ao vivo, forró pé de serra e visita os principais pontos turísticos da cidade.',
  },
  {
    id: '2',
    title: 'Como funciona o passeio?',
    content:
      'Você embarca em um ônibus temático com animação de músicos locais e guias especializados. O roteiro inclui visitas a pontos turísticos e culturais de Campina Grande, sempre em clima de São João.',
  },
  {
    id: '3',
    title: 'O passeio é para todas as idades?',
    content:
      'Sim! O Ônibus do Forró é uma atividade para toda a família. Crianças, jovens e adultos podem aproveitar a música, a cultura e as tradições nordestinas em um ambiente alegre e seguro.',
  },
  {
    id: '4',
    title: 'É preciso reservar com antecedência?',
    content:
      'Recomendamos sim, principalmente durante o período do São João, quando a procura é muito alta. Garanta sua vaga e viva essa experiência única sem preocupações!',
  },
  {
    id: '5',
    title: 'O passeio acontece fora do período junino?',
    content:
      'Sim! Apesar de ter como inspiração o São João, o Ônibus do Forró funciona durante todo o ano, oferecendo aos visitantes uma imersão cultural no coração de Campina Grande.',
  },
];

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 10,
  },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
      duration: 0.4,
    },
  }),
};

export default function Faq() {
  return (
    <section id='faq' className="relative py-16 md:py-20 overflow-hidden">
      {/* Background gradients com tons de azul e clima junino */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(135deg, #0e2938 0%, #1b365d 40%, #2c4c7c 100%)',
        }}
      />
      <div
        className="absolute top-0 left-0 w-72 h-72 rounded-full bg-blue-400/20 blur-3xl -z-10"
        style={{ transform: 'translate(-50%, -30%)' }}
      />
      <div
        className="absolute bottom-0 right-0 w-72 h-72 rounded-full bg-indigo-500/20 blur-3xl -z-10"
        style={{ transform: 'translate(50%, 30%)' }}
      />

      <div className="relative container mx-auto max-w-6xl px-4 md:px-6 text-white">
        <div className="mb-10 text-center">
          <motion.h2
            className="mb-4 text-3xl font-bold tracking-tight md:text-4xl"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Perguntas{' '}
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Frequentes
            </span>
          </motion.h2>
          <motion.p
            className="mx-auto max-w-2xl text-blue-100/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Tudo o que você precisa saber sobre o Ônibus do Forró e como viver a melhor experiência turística em Campina Grande.
          </motion.p>
        </div>

        <motion.div
          className="relative mx-auto max-w-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {/* efeitos decorativos */}
          <div className="bg-blue-500/10 absolute -top-4 -left-4 -z-10 h-72 w-72 rounded-full blur-3xl" />
          <div className="bg-yellow-400/10 absolute -right-4 -bottom-4 -z-10 h-72 w-72 rounded-full blur-3xl" />

          <Accordion
            type="single"
            collapsible
            className="w-full rounded-xl border border-white/10 bg-white/5 p-2 backdrop-blur-md shadow-lg"
            defaultValue="1"
          >
            {items.map((item, index) => (
              <motion.div
                key={item.id}
                custom={index}
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                <AccordionItem
                  value={item.id}
                  className={cn(
                    'my-1 overflow-hidden rounded-lg border-none px-2 shadow-sm transition-all bg-white/5',
                    'data-[state=open]:bg-white/10 data-[state=open]:shadow-md',
                  )}
                >
                  <AccordionPrimitive.Header className="flex">
                    <AccordionPrimitive.Trigger
                      className={cn(
                        'group flex flex-1 items-center justify-between gap-4 py-4 text-left text-base font-medium',
                        'hover:text-yellow-300 transition-all duration-300 outline-none',
                        'focus-visible:ring-2 focus-visible:ring-yellow-300/50',
                        'data-[state=open]:text-yellow-400',
                      )}
                    >
                      {item.title}
                      <PlusIcon
                        size={18}
                        className={cn(
                          'text-yellow-300 shrink-0 transition-transform duration-300 ease-out',
                          'group-data-[state=open]:rotate-45',
                        )}
                        aria-hidden="true"
                      />
                    </AccordionPrimitive.Trigger>
                  </AccordionPrimitive.Header>
                  <AccordionContent
                    className={cn(
                      'overflow-hidden pt-0 pb-4 text-blue-100/80',
                      'data-[state=open]:animate-accordion-down',
                      'data-[state=closed]:animate-accordion-up',
                    )}
                  >
                    <div className="border-t border-white/10 pt-3">
                      {item.content}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
