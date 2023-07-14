import { zodResolver } from '@hookform/resolvers/zod';
import { ReactNode } from 'react';
import { FormProvider, UseFormReturn, useForm } from 'react-hook-form';

import Input from './components/Input';
import Password from './components/Password';

type FormWrapperProps = {
  className?: string;
  defaultValues?: any;
  onSubmit: (data: any) => void;
  validationSchema?: any;
  children: ReactNode;
  getFormInstace?: (formMethods: UseFormReturn) => void;
};

export default function FormWrapper({
  className,
  defaultValues,
  onSubmit,
  validationSchema,
  children
}: FormWrapperProps) {
  const methods = useForm({
    defaultValues,
    ...(validationSchema && { resolver: zodResolver(validationSchema) })
  });
  const { handleSubmit } = methods;

  return (
    <FormProvider {...methods}>
      <form className={className} onSubmit={handleSubmit(onSubmit)}>
        {children}
      </form>
    </FormProvider>
  );
}

FormWrapper.Input = Input;
FormWrapper.Password = Password;
