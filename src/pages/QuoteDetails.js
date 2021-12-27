import { useParams, Route } from "react-router-dom";
import Comments from '../components/comments/Comments'

const QuoteDateils = () => {
    const params = useParams() ;

    return (
        <>
            <h1>Quote Detail pages</h1>
            <p>{params.quoteId}</p>
            <Route path = {`/quotes/${params.quoteId}/comments`} >
                <Comments/>
            </Route>
        </>
    )
};

export default QuoteDateils ;