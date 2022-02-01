import classes from './HighlightedQuote.module.css';

const HighlightedQuote = (props) => {
  return (
    <div className={classes.quote}>
      <p>{props.text}</p>
      <figcaption>{props.author}</figcaption>
    </div>
  );
};

export default HighlightedQuote;
