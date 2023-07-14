import { ChangeEvent, useMemo } from 'react';
import { useFormContext } from 'react-hook-form';

import CustomInput, { CustomInputProps } from '#components/CustomInput';

type InputProps = {
  name: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
} & CustomInputProps;

export default function Input({ name, onChange, ...props }: InputProps) {
  const methods = useFormContext();
  const { register, formState } = methods;
  const error = formState?.errors?.[name]?.message as string;
  const inputProps = useMemo(() => register(name), [register, name]);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    inputProps.onChange(e);
    onChange?.(e);
  };

  return (
    <CustomInput
      error={error}
      {...props}
      {...register(name)}
      onChange={handleOnChange}
    />
  );
}
