import { SWITCH_THEME } from './actionTypes'

const themeReducer = (state = 'light', { type }) => {
  switch (type) {
    case SWITCH_THEME:
      return state === 'light' ? 'dark' : 'light';
    default:
      return state;
  }
}

export { themeReducer }
