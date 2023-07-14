import clsx from 'clsx';
import { ForwardedRef, forwardRef, useState } from 'react';

import CustomInput, { CustomInputProps } from '#components/CustomInput';

import { PASSWORD_INPUT_STATES, PASSWORD_INPUT_TYPES } from './constants';

export type PasswordInputProps = CustomInputProps;

const PasswordInput = forwardRef(
  (props: PasswordInputProps, ref: ForwardedRef<HTMLInputElement>) => {
    const { error } = props;
    const [inputType, setInputType] = useState(PASSWORD_INPUT_TYPES.PASSWORD);

    const { Icon } = PASSWORD_INPUT_STATES[inputType];

    const onClickIcon = () =>
      setInputType(prevValue => PASSWORD_INPUT_STATES[prevValue].nextState);

    return (
      <CustomInput
        ref={ref}
        type={inputType}
        rigthIcon={
          <Icon
            className={clsx('h-6 cursor-pointer select-none text-neutral-6', {
              '!text-chestnutRose': !!error
            })}
            onClick={onClickIcon}
          />
        }
        inputClassName="[&[type=password]]:tracking-widest placeholder:tracking-normal"
        {...props}
      />
    );
  }
);

export default PasswordInput;
