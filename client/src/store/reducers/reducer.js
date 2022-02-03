import { PUT_DATA, ADD_TICKERS } from '../actions/action';

const initialState = {
  data: [],
  hiddenTickers: [],
};
export const reducer = (state = initialState, action) => {
  if (action.type === PUT_DATA) {
    return {
      ...state,
      data: [...action.data],
    };
  }
  if (action.type === ADD_TICKERS) {
    return {
      ...state,
      hiddenTickers: [...state.hiddenTickers, action.payloud],
    };
  }

  return state;
};
