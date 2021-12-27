import {Route, Switch, Redirect} from 'react-router-dom';
import AllQuotes from './pages/AllQuotes';
import QuoteDateils from './pages/QuoteDetails';
import NewQuote from './pages/NewQuote';

function App() {
  return (
    <Switch>
      <Route path = '/' exact>
        <Redirect to = '/quotes'/>
      </Route>
      <Route path='/quotes' exact>
        <AllQuotes/>
      </Route>
          
      <Route path = '/quotes/:quoteId'>
        <QuoteDateils/>
      </Route>

      <Route path='/new-quote'>
          <NewQuote/>
      </Route> 
    </Switch>
  );
}

export default App;
