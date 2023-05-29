import { unit } from '../constants';

import './Summary.css';

export default function Summary({ amount }) {
  return(
    <div className='summary-container'>
      {amount > 0 ?
        <div className={"summary-header " + (
          amount < 50
          ? 'good'
          : amount > 150
          ? 'bad'
          : ''
        )}>
          <h2>Expenses</h2>

          <span className="summary-price">
              {unit} {amount.toFixed(2)} <span>total</span>
          </span>
      </div> :
      <p style={{ textAlign: 'center' }}>There're not expenses for this period, congrats you're saving money!!!</p>
      }  
    </div>
  );
}