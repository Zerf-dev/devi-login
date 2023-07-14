import clsx from 'clsx';

import { PASSWORD_STRENGTH_VALIDATIONS } from '#constants/passwordValidations';

import ValidationLabel from './ValidationLabel';

type PasswordStrengthValidationProps = {
  className?: string;
  password?: string;
};

export default function PasswordStrengthValidation({
  className,
  password = ''
}: PasswordStrengthValidationProps) {
  return (
    <div
      className={clsx(
        'w-full p-4',
        'flex flex-col gap-2',
        'border border-solid border-neutral-6',
        className
      )}
    >
      <span className="text-sm">La contraseña debe cumplir con:</span>
      {PASSWORD_STRENGTH_VALIDATIONS.map(
        ({ id, label, validation, validations = [] }) => (
          <>
            <ValidationLabel
              className="ml-1"
              key={id}
              label={label}
              success={validation(password)}
            />
            {validations.map(
              ({
                id: childId,
                label: childLabel,
                validation: childValidation
              }) => (
                <ValidationLabel
                  className="ml-3"
                  key={childId}
                  label={childLabel}
                  success={childValidation(password)}
                />
              )
            )}
          </>
        )
      )}
    </div>
  );
}
