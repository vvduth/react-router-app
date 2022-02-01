import {Route, Switch, Redirect} from 'react-router-dom';
import AllQuotes from './pages/AllQuotes';
import QuoteDateils from './pages/QuoteDetails';
import NewQuote from './pages/NewQuote';
import Layout from './components/layout/Layout';
import NotFound from './pages/NotFound';
function App() {
  return (
    <Layout>
    <Switch>
      <Route path = '/' exact>
        <Redirect to = '/react-router-app'/>
      </Route>
      <Route path = '/react-router-app' exact>
        <Redirect to = '/react-router-app/quotes'/>
      </Route>
      <Route path='/react-router-app/quotes' exact>
        <AllQuotes/>
      </Route>
          
      <Route path = '/react-router-app/quotes/:quoteId'>
        <QuoteDateils/>
      </Route>

      <Route path='/react-router-app/new-quote'>
          <NewQuote/>
      </Route> 
      
      <Route path = '*'>
           <NotFound />
      </Route>
    </Switch>
    </Layout>
  );
}

export default App;
