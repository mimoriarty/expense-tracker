import { useContext } from 'react';

import { expensesContext } from '../App';
import Summary from '../Components/Summary';

export default function SummaryRoute() {
  const { summary } = useContext(expensesContext);

  return(
    <ul className='list'>
      <li>
        <legend className="pure-menu-heading">Monthly expenses</legend>
        <Summary amount={summary.monthly}/>
      </li>
      <li>
        <legend className="pure-menu-heading">OverAll expenses</legend>
        <Summary amount={summary.overAll}/>
      </li>
    </ul>
  );
}