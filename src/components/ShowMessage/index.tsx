import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';

import ResizeblePanel from '#components/ResizablePanel';

type ShowMessageProps = {
  message?: string;
  className?: string;
};

export default function ShowMessage({ className, message }: ShowMessageProps) {
  return (
    <ResizeblePanel>
      <AnimatePresence>
        {message && (
          <motion.div
            initial={{ opacity: 0, y: -2 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 2 }}
          >
            <span className={clsx('text-xs', className)}>{message}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </ResizeblePanel>
  );
}
