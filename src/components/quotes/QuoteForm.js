import { useRef, useState } from 'react';
import { Prompt } from 'react-router-dom';
import Card from '../UI/Card';
import LoadingSpinner from '../UI/LoadingSpinner';
import classes from './QuoteForm.module.css';

const QuoteForm = (props) => {
  const [isEntered, setIsEntered] = useState(false);
  const authorInputRef = useRef();
  const textInputRef = useRef();
  const topicRef = useRef();

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;
    const enteredTopic = topicRef.current.value

    // optional: Could validate here

    props.onAddQuote({ author: enteredAuthor, text: enteredText, topic: enteredTopic });
  }

  const finishEnteringHandler = () => {
    setIsEntered(false);
  }

  const formFocusHanlder = () => {
    console.log('Focus');
    setIsEntered(true);
  }

  return (
    <>
    <Prompt when = {isEntered} message={(location) =>'Are you sure you want to leave? All your entered data will be lost.' }/>
    <Card>
      <form onFocus = {formFocusHanlder} className={classes.form} onSubmit={submitFormHandler}>
        {props.isLoading && (
          <div className={classes.loading}>
            <LoadingSpinner />
          </div>
        )}

        <div className={classes.control}>
          <label htmlFor='author'>Deadlines (if no deadlines, type no): </label>
          <input type='text' id='author' ref={authorInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='topic'>Topic (name of the relevant courses/fields): </label>
          <input type='text' id='author' ref={topicRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='text'>Text</label>
          <textarea id='text' rows='5' ref={textInputRef}></textarea>
        </div>
        
        <div className={classes.actions}>
          <button onClick = {finishEnteringHandler} className='btn'>Add Question</button>
        </div>
      </form>
    </Card>
    </>
  );
};

export default QuoteForm;
