import React, { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { addTickerAction } from '../store/actions/action';
import { hiddenTickersSelector } from '../store/selectors/selectors';
import { useDispatch } from 'react-redux';
import { BsFillEyeSlashFill } from 'react-icons/bs';
import { AiOutlineSearch } from 'react-icons/ai';

function TableComponent({ data }) {
  const [value, setValue] = useState('');
  const hiddenTickers = useSelector(hiddenTickersSelector);
  const dispatch = useDispatch();

  const handleDelete = (obj) => {
    dispatch(addTickerAction(obj.ticker));
  };
  const stocksData = useMemo(
    () => data.filter(({ ticker }) => !hiddenTickers.includes(ticker)),
    [data, hiddenTickers]
  );
  const filterStocks = stocksData.filter((stocks) => {
    return stocks.ticker.toLowerCase().includes(value.toLocaleLowerCase());
  });

  return (
    <table className="table table-dark table-striped m-0">
      <thead>
        <tr>
          <th colSpan={'1'}>
            <AiOutlineSearch className="m-2" />
            <input
              onChange={(e) => setValue(e.target.value)}
              placeholder="search"
            ></input>
          </th>
          <th colSpan={'5'}></th>
        </tr>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Price</th>
          <th scope="col">Change</th>
          <th scope="col">Change Percent</th>
          <th scope="col">Hidden</th>
        </tr>
      </thead>
      <tbody className="border-top-0">
        {filterStocks.map((obj, indx) => {
          const isProfit = +obj.price - +obj.change > 0;
          return (
            <tr key={indx + 1}>
              <th scope="row">{indx + 1}</th>
              <td>{obj.ticker}</td>
              <td>{`${obj.price} $`}</td>
              <td>{`${obj.change} $`}</td>
              {isProfit ? (
                <td style={{ color: 'green' }}>
                  &#8593;{`${obj.change_percent}%`}
                </td>
              ) : (
                <td style={{ color: 'red' }}>
                  &#8595;{`${obj.change_percent}%`}
                </td>
              )}
              <td>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => {
                    handleDelete(obj);
                  }}
                >
                  <BsFillEyeSlashFill />
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default TableComponent;
