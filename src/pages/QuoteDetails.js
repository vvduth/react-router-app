import { useParams } from "react-router-dom";

const QuoteDateils = () => {
    const params = useParams() ;

    return (
        <>
            <h1>Quote Detail pages</h1>
            <p>{params.quoteId}</p>
        </>
    )
};

export default QuoteDateils ;