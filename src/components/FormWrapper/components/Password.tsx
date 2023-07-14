import { ChangeEvent, useMemo } from 'react';
import { useFormContext } from 'react-hook-form';

import PasswordInput, { PasswordInputProps } from '#components/PasswordInput';

type PasswordProps = {
  name: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
} & PasswordInputProps;

export default function Password({ name, onChange, ...props }: PasswordProps) {
  const methods = useFormContext();
  const { register, formState } = methods;
  const error = formState?.errors?.[name]?.message as string;
  const inputProps = useMemo(() => register(name), [register, name]);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    inputProps.onChange(e);
    onChange?.(e);
  };

  return (
    <PasswordInput
      error={error}
      {...props}
      {...register(name)}
      onChange={handleOnChange}
    />
  );
}
