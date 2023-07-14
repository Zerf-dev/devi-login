import { ReactComponent as EyeCloseIcon } from '#assets/svgs/eye-close.svg';
import { ReactComponent as EyeOpenIcon } from '#assets/svgs/eye-open.svg';

export const PASSWORD_INPUT_TYPES = {
  PASSWORD: 'password',
  TEXT: 'text'
};

export const PASSWORD_INPUT_STATES = {
  [PASSWORD_INPUT_TYPES.PASSWORD]: {
    Icon: EyeOpenIcon,
    nextState: PASSWORD_INPUT_TYPES.TEXT
  },
  [PASSWORD_INPUT_TYPES.TEXT]: {
    Icon: EyeCloseIcon,
    nextState: PASSWORD_INPUT_TYPES.PASSWORD
  }
};
