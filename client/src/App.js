import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import ControlPanelComponet from './components/СontrolPanelComponent';
import {
  getStocks,
  startStocks,
  stopStocks,
} from './socket-operations/socket-operations';
import TableComponent from './components/TableComponent';
import { tickerDataSelector } from './store/selectors/selectors';
import './index.css';

function App() {
  const dispatch = useDispatch();
  const data = useSelector(tickerDataSelector);

  useEffect(() => {
    startStocks();
    dispatch(getStocks());
  }, [dispatch]);

  return (
    <div className="App">
      <TableComponent data={data} />
      <ControlPanelComponet handleStart={startStocks} handleStop={stopStocks} />
    </div>
  );
}

export default App;
