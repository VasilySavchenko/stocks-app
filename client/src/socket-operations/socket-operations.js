import io from 'socket.io-client';
import { putDataAction } from '../store/actions/action';

const socket = io.connect('http://localhost:4000');

export const startStocks = () => {
  socket.connect().emit('start');
};
export const getStocks = () => (dispatch) => {
  try {
    socket.on('ticker', (response) => {
      dispatch(putDataAction(response));
    });
  } catch (error) {
    console.log(error);
  }
};

export const stopStocks = () => {
  socket.disconnect();
};
