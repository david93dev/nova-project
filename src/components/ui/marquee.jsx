import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export function Marquee({ children, vertical = false, className }) {
  const direction = vertical ? 'y' : 'x';
  const distance = vertical ? 100 : 100; // pode ajustar o valor conforme o tamanho do container

  return (
    <div className={cn('overflow-hidden', className)}>
      <motion.div
        animate={{ [direction]: ['0%', '-100%'] }}
        transition={{
          repeat: Infinity,
          repeatType: 'loop',
          duration: 20, // velocidade do marquee
          ease: 'linear',
        }}
        className={cn('flex', vertical ? 'flex-col' : 'flex-row')}
      >
        {children}
        {children} {/* duplicamos para criar loop contínuo */}
      </motion.div>
    </div>
  );
}
