import { useParams, Route, Link , useRouteMatch} from "react-router-dom";
import Comments from '../components/comments/Comments';
import { useEffect } from "react";
import HighlightedQuote from '../components/quotes/HighlightedQuote';
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";
import LoadingSpinner from "../components/UI/LoadingSpinner";


const QuoteDateils = () => {

    const match = useRouteMatch()
    const params = useParams() ;

    const {sendRequest, status, data: quote, error } = useHttp(getSingleQuote, true ) ;

    useEffect(() => {
        sendRequest(params.quoteId);
    }, [sendRequest, params.quoteId]);

    if (status === 'pending') {
        return (
            <div className="centered">
                <LoadingSpinner /> 
            </div>
        )
    };

    if (error) {
        return (
            <p className="centered">
                {error}
            </p>
        )
    };


    if (!quote) {
        return (
            <p>No quote found.</p>
        )
    }
    return (
        <>
            <HighlightedQuote text = {quote.text} author = {quote.author}/>
            <Route path = {match.path} exact>
                <div className="centered">
                    <Link className="btn--flat" to = {`${match.url}/comments`}>Load Comments</Link>
                </div>
            </Route>
            
            <Route path = {`${match.path}/comments`} >
                <Comments/>
            </Route>
        </>
    )
};

export default QuoteDateils ;