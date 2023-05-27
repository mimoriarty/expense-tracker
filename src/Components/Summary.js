import { unit } from '../constants';

import './Summary.css';

export default function Summary({ amount }) {
  return(
    <div className='summary-container'>
      <div className="summary-header">
          <h2>Expenses</h2>

          <span className="summary-price">
              {unit} {amount.toFixed(2)} <span>total</span>
          </span>
      </div>
    </div>
  );
}