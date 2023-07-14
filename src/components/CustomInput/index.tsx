import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ForwardedRef,
  InputHTMLAttributes,
  ReactNode,
  forwardRef
} from 'react';

import ResizeblePanel from '#components/ResizablePanel';

export type CustomInputProps = {
  className?: string;
  inputContainerClassName?: string;
  inputClassName?: string;
  error?: string | null | undefined;
  rigthIcon?: ReactNode;
} & InputHTMLAttributes<HTMLInputElement>;

const CustomInput = forwardRef(
  (
    {
      className,
      inputContainerClassName,
      inputClassName,
      rigthIcon,
      error,
      ...props
    }: CustomInputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => (
    <ResizeblePanel className={className}>
      <div
        className={clsx(
          'px-3 py-2 text-body-md',
          'border border-solid border-neutral-6',
          'flex flex-row items-center gap-3',
          'text-base placeholder:select-none placeholder:text-neutral-3',
          inputContainerClassName,
          { '!border-chestnutRose': !!error }
        )}
      >
        <input
          ref={ref}
          className={clsx('w-full grow text-sm', inputClassName)}
          {...props}
        />
        {rigthIcon && rigthIcon}
      </div>
      <AnimatePresence>
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -2 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 2 }}
          >
            <span className="text-chestnutRose text-xs ml-1">{error}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </ResizeblePanel>
  )
);

export default CustomInput;
