import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import useMeasure from 'react-use-measure';

type ResizeblePanelProps = {
  className?: string;
  containerClassName?: string;
  children?: ReactNode;
};

export default function ResizeblePanel({
  className,
  containerClassName,
  children
}: ResizeblePanelProps) {
  const [ref, bounds] = useMeasure();

  return (
    <motion.div
      animate={{ height: bounds.height > 0 ? bounds.height : undefined }}
      className={className}
    >
      <div ref={ref} className={containerClassName}>
        {children}
      </div>
    </motion.div>
  );
}
