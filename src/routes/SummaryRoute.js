import { useContext } from 'react';

import { expensesContext } from '../App';
import Summary from '../Components/Summary';

export default function SummaryRoute() {
  const { summary } = useContext(expensesContext);

  return(
    <Summary amount={summary}/>
  );
}