import QuoteList from '../components/quotes/QuoteList'

const DUMMY_QUOTES = [
    {
        id: 'q1',
        author: 'Duc',
        text: 'Asian Kyle Walker.',
    },
    {
        id: 'q2',
        author: 'Thai',
        text: 'Get an paid internship!',
    }
]

const AllQuotes = () => {
    return (
        <>
            <QuoteList quotes= {DUMMY_QUOTES}/>
        </>
    )
};

export default AllQuotes ;